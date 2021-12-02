import { getAllProduct } from "@/api/productApi";

// product = {
//   name: "",
//   userId: "",
//   category: "",
//   price: "",
//   stock: "",
//   warehouseAddress: "",
//   description: "",
//   pictureURL: "",
// }

const state = {
  products =[],
}

const getters = {

}

const actions = {
  async getAllProduct({ commit }) {
    const productsData = await getAllProduct()
    commit('updateProductsData', productsData)
  }
}

const mutations = {
  updateProductsData(state, productsData) {
    state.products = productsData
  }
}

export default { namespaced: true, state, getters, actions, mutations };
