<template>
  <page>
    <GridLayout width="100%">
      <StackLayout alignItems="center">
        <Image src="~/assets/images/profile.png" stretch="aspectFill" class="profilePic"></Image>
        <Label
          text="Aurora Mary"
          color="#000"
          fontSize="19"
          fontWeight="bold"
          textAlignment="center"
        />
        <StackLayout orientation="horizontal" class="followersContainer">
          <StackLayout width="33%">
            <Label :text="'fa-camera' | fonticon" fontSize="18" class="followersTxtValue fas"/>
            <Label text="Upload Image " class="followersTxt"/>
          </StackLayout>
          <StackLayout width="33%">
            <Label :text="'fa-user-edit' | fonticon" fontSize="18" class="followersTxtValue fas"/>
            <Label text="Edit Profile " class="followersTxt"/>
          </StackLayout>
          <StackLayout width="33%">
            <Label :text="'fa-comment-alt' | fonticon" fontSize="18" class="followersTxtValue fas"/>
            <Label text="Submit" class="followersTxt"/>
            <Label text="Feedback " class="followersTxt"/>
          </StackLayout>
        </StackLayout>
        <StackLayout class="aboutContainer">
          <StackLayout orientation="horizontal">
            <Label
              :text="'fa-map-marker-alt' | fonticon"
              fontSize="16"
              class="fas"
              style="color:#EF3D53;"
            />
            <Label text="New York" style="font-size:16;color:#000;margin-left:9;margin-top:1;"/>
          </StackLayout>
          <StackLayout orientation="horizontal" class="aboutRow">
            <Label
              :text="'fa-paragraph' | fonticon"
              fontSize="16"
              class="fas"
              style="text-align:left;color:#EF3D53;"
            />
            <Label
              text="I'm a real fun guy like marty mcfly, but I have..."
              style="font-size:16;color:#000;margin-left:9;margin-top:1;"
            />
          </StackLayout>
        </StackLayout>
        <StackLayout style="margin-top:10;">
          <Button text="Logout" class="btn btn-primary" width="50%" @tap="toggleLogout"/>
        </StackLayout>
      </StackLayout>
    </GridLayout>
  </page>
</template>

<script>
import login from "./Login";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "restaurantProfile",
  computed: {
    ...mapGetters(["restaurantInfoApiGetter"])
  },
  methods: {
    toggleLogout() {
      this.$navigateTo(login);
    }
  }
};
</script>

<style>
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
