<template>
  <GridLayout
    class="navBottom"
    height="60"
    width="100%"
    row="5"
    rows="auto"
    columns="auto,auto,auto,auto,auto"
  >
    <GridLayout rows="*,auto" cols="auto" class="nav" col="1" row="0" width="20%">
      <Label class="fas" row="0" @tap="onButtonTap" :text="'fa-hamburger' | fonticon" fontSize="24"></Label>
      <Label row="1" text="French" class="navText"></Label>
    </GridLayout>
    <GridLayout rows="*,auto" cols="auto" class="nav" col="2" row="0" width="20%">
      <Label class="fas" row="0" @tap="onButtonTap" :text="'fa-hamburger' | fonticon" fontSize="24"></Label>
      <Label row="1" text="Mexican" class="navText"></Label>
    </GridLayout>
    <GridLayout rows="*,auto" cols="auto" class="nav" col="3" row="0" width="20%">
      <Label class="fas" row="0" @tap="onButtonTap" :text="'fa-hamburger' | fonticon" fontSize="24"></Label>
      <Label row="1" text="American" class="navText"></Label>
    </GridLayout>
    <GridLayout rows="*,auto" cols="auto" class="nav" col="4" row="0" width="20%">
      <Label class="fas" row="0" @tap="onButtonTap" :text="'fa-hamburger' | fonticon" fontSize="24"></Label>
      <Label row="1" text="Fancy" class="navText"></Label>
    </GridLayout>
  </GridLayout>
</template>

<script>
import arImage from "./ArImage";
export default {
  name: "homeOptions",
  components: {
    arImage
  },
  methods: {
    onButtonTap() {
      console.log("tapped");
      console.log("tapped");
      console.log("tapped");
      console.log("tapped");
      console.log("tapped");
      // var utilityModule = require("utils/utils");

      // utilityModule.openUrl(
      //   "https://food-ar-8f4c0.firebaseapp.com/?image=bananaMan"
      // );
      this.$navigateTo(arImage);
    }
  }
};
</script>

<style>
.button-grid {
  padding: 0;
  margin: 0;
}
.profilePic {
  width: 150;
  height: 150;
  border-radius: 100;
  margin: 20;
  border-color: #c8ede6;
  border-width: 1;
}

.aboutContainer {
  width: 85%;
  border-radius: 15;
  background: #eeeeee;
  margin-top: 20;
  padding-top: 20;
  padding-bottom: 20;
  padding-left: 20;
  padding-right: 20;
}

.followersTxt {
  text-align: center;
  font-size: 14;
  height: 20;
}

.followersTxtValue {
  text-align: center;
  margin-top: 10;
  height: 25;
  font-size: 22;
  font-weight: bold;
  color: #000;
}

.followersContainer {
  width: 90%;
}
</style>