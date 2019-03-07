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
  </GridLayout>
</template>

<script>
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
