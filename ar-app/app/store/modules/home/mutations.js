// import _navigation from "../../mutation-types/navigation";

export default {
  // [_navigation.ROUTE_TO_TAB](state, payload) {
  //   state.selectedTab = payload;
  // }
  GOOGLEPLACEAPI(state, payload) {
    state.googlePlaceApiResults = payload.results;
    console.log(state.googlePlaceApiResults);
  },
  RESTAURANTINFO(state, payload) {
    console.log("payload");
    // console.log(payload.photos);
    // console.log(payload.data);
    payload.photos.forEach(element => {
      console.log("element start");
      // console.log(element);
      let key = "key=AIzaSyCGSGFdT9e2xBE0FyzN-AC0WZpSuHv8PWk";
      let photosApi = "https://maps.googleapis.com/maps/api/place/photo?";
      let photoreference = "photoreference=" + element.photo_reference;
      let maxwidth = "maxwidth=400";
      photosApi += maxwidth + "&" + photoreference + "&" + key;
      element.photo_reference = photosApi;
      console.log(element.photo_reference);
      console.log("element end");
    });
    state.restaurantInfoResults = payload;
    // console.log("state");
    // console.log(state.restaurantInfoResults.photos);
  }
};
