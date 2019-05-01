<template>
  <page>
    <!-- <WebView src="https://food-ar-8f4c0.firebaseapp.com/?image=cake"/> -->
    <GridLayout
      class="navBottom"
      height="60"
      width="100%"
      row="5"
      rows="auto"
      columns="auto,auto,auto,auto,auto"
    >
      <GridLayout rows="*,auto" cols="auto" class="nav" col="1" row="0" width="20%">
        <Label
          class="fas"
          row="0"
          @tap="onButtonTap1"
          :text="'fa-hamburger' | fonticon"
          fontSize="24"
        ></Label>
        <Label row="1" text="Banana" class="navText"></Label>
      </GridLayout>
      <GridLayout rows="*,auto" cols="auto" class="nav" col="2" row="0" width="20%">
        <Label
          class="fas"
          row="0"
          @tap="onButtonTap2"
          :text="'fa-hamburger' | fonticon"
          fontSize="24"
        ></Label>
        <Label row="1" text="Cake" class="navText"></Label>
      </GridLayout>
      <GridLayout rows="*,auto" cols="auto" class="nav" col="3" row="0" width="20%">
        <Label
          class="fas"
          row="0"
          @tap="onButtonTap3"
          :text="'fa-hamburger' | fonticon"
          fontSize="24"
        ></Label>
        <Label row="1" text="Cinnamon Roll" class="navText"></Label>
      </GridLayout>
      <GridLayout rows="*,auto" cols="auto" class="nav" col="4" row="0" width="20%">
        <Label
          class="fas"
          row="0"
          @tap="onButtonTap4"
          :text="'fa-hamburger' | fonticon"
          fontSize="24"
        ></Label>
        <Label row="1" text="Apple" class="navText"></Label>
      </GridLayout>
    </GridLayout>
  </page>
</template>

<script>
export default {
  methods: {
    onButtonTap1() {
      console.log("tapped");
      console.log("tapped");
      console.log("tapped");
      console.log("tapped");
      console.log("tapped");
      var utilityModule = require("utils/utils");

      utilityModule.openUrl(
        "https://food-ar-8f4c0.firebaseapp.com/?image=bananaMan"
      );
    },
    onButtonTap2() {
      console.log("tapped");
      console.log("tapped");
      console.log("tapped");
      console.log("tapped");
      console.log("tapped");
      var utilityModule = require("utils/utils");

      utilityModule.openUrl(
        "https://food-ar-8f4c0.firebaseapp.com/?image=cake"
      );
    },
    onButtonTap3() {
      console.log("tapped");
      console.log("tapped");
      console.log("tapped");
      console.log("tapped");
      console.log("tapped");
      var utilityModule = require("utils/utils");

      utilityModule.openUrl(
        "https://food-ar-8f4c0.firebaseapp.com/?image=cookie"
      );
    },
    onButtonTap4() {
      console.log("tapped");
      console.log("tapped");
      console.log("tapped");
      console.log("tapped");
      console.log("tapped");
      var utilityModule = require("utils/utils");

      utilityModule.openUrl(
        "https://food-ar-8f4c0.firebaseapp.com/?image=apple"
      );
    }
  }
};
</script>

<style>
</style>
