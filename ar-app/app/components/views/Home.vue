<template>
  <GridLayout row="1">
    <StackLayout
      orientation="vertical"
      width="100%"
      height="100%"
      backgroundColor="white"
      @tap="clearFocus"
    >
      <SearchBar
        hint="Search 
        hint"
        :text="search"
        @textChange="onType"
        backgroundColor="white"
        ref="searchBar"
        @itemTap="searchBarTap"
      />
    </StackLayout>
    <ns:Carousel
      id="myCarousel"
      items="{{ myDataArray }}"
      height="100%"
      width="100%"
      color="white"
      pageChanged="myChangeEvent"
      pageTapped="mySelectedEvent"
      android:indicatorAnimation="slide"
      indicatorColor="#fff"
      indicatorOffset="0,0"
      showIndicator="true"
    >
    <Carousel id="myCarousel" 
    items="arCollection" 
    height="100%" width="100%" 
    color="white" 
    pageChanged="myChangeEvent" 
    pageTapped="mySelectedEvent">
      <Carousel.itemTemplate>
          <CarouselItem verticalAlignment="middle">
              <GridLayout>
                  <Image :src="imageSrc" stretch="aspectFill" />
                  <Label :text="name" horizontalAlignment="center" backgroundColor="#50000000" height="30" />
              </GridLayout>
          </CarouselItem>
      </Carousel.itemTemplate>
    </Carousel>
  </GridLayout>
</template>

<script>
import arcarousel from "./HomeCarousel/ArCarousel";
export default {
  name: "Home",
  components: {
    arcarousel
  },
  methods: {
    clearFocus() {
      try {
        this.$refs.searchBar.nativeView.dismissSoftInput();
      } catch (e) {
        console.log("error");
        console.log(e);
      }
    },
    onType(args) {
      let searchBar = args.object;
      console.log(searchBar.text);
    }
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
  },

  created: function() {
    console.log("On Created");
  }
};
</script>

<style>
</style>
