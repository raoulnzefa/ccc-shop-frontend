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

const getters = {}

const actions = {
  async loadAllProducts({ commit }) {
    const productsData = await getAllProduct()
    commit('updateProductsData', productsData.productList)
  },
  loadAllProductsFake({ commit }) {
    commit('updateProductsData', fakeProducts)
  }
}

const mutations = {
  updateProductsData(state, productsData) {
    state.products = productsData
  }
}

export default { namespaced: true, state, getters, actions, mutations };

// fake data can be removed after system is stable
const fakeProducts = [
  {
    name: "Macbook Pro",
    userId: "test",
    category: "NOTEBOOK",
    price: 54700,
    stock: 152,
    warehouseAddress: "",
    description: "這是很厲害的電腦",
    pictureURL: "https://attach.setn.com/newsimages/2021/10/19/3367537-PH.jpg"
  },
  {
    name: "iMac",
    userId: "test",
    category: "COMPUTER",
    price: 72900,
    stock: 48,
    warehouseAddress: "",
    description: "這也是很厲害的電腦",
    pictureURL: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/imac-og-202008?wid=600&hei=315&fmt=jpeg&qlt=95&.v=1594849639000"
  },
  {
    name: "iPhone 13 Pro",
    userId: "test",
    category: "PHONE",
    price: 32900,
    stock: 200,
    warehouseAddress: "",
    description: "這是很貴的手機",
    pictureURL: "https://web-eshop.cdn.hinet.net/eShop%20Images/Product/phones/000100004254/154632-C50321583002.jpg"
  },
  {
    name: "iPad mini",
    userId: "test",
    category: "TABLET",
    price: 14900,
    stock: 124,
    warehouseAddress: "",
    description: "這是很好用的平板",
    pictureURL: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-mini-select-202109_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=80&.v=1631751019000"
  },
  {
    name: "iPhone SE",
    userId: "test",
    category: "PHONE",
    price: 14500,
    stock: 37,
    warehouseAddress: "",
    description: "這是比較便宜的手機",
    pictureURL: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_new-iphone-se-white_04152020_big.jpg.large.jpg"
  }
]