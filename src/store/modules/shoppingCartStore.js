import { getShoppingCartProducts } from "../../api/shoppingCartApi";

const state = {
    cartProducts: [],
}

const getters = {
    // getShoppingCartTotalPrice(state) {
    //     let totalPrice = 0
    //     for (let shoppingCart in state.cartProducts) {
    //         for (let items in shoppingCart.items) {
    //             totalPrice += items.price * items.quantity
    //         }
    //     }
    //     return totalPrice
    // }
}

const actions = {
    async loadUserCartProducts({ commit }, id) {
        const cartData = await getShoppingCartProducts(id)
        commit('updateUserCartState', cartData.shoppingCartItems)
        console.log(state.cartProducts)
    }
}

const mutations = {
    updateUserCartState(state, shoppingCartProducts) {
        state.cartProducts = shoppingCartProducts
    }
}

export default { namespaced: true, state, getters, actions, mutations };