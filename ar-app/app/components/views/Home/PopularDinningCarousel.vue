<template>
  <ScrollView row="1" orientation="horizontal" scrollBarIndicatorVisible="false">
    <StackLayout orientation="horizontal">
      <GridLayout
        class="pop-card-carousel"
        v-for="item in googlePlaceApiGetter"
        :key="item.id"
        rows="auto"
        columns="*"
      >
        <Button
          row="6"
          col="6"
          class="pop-card"
          :backgroundImage="item.photos[0].photo_reference"
          @tap="getPlaceInfo(item)"
          text="helllo"
        />
        <!-- <Label class="description-of-pop-card" :text="item.name"/> -->
      </GridLayout>
    </StackLayout>
  </ScrollView>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import restaurantProfile from "../RestaurantProfile";

export default {
  name: "popularDinningCarousel",

  created: function() {
    let formData = {
      coordinates: "34.235512,-118.531723",
      radius: "500",
      types: "restaurant"
    };
    this.$store.dispatch("googleplaceapi", formData);
  },
  computed: {
    ...mapGetters(["googlePlaceApiGetter"])
  },
  methods: {
    getPlaceInfo(item) {
      let api = item.place_id;
      this.$store.dispatch("restaurantInfo", api);
      try {
        this.$navigateTo(restaurantProfile);
      } catch (e) {
        console.log("error");
        console.log(e);
      }
    }
  },
  data() {
    return {
      search: ""
    };
  }
};
</script>

<style>
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
