<template>
  <Page class="page">
    <ActionBar title="Bookmarks" class="action-bar"/>
    <StackLayout
      orientation="vertical"
      width="100%"
      height="100%"
      backgroundColor="lightgray"
      @tap="clearFocus"
    >
      <SearchBar
        hint="Search hint"
        :text="searchPhrase"
        @submit="onSearchSubmit"
        ref="searchBar"
        @itemTap="searchBarTap"
      />
      <SegmentedBar
        :items="segmentedBarItems"
        v-model="selectedBarIndex"
        class="choiceBar"
        @itemTap="switchBookMarksType"
      />
      <ScrollView>
        <ListView
          class="list-group"
          for="country in countries"
          @itemTap="onItemTap"
          style="height:90%"
        >
          <v-template>
            <FlexboxLayout flexDirection="row" class="list-group-item">
              <Image :src="country.imageSrc" class="thumb img-circle"/>
              <Label :text="country.name" class="list-group-item-heading" style="width: 60%"/>
            </FlexboxLayout>
          </v-template>
        </ListView>
      </ScrollView>
    </StackLayout>
  </Page>
</template>

<script>
export default {
  name: "bookmarks",
  methods: {
    onSearchSubmit(args) {
      let searchBarx = args.object;
      console.log("You are searching for " + searchBar.text);
    },

    onItemTap: function(args) {
      console.log("Item with index: " + args.index + " tapped");
    },
    switchBookMarksType: function(args) {
      console.log("switch");
      console.log(args);
    },
    searchBarTap: function(args) {
      this.touchedSearchBar = true;
    },
    clearFocus() {
      let searchBar = this.$refs.searchBar;
      if (this.touchedSearchBar) {
        searchbar.nativeView.dismissSoftInput();
      }
      this.touchedSearchBar = false;
    }
  },

  data() {
    return {
      searchPhrase: "",

      touchedSearchBar: false,

      segmentedBarItems: (function() {
        var segmentedBarModule = require("tns-core-modules/ui/segmented-bar");
        let segmentedBarItem1 = new segmentedBarModule.SegmentedBarItem();
        segmentedBarItem1.title = "Resturants";
        let segmentedBarItem2 = new segmentedBarModule.SegmentedBarItem();
        segmentedBarItem2.title = "Menu Items";
        return [segmentedBarItem1, segmentedBarItem2];
      })(),
      selectedBarIndex: 0,

      countries: [
        {
          name: "Australia",
          imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png"
        },
        {
          name: "Belgium",
          imageSrc: "https://play.nativescript.org/dist/assets/img/flags/be.png"
        },
        {
          name: "Bulgaria",
          imageSrc: "https://play.nativescript.org/dist/assets/img/flags/bg.png"
        },
        {
          name: "Canada",
          imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ca.png"
        },
        {
          name: "Switzerland",
          imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ch.png"
        },
        {
          name: "China",
          imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cn.png"
        },
        {
          name: "Czech Republic",
          imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cz.png"
        },
        {
          name: "Germany",
          imageSrc: "https://play.nativescript.org/dist/assets/img/flags/de.png"
        },
        {
          name: "Spain",
          imageSrc: "https://play.nativescript.org/dist/assets/img/flags/es.png"
        },
        {
          name: "Ethiopia",
          imageSrc: "https://play.nativescript.org/dist/assets/img/flags/et.png"
        },
        {
          name: "Croatia",
          imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hr.png"
        },
        {
          name: "Hungary",
          imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hu.png"
        },
        {
          name: "Italy",
          imageSrc: "https://play.nativescript.org/dist/assets/img/flags/it.png"
        },
        {
          name: "Jamaica",
          imageSrc: "https://play.nativescript.org/dist/assets/img/flags/jm.png"
        },
        {
          name: "Romania",
          imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ro.png"
        },
        {
          name: "Russia",
          imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ru.png"
        },
        {
          name: "United States",
          imageSrc: "https://play.nativescript.org/dist/assets/img/flags/us.png"
        }
      ]
    };
  }
};
</script>

<style scoped>
.choiceBar {
  width: 85%;
  height: 5%;
  margin-top: 1%;
  margin-bottom: 3%;
}

.home-panel {
  vertical-align: center;
  font-size: 20;
}

.description-label {
  margin-top: 0;
}
</style>