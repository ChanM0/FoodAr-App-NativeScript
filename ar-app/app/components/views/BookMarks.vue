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
        backgroundColor="orange"
        ref="searchBar"
        @itemTap="searchBarTap"
      />
      <SegmentedBar
        :items="segmentedBarItems"
        v-model="selectedBarIndex"
        class="choiceBar"
        @selectedIndexChange="switchBookMarksType"
        selectedBackgroundColor="orange"
      />
      <ScrollView>
        <ListView
          class="list-group"
          for="bookmark in bookmarkItems"
          @itemTap="onItemTap"
          style="height:90%"
        >
          <v-template>
            <FlexboxLayout flexDirection="row" class="list-group-item">
              <Image :src="bookmark.imageSrc" class="thumb img-circle"/>
              <Label :text="bookmark.name" class="list-group-item-heading" style="width: 60%"/>
            </FlexboxLayout>
          </v-template>
        </ListView>
      </ScrollView>
    </StackLayout>
  </GridLayout>
</template>

<script>
export default {
  name: "bookmarks",
  methods: {
    onType(args) {
      let searchBar = args.object;
      if (searchBar.text != "") {
        let filtered = this.bookmarkItems.filter(bookmark => {
          return bookmark.name.match(searchBar.text);
        });
        this.bookmarkItems = filtered;
      } else {
        this.switchBookMarksType();
      }
    },

    onItemTap: function(args) {
      console.log("Item with index: " + args.index + " tapped");
    },
    switchBookMarksType: function(args) {
      if (this.selectedBarIndex == 1) {
        this.bookmarkItems = this.countries1;
      } else if (this.selectedBarIndex == 0) {
        this.bookmarkItems = this.countries2;
      }
      this.clearFocus();
    },
    searchBarTap: function(args) {
      this.touchedSearchBar = true;
    },
    clearFocus() {
      try {
        this.$refs.searchBar.nativeView.dismissSoftInput();
      } catch (e) {
        console.log("error");
        console.log(e);
      }
    }
  },

  data() {
    return {
      search: "",

      bookmarkItems: [],
      countries2: [
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
      ],
      countries1: [
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
        }
      ],

      segmentedBarItems: (function() {
        var segmentedBarModule = require("tns-core-modules/ui/segmented-bar");
        let segmentedBarItem1 = new segmentedBarModule.SegmentedBarItem();
        segmentedBarItem1.title = "Resturants";
        let segmentedBarItem2 = new segmentedBarModule.SegmentedBarItem();
        segmentedBarItem2.title = "Menu Items";
        return [segmentedBarItem1, segmentedBarItem2];
      })(),

      selectedBarIndex: 0
    };
  },
  computed: {
    filteredSearch: function() {
      // console.log("Calling filtered Search");
      // console.log(this.search);
      // console.log(this.search != "");
      // if (this.search != "") {
      //   let filtered = this.bookmarkItems.filter(bookmark => {
      //     console.log("bookmarks searching");
      //     console.log(this.search);
      //     console.log("bookmark");
      //     console.log(bookmark.name);
      //     return bookmark.name.match(this.search);
      //   });
      //   console.log(filtered);
      //   this.bookmarkItems = filtered;
      // }
      // this.bookmarkItems = this.bookmarkItems;
      // console.log(this.bookmarkItems);
      // return this.bookmarkItems;
    }
  },
  created: function() {
    console.log("On Created");
    this.bookmarkItems = this.countries2;
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