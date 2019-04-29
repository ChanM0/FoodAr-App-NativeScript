// NAV ACTIONS
//
// import _navigation from "../../mutation-types/navigation";
import axios from "axios";
export default {
  googleplaceapi({ commit }, formData) {
    let location = "location=" + formData.coordinates;
    let radius = "radius=" + formData.radius;
    let types = "types=" + formData.types;
    let path =
      "https://us-central1-food-ar-8f4c0.cloudfunctions.net/helloWorld?";
    path += location + "&" + radius + "&" + types;
    axios.get(path).then(function(res) {
      commit("GOOGLEPLACEAPI", res.data);
      // console.log(res.data);
    });
  },
  restaurantInfo({ commit }, api) {
    axios.get(api).then(function(res) {
      commit("RESTAURANTINFO", res.data);
    });
  }
};
