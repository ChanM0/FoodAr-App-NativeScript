import Vue from 'nativescript-vue'
import Vuex from 'vuex'

//module imports
import navigation from './modules/navigation'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        navigation
    },
    // strict: debug,
    // plugins: debug ? [createLogger()] : []
})
