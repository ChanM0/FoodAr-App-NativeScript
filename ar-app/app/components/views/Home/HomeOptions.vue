<template>
  <GridLayout class="button-grid" columns="*,*,*" rows="*,*,*">
    <Button text="Button" row="0" col="0" @tap="onButtonTap" backgroundColor="#43b883"/>
    <Button text="Button" row="0" col="1" @tap="onButtonTap" backgroundColor="#1c6b48"/>
    <Button text="Button" row="0" col="2" @tap="onButtonTap" backgroundColor="#43b883"/>
    <Button text="Button" row="1" col="0" @tap="onButtonTap" backgroundColor="#289062"/>
    <Button text="Button" row="1" col="1" @tap="onButtonTap" backgroundColor="#43b883"/>
    <Button text="Button" row="1" col="2" @tap="onButtonTap" backgroundColor="#289062"/>
  </GridLayout>
</template>

<script>
export default {
  name: "homeOptions",
  methods: {
    onButtonTap() {
      console.log("tapped");
      console.log("tapped");
      console.log("tapped");
      console.log("tapped");
      console.log("tapped");
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