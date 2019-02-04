import Vue from 'nativescript-vue'

import master from './Master'
import store from './store'

// Prints Vue logs when --env.production is *NOT* set while building
// Vue.config.silent = (TNS_ENV === 'production')

// library.add(faCoffee)


import {TNSFontIcon, fonticon} from 'nativescript-fonticon';

TNSFontIcon.debug = true;
TNSFontIcon.paths = {
    'fa': './assets/css/fontawesome.css',
};
TNSFontIcon.loadCss();

Vue.filter('fonticon', fonticon)


new Vue({
  store,
  render: h => h('frame', [h(master)])
}).$start()
