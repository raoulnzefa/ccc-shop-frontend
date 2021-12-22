import { getShoppingCartProducts } from "../../api/shoppingCartApi";

const state = {
    cartProducts: [],
}

const getters = {
    getShoppingCartTotalPrice(state) {
        let totalPrice = 0
        for (const shop of state.cartProducts) {
            for (const item of shop.items) {
                totalPrice += item.price * item.quantity
            }
        }
        return totalPrice
    }
}

const actions = {
    async loadUserCartProducts({ commit }, id) {
        const cartData = await getShoppingCartProducts(id)
        commit('updateUserCartState', cartData.shoppingCartItems)
    }
}

const mutations = {
    updateUserCartState(state, shoppingCartProducts) {
        state.cartProducts = shoppingCartProducts
    }
}

export default { namespaced: true, state, getters, actions, mutations };