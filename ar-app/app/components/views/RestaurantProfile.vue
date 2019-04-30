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
      </StackLayout>
    </GridLayout>
  </page>
</template>

<script>
import imageCarousel from "./RestaurantProfileComponents/ImageCarousel";
import { mapState, mapGetters, mapActions } from "vuex";
const geolocation = require("nativescript-geolocation");
const { Accuracy } = require("tns-core-modules/ui/enums");
export default {
  name: "restaurantProfile",
  computed: {
    ...mapGetters(["restaurantInfoApiGetter"])
  },
  components: {
    imageCarousel
  },
  methods: {
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
.lab {
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
