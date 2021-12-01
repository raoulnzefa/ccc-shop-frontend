import { login } from "@/api/userApi";

const state = {
  username: "",
  identity: "",
  phone: "",
  email: "",
  creditCard: "",
  address: "",
  isLogin: false
}

const getters = {

}

const actions = {
  async loginUser({ commit }, loginData) {
    const userData = await login(loginData.username, loginData.password)
    commit('updateUserData', userData)
  }
}

const mutations = {
  updateUserData(state, userData) {
    state.username = userData.username
    state.identity = userData.identity
    state.phone = userData.phone
    state.email = userData.email
    state.creditCard = userData.creditCard
    state.address = userData.address
    state.isLogin = true
  }
}

export default { namespaced: true, state, getters, actions, mutations };
