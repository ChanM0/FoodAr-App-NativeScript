<template>
  <GridLayout row="1">
    <ScrollView
      row="1"
      orientation="horizontal"
      scrollBarIndicatorVisible="false"
      paddingRight="15"
    >
      <StackLayout orientation="horizontal">
        <GridLayout
          class="carousel"
          v-for="item in arCollection"
          :key="item.id"
          rows="auto"
          columns="*"
        >
          <Image class="card-img-thumb" stretch="aspectFill" :src="item.imageSrc"/>
        </GridLayout>
      </StackLayout>
    </ScrollView>
  </GridLayout>
</template>

<script>
export default {
  name: "arCarousel",
  created: function() {
    console.log("On Created");
  },
  data() {
    return {
      search: "",
      arCollection: [
        {
          id: 1,
          name: "Germany",
          imageSrc: "https://play.nativescript.org/dist/assets/img/flags/de.png"
        },
        {
          id: 2,
          name: "Spain",
          imageSrc: "https://play.nativescript.org/dist/assets/img/flags/es.png"
        },
        {
          id: 3,
          name: "Ethiopia",
          imageSrc: "https://play.nativescript.org/dist/assets/img/flags/et.png"
        },
        {
          id: 4,
          name: "Croatia",
          imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hr.png"
        },
        {
          id: 5,
          name: "Hungary",
          imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hu.png"
        }
      ]
    };
  }
};
</script>

<style>
.carousel {
  padding-top: 1%;
  padding-right: 1%;
}

.card-img-thumb {
  width: 300;
  height: 140;
}
</style>
