<template>
  <ScrollView row="1" orientation="horizontal" scrollBarIndicatorVisible="false">
    <StackLayout orientation="horizontal">
      <GridLayout
        class="pop-card-carousel"
        v-for="photo in restaurantInfoApiGetter.photos"
        :key="photo.photo_reference"
        rows="auto"
        columns="*"
      >
        <Image class="pop-card" :src="photo.photo_reference" stretch="aspectFill"/>
        <!-- <Label class="description-of-pop-card" :text="item.name"/> -->
      </GridLayout>
    </StackLayout>
  </ScrollView>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "imageCarousel",
  computed: {
    ...mapGetters(["restaurantInfoApiGetter"])
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
