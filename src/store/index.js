import Vue from 'vue'
import Vuex from 'vuex'
import weatherStore from './weatherStore'
import userStore from './userStore'

Vue.use(Vuex)
export default new Vuex.Store ({
    modules: {
        weatherStore : weatherStore,
        userStore : userStore
    }

})