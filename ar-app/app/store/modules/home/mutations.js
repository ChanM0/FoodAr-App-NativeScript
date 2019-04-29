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
    state.restaurantInfoResults = payload;
    console.log(state.restaurantInfoResults);
  }
};
