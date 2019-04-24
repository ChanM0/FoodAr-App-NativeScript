// import _navigation from "../../mutation-types/navigation";

export default {
  // [_navigation.ROUTE_TO_TAB](state, payload) {
  //   state.selectedTab = payload;
  // }
  GOOGLEPLACEAPI(state, payload) {
    console.log("Start of mutation");
    console.log("Start of mutation");
    console.log("Start of mutation");
    state.googlePlaceApiResults = payload.results;
    // console.log(
    //   state.googlePlaceApiResults.results[0].photos[0].photo_reference
    // );
    console.log(payload.nextPageToken);
    console.log(payload.results[0].geometry.location.lat);
    console.log("end of mutation");
  }
};
