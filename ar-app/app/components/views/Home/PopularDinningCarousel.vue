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
        <GridLayout row="2">
          <GridLayout
          class="pop-card-carousel"
          v-for="photo in item.photos"
          :key="photo.photo_reference"
          rows="auto"
          columns="*"
        >
          <GridLayout row="2">
            <Image
              row="0"
              class="pop-card"
              stretch="aspectFill"
              :src="photo.photo_reference"
            />
          </GridLayout>
        </GridLayout>
          <Label row="1" class="description-of-pop-card" @tap="print(item.photos.photos[0])" :text="item.name"/>
        </GridLayout>
      </GridLayout>
    </StackLayout>
  </ScrollView> 
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "popularDinningCarousel",
  created: function() {
    console.log("popular dinning On Created");
    console.log("popular dinning On Created");
    console.log("popular dinning On Created");
    console.log("popular dinning On Created");
    let formData = {
      coordinates: "34.235512,-118.531723",
      radius: "500",
      types: "restaurant"
    };

    this.$store.dispatch("googleplaceapi", formData);
    console.log("popular dinning On finished Created");

    // console.log("computed");
    // console.log(googlePlaceApiGetter);
    // console.log("computed");
  },
  computed: {
    ...mapGetters(["googlePlaceApiGetter"])

    // com: function(){}
    // console.log("computed");
    // console.log(googlePlaceApiGetter);
    // console.log("computed");
  },
  methods: {
    print(item) {
      console.log("CHEcking " + item.photo_reference.toString());
    }
  },
  data() {
    return {
      search: ""
      // googlePlaceApiGetter: []
    };
  }
};
</script>

<style>
.pop-card-carousel {
  padding-left: 20%;
  padding-right: 20%;
  padding-bottom: 5%;
}

.description-of-pop-card {
  float: right;
  size: 100;
  padding-left: 50;
  padding-top: 225;
}

.pop-card {
  width: 300;
  height: 140;
  border-radius: 25;
}
</style>
