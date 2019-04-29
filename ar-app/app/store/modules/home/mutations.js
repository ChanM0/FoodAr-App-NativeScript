// import _navigation from "../../mutation-types/navigation";

export default {
  // [_navigation.ROUTE_TO_TAB](state, payload) {
  //   state.selectedTab = payload;
  // }
  GOOGLEPLACEAPI(state, payload) {
    state.googlePlaceApiResults = payload.results;
  },
  RESTAURANTINFO(state, payload) {
    state.restaurantInfoResults = payload;
  }
};
