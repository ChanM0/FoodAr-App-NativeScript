import Vue from "nativescript-vue";

import login from "./components/views/Login.vue";
import store from "./store";

import VueDevtools from "nativescript-vue-devtools";

Vue.use(VueDevtools);

import * as platform from "platform";

if (platform.isIOS)
  GMSServices.provideAPIKey("AIzaSyCGSGFdT9e2xBE0FyzN-AC0WZpSuHv8PWk");

/* registering MapView element */
Vue.registerElement(
  "MapView",
  () => require("nativescript-google-maps-sdk").MapView
);

// Vue.registerElement("BarcodeScanner", () => require("nativescript-barcodescanner").BarcodeScannerView);

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = TNS_ENV === "production";

import { TNSFontIcon, fonticon } from "nativescript-fonticon";

TNSFontIcon.debug = false;
TNSFontIcon.paths = {
  fa: "./assets/css/fontawesome.css"
};
TNSFontIcon.loadCss();

Vue.filter("fonticon", fonticon);

new Vue({
  store,
  render: h => h("frame", [h(login)])
}).$start();
