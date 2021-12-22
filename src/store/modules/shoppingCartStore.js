import { getShoppingCartProducts, updateShoppingCartProduct } from "../../api/shoppingCartApi";

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
    async loadUserCartProducts({ commit }, customerId) {
        const cartData = await getShoppingCartProducts(customerId)
        commit('updateAllUserCartState', cartData.shoppingCartItems)
    },
    async updateCartProductState({ commit }, productData) {
        commit('updateProductState', productData)
    },
    async updateCartStateToBackend({ state }, customerId) {
        for (const shop of state.cartProducts) {
            for (const item of shop.items) {
                await updateShoppingCartProduct(item.id, customerId, item.quantity)
            }
        }
    }
}

const mutations = {
    updateAllUserCartState(state, shoppingCartProducts) {
        state.cartProducts = shoppingCartProducts
    },
    updateProductState(state, productData) {
        const shopIndex = state.cartProducts.findIndex(shop => shop.venderName === productData.venderName)
        const productIndex = state.cartProducts[shopIndex].items.findIndex(item => item.id === productData.productId)
        state.cartProducts[shopIndex].items[productIndex].quantity = productData.quantity
    }
}

export default { namespaced: true, state, getters, actions, mutations };