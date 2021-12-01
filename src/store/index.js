import Vue from 'vue'
import Vuex from 'vuex'
import userStore from "./modules/userStore"

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: { userStore },
})
