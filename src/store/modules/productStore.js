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
  products: [],
}

const getters = {

}

const actions = {
  async loadAllProducts({ commit }) {
    const productsData = await getAllProduct()
    commit('updateProductsData', productsData)
  },
  loadAllProductsFake({ commit }) {
    const productsData = [
      {
        name: "iphone13",
        userId: "test",
        category: "phone",
        price: 25388,
        stock: 200,
        warehouseAddress: "",
        description: "",
        pictureURL: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg"
      },
      {
        name: "another iphone13",
        userId: "test",
        category: "phone",
        price: 25388,
        stock: 199,
        warehouseAddress: "",
        description: "",
        pictureURL: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg"
      },
      {
        name: "not iphone13",
        userId: "test",
        category: "phone",
        price: 25388,
        stock: 198,
        warehouseAddress: "",
        description: "",
        pictureURL: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg"
      }
    ]
    commit('updateProductsData', productsData)
  }
}

const mutations = {
  updateProductsData(state, productsData) {
    state.products = productsData
    console.log(state.products)
  }
}

export default { namespaced: true, state, getters, actions, mutations };
