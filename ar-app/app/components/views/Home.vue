<template>
  <GridLayout row="1">
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
      <popularDinningCarousel></popularDinningCarousel>
    </StackLayout>
  </GridLayout>
</template>
<script>
import arCarousel from "./HomeCarousel/ArCarousel";
import popularDinningCarousel from "./HomeCarousel/PopularDinningCarousel";
export default {
  name: "Home",
  components: {
    arCarousel,
    popularDinningCarousel
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
  }
};
</script>

<style>
.sb {
  /* border-radius: 100; */
  /* margin: 20; */
  /* border-color: black; */
}
</style>
