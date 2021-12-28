import { getShoppingCartProducts, updateShoppingCartProduct, deleteShoppingCartProduct } from "../../api/shoppingCartApi";

// selectedProducts = {
//     {
//         venderName: "venderName",
//         selectedItemFlags: [
//             {
//                 id: 1,
//                 selected: false
//             }
//         ]
//     }
// }

const state = {
    cartProducts: [],
    selectedProducts: []
}

const getters = {
    getShopTotalPrice(state) {
        return (venderName) => {
            const shopIndex = state.cartProducts.findIndex(shop => shop.venderName === venderName)

            const shopItems = state.cartProducts[shopIndex].items
            let totalPrice = 0
            for (let index = 0; index < shopItems.length; index++) {
                if (!state.selectedProducts[shopIndex].selectedItemFlags[index].selected) continue
                totalPrice += shopItems[index].price * shopItems[index].quantity
            }
            return totalPrice
        }
    },
    checkShoppingCartHasProduct(state) {
       return (venderName, productId) => {
           const shopIndex = state.cartProducts.findIndex(shop => shop.venderName === venderName)
           if (shopIndex === -1) return false

           const productIndex = state.cartProducts[shopIndex].items.find(item => item.id === productId)
           return productIndex !== -1
       }
    },
    // deprecated
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
    async updateCartProductQuantity({ commit }, productData) {
        commit('updateProductState', productData)
    },
    async updateCartProductSelected({ commit }, productData) {
        commit('updateProductSelected', productData)
    },
    async deleteCartProduct({ commit }, productData) {
        await deleteShoppingCartProduct(productData.productId, productData.customerId)
        const cartData = await getShoppingCartProducts(productData.customerId)
        commit('updateAllUserCartState', cartData.shoppingCartItems)
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

        state.selectedProducts = []
        for (const shop of state.cartProducts) {
            const shopSelectedItems = {
                venderName: shop.venderName,
                selectedItemFlags: []
            }
            for (const item of shop.items) {
                const itemFlag = {
                    id: item.id,
                    selected: false
                }
                shopSelectedItems.selectedItemFlags.push(itemFlag)
            }
            state.selectedProducts.push(shopSelectedItems)
        }
    },
    updateProductState(state, productData) {
        const shopIndex = state.cartProducts.findIndex(shop => shop.venderName === productData.venderName)
        const productIndex = state.cartProducts[shopIndex].items.findIndex(item => item.id === productData.productId)
        state.cartProducts[shopIndex].items[productIndex].quantity = productData.quantity
    },
    updateProductSelected(state, productData) {
        const shopIndex = state.cartProducts.findIndex(shop => shop.venderName === productData.venderName)
        const productIndex = state.cartProducts[shopIndex].items.findIndex(item => item.id === productData.productId)
        state.selectedProducts[shopIndex].selectedItemFlags[productIndex].selected = productData.selected
    }
}

export default { namespaced: true, state, getters, actions, mutations };