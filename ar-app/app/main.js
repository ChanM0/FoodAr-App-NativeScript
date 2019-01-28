import Vue from 'nativescript-vue'

import library from '@fortawesome/fontawesome-svg-core'
// import faCoffee from '@fortawesome/free-solid-svg-icons'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import master from './Master'
import store from './store'

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

// library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)


new Vue({
  store,
  render: h => h('frame', [h(master)])
}).$start()
