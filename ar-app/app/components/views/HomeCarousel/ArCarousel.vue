<template>
  <GridLayout row="1">
    <GridLayout rows="*, *" columns="*, *" width="155" marginLeft="15" borderRadius="8">
      <Image row="0" col="0" src="~/assets/images/profile.png"></Image>
      <Image row="0" col="1" src="~/assets/images/profile.png"></Image>
      <Image row="1" col="0" src="~/assets/images/profile.png"></Image>
      <Image row="1" col="1" src="~/assets/images/profile.png"></Image>
    </GridLayout>
  </GridLayout>
</template>

<script>
export default {
  name: "arcarousel",
  props: ["arItem"],
  created: function() {
    console.log("On Created");
    console.log(this.arItem.id);
    console.log(this.arItem.name);
    console.log(this.arItem.imageSrc);
  }
};
</script>

<style>
</style>
