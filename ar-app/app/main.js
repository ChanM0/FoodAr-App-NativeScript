import Vue from "nativescript-vue";

import login from "./components/views/Login.vue";
import store from "./store";

Vue.registerElement("BarcodeScanner", () => require("nativescript-barcodescanner").BarcodeScannerView);

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = TNS_ENV === "production";


import {TNSFontIcon, fonticon} from 'nativescript-fonticon';

TNSFontIcon.debug = false;
TNSFontIcon.paths = {
    'fa': './assets/css/fontawesome.css',
};
TNSFontIcon.loadCss();

Vue.filter('fonticon', fonticon)

new Vue({
  store,
  render: h => h("frame", [h(login)])
}).$start();
