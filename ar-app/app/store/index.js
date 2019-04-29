import Vue from "nativescript-vue";
import Vuex from "vuex";

//module imports
import navigation from "./modules/navigation";
import home from "./modules/home";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    navigation,
    home
  }
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
});
