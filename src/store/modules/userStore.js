import { login } from "@/api/userApi";

const getDefaultState = () => {
  return sessionStorage.getItem("username")
    ? {
      username: sessionStorage.getItem("username"),
      identity: sessionStorage.getItem("identity"),
      phone: sessionStorage.getItem("phone"),
      email: sessionStorage.getItem("email"),
      creditCard: sessionStorage.getItem("creditCard"),
      address: sessionStorage.getItem("address"),
      isLogin: true
    }
    : {
      username: "",
      identity: "",
      phone: "",
      email: "",
      creditCard: "",
      address: "",
      isLogin: false
    };
};
const state = getDefaultState();

const getters = {

}

const actions = {
  async loginUser({ commit }, loginData) {
    const userData = await login(loginData.username, loginData.password)
    sessionStorage.setItem("username", userData.username);
    sessionStorage.setItem("identity", userData.identity);
    sessionStorage.setItem("phone", userData.phone);
    sessionStorage.setItem("email", userData.email);
    sessionStorage.setItem("creditCard", userData.creditCard);
    sessionStorage.setItem("address", userData.address);
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
