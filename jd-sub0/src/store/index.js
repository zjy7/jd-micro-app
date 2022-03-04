import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
    },
    state: {
      sub0Data: {
        name: ''
      }
    },
    mutations: {
      setSub0Data(state, data) {
        state.sub0Data = data
      }
    },
    actions: {},
    getters : {},
    plugins: [createPersistedState()],
  })