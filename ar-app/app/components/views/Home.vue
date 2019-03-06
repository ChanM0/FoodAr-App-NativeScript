<template>
  <GridLayout row="1">
    <ScrollView class="anim-images" orientation="horizontal">
      <StackLayout orientation="horizontal" class="">
          <GridLayout v-for="item in arCollection" rows="auto" columns="*">
              <Image class="card-img-thumb" row="0" col="0" :src="item.imageSrc"
                  stretch="aspectFill" />
          </GridLayout>
      </StackLayout>
    </ScrollView>
  </GridLayout>
</template>

<script>
export default {
data() {
    return {
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
  },
}
</script>

<style>

</style>
