<template>
  <GridLayout row="2">
    <StackLayout
      orientation="vertical"
      width="100%"
      height="100%"
      backgroundColor="white"
      @tap="clearFocus"
    >
      <arCarousel class="ar"></arCarousel>
      <SearchBar
        class="sb"
        hint="Search 
        hint"
        :text="search"
        @textChange="onType"
        backgroundColor="white"
        ref="searchBar"
      />
      <homeOptions class="opt"></homeOptions>
      <popularDinningCarousel class="pop"></popularDinningCarousel>
    </StackLayout>
  </GridLayout>
</template>
<script>
import arCarousel from "./Home/ArCarousel";
import popularDinningCarousel from "./Home/PopularDinningCarousel";
import homeOptions from "./Home/HomeOptions";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  components: {
    arCarousel,
    popularDinningCarousel,
    homeOptions
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
      search: ""
    };
  },

  created: function() {
    console.log("On Created");
    console.log("On Created");
    console.log("On Created");
    // this.$store.dispatch("populategoogleapi");
    console.log("Finished Created");
    // ...mapGetters(["googlePlaceApiGetter"]);
  }
};
</script>

<style>
.opt {
  padding: 0;
  padding-bottom: 0;
  margin: 0;
}
.pop {
  /* float: right; */
  /* margin: 0; */
  /* padding-top: 100; */
}
</style>
