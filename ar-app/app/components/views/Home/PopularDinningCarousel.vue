<template>
  <ScrollView row="1" orientation="horizontal" scrollBarIndicatorVisible="false">
    <StackLayout orientation="horizontal">
      <GridLayout
        class="pop-card-carousel"
        v-for="item in arCollection"
        :key="item.id"
        rows="auto"
        columns="*"
      >
        <GridLayout row="2">
          <Image row="0" class="pop-card" stretch="aspectFill" :src="item.imageSrc"/>
          <Label row="1" class="description-of-pop-card" :text="item.name"/>
        </GridLayout>
      </GridLayout>
    </StackLayout>
  </ScrollView>
</template>

<script>
export default {
  name: "popularDinningCarousel",
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
