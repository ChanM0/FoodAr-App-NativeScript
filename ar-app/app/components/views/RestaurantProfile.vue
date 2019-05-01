<template>
  <page>
    <GridLayout row="2">
      <StackLayout
        orientation="vertical"
        width="100%"
        height="100%"
        backgroundColor="white"
        @tap="clearFocus"
      >
        <imageCarousel></imageCarousel>
        <Label class="text" :text="restaurantInfoApiGetter.name"/>
        <Label class="text" :text="restaurantInfoApiGetter.rating"/>
        <Label class="text" :text="restaurantInfoApiGetter.formatted_address"/>
        <Label class="text" :text="restaurantInfoApiGetter.formatted_phone_number"/>
        <!-- <Button
          row="6"
          col="6"
          class="pop-card"
          color="red"
          @tap="getLocation(restaurantInfoApiGetter.geometry.location)"
          text="helllo"
        />-->
        <WrapLayout horizontalAlignment="center">
          <Button @tap="getDirections">Get Directions</Button>
          <Button @tap="clearRoute">Clear Route</Button>
          <Button @tap="startJourney">Start Journey</Button>
          <button @tap="endJourney">End Journey</button>
        </WrapLayout>

        <DockLayout>
          <MapView
            width="100%"
            height="85%"
            dock="top"
            :zoom="zoom"
            :latitude="origin.latitude"
            :longitude="origin.longitude"
            v-if="allowExecution"
            @mapReady="mapReady"
            @coordinateLongPress="locationSelected(restaurantInfoApiGetter.geometry.location)"
          />
          <TextView dock="bottom" :text="journeyDetails" editable="false"/>
        </DockLayout>
      </StackLayout>
    </GridLayout>
  </page>
</template>

<script>
import * as permissions from "nativescript-permissions";
import * as platform from "platform";
import { mapState, mapGetters, mapActions } from "vuex";
import imageCarousel from "./RestaurantProfileComponents/ImageCarousel";
import MapsHelper from "./RestaurantProfileComponents/MapsHelper.js";
export default {
  name: "restaurantProfile",
  computed: {
    ...mapGetters(["restaurantInfoApiGetter"])
  },
  components: {
    imageCarousel
  },
  data() {
    return {
      origin: { latitude: 34.235512, longitude: -118.531723 },
      destination: { latitude: 0, longitude: 0 },
      journeyDetails: "Journey: Not started yet!",
      allowExecution: false,
      journeyStarted: false,
      mapView: null,
      zoom: 16,
      APIKEY: "AIzaSyCGSGFdT9e2xBE0FyzN-AC0WZpSuHv8PWk"
    };
  },
  created: function() {
    /* dont run the android permissions routine for iOS */
    if (platform.isIOS) {
      this.allowExecution = true;
      return;
    }
    /* list of permissions needed */
    let permissionsNeeded = [
      android.Manifest.permission.ACCESS_FINE_LOCATION,
      android.Manifest.permission.ACCESS_COARSE_LOCATION
    ];
    /* showing up permissions dialog */
    permissions
      .requestPermissions(permissionsNeeded, "Give it to me!")
      .then(() => (this.allowExecution = true))
      .catch(() => (this.allowExecution = false));
  },
  mixins: [
    MapsHelper.MapsUIHelper,
    MapsHelper.DirectionsAPIHelper,
    MapsHelper.DistanceMatrixAPIHelper,
    MapsHelper.LocationHelper
  ],
  methods: {
    mapReady(args) {
      /* get the mapView instance */
      this.mapView = args.object;

      /* ios map center bug fix 
      setTimeout(() => {
        this.mapView.height = {
          unit: this.mapView.height.unit,
          value: this.mapView.height.value + 0.0004
        };
      }, 100); */

      /* turn on my location button on map */
      this.enableMyLocationButton(true);
      /* add destination marker to map */
      this.addMarkerToMap(this.destinationMarker, true);
      /* add my location marker to map (which will point to our location when journey starts) - visibility hidden  */
      this.addMarkerToMap(this.myLocationMarker, false);
      /* set map origin coordinates to present device location */
      this.fetchMyLocation();
    },
    locationSelected(args) {
      /* get coordinates of the point where user long pressed */
      console.log("LocationSelected");
      console.log(args);
      let lat = args.lat;
      let lng = args.lng;
      /* set the obtained coordinates as destination coordinates */
      this.destination.latitude = lat;
      this.destination.longitude = lng;
      /* move the destination marker to the same coordinates */
      this.setMarker(this.destinationMarker, lat, lng);
    },
    getDirections() {
      /* hit Directions API - as origin and destination coordinates are set */
      this.hitDirectionsAPI().then(response => {
        /* draw route from encoded polyline points */
        this.drawRoute(response.encodedPolylinePoints);

        /* if jouney started, don't adjust the camera */
        if (this.journeyStarted) return;

        /* adjust camera to bring route into view */
        this.getRouteInView(response.northEastBounds, response.southWestBounds);
      });
    },
    clearRoute() {
      /* remove route drawn between locations on map */
      this.mapView.removeAllPolylines();
    },
    startJourney() {
      /* hide my location indicator and button */
      this.enableMyLocationButton(false);
      /* un-hide my location marker */
      this.myLocationMarker.visible = true;
      /* update journey details */
      this.journeyStarted = true;
      this.journeyDetails = "Journey started...";
      /* start watching for location changes and update the map and journey details accordingly */
      this.watchLocationAndUpdateJourney();
    },
    endJourney() {
      /* stop watching for location changes */
      this.clearWatch();
      /* remove the route drawn on map */
      this.clearRoute();
      /* hide my location marker  */
      this.myLocationMarker.visible = false;
      /* bring back my location button on screen */
      this.enableMyLocationButton(true);
      /* update journey details */
      this.journeyStarted = false;
      this.journeyDetails = "Destination Reached.";
    },
    clearFocus() {
      try {
        this.$refs.searchBar.nativeView.dismissSoftInput();
      } catch (e) {
        console.log("error");
        console.log(e);
      }
    }
  }
};
</script>

<style>
button {
  font-size: 9;
  background-color: #474747;
  color: white;
  width: 25%;
}
ActionBar {
  background-color: #474747;
  color: white;
}
Page {
  background-color: #474747;
}
TextView {
  border-bottom-color: transparent;
  color: white;
  border-bottom-width: 1;
  padding: 15;
}
.pop-card-carousel {
  padding-left: 15%;
  /* padding-right: 20%; */
  /* padding-bottom: 5%; */
}

.description-of-pop-card {
  float: right;
  size: 100;
  padding-left: 50%;
  padding-top: 120;
  color: white;
}

.pop-card {
  width: 300;
  height: 140;
  border-radius: 25;
}
</style>
