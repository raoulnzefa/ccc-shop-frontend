import { getCurrentSeasoningsDiscount, getCurrentSpecialDiscount, getCurrentShippingDiscount } from "../../api/discountApi";

const state = {
    seasoningsDiscounts: [],
    specialDiscounts: [],
    shippingDiscounts: [],
}

//////// shippingDiscounts: []
// discountCode
// endTime
// policyDescription
// startTime
// targetPrice
// venderId
// venderName
//////////

//////// seasoningsDiscountList: []
// discountCode
// discountRate
// endTime
// policyDescription
// startTime
// venderId
// venderName
//////////

//////// specialDiscountList: []
// venderId
// venderName
// policyDescription
// startTime
// endTime
// category
// discountRate
//////////

const getters = {
    getVenderSeasoningDiscount(state) {
        return (venderName) => {
            return state.seasoningsDiscounts.filter(discount => venderName === discount.venderName)
        }
    },
    getVenderSpecialDiscount(state) {
        return (venderName) => {
            return state.specialDiscounts.filter(discount => venderName === discount.venderName)
        }
    },
    getVenderShippingDiscount(state) {
        return (venderName) => {
            return state.shippingDiscounts.filter(discount => venderName === discount.venderName)
        }
    },
}

const actions = {
    async loadCurrentSeasoningDiscount({commit}) {
        const seasoningsDiscounts = await getCurrentSeasoningsDiscount()
        // console.log(seasoningsDiscounts) // debug
        commit('loadCurrentSeasoningDiscountData', seasoningsDiscounts.seasoningsDiscountList)
    },
    async loadCurrentSpecialDiscount({commit}) {
        const specialDiscounts = await getCurrentSpecialDiscount()
        // console.log(specialDiscounts) // debug
        commit('loadCurrentSpecialDiscountData', specialDiscounts.specialDiscountList)

    },
    async loadCurrentShippingDiscount({commit}) {
        const shippingDiscounts = await getCurrentShippingDiscount()
        // console.log(shippingDiscounts) // debug
        commit('loadCurrentShippingDiscountData', shippingDiscounts.shippingDiscountList)
    },
}

const mutations = {
    loadCurrentSeasoningDiscountData(state, seasoningsDiscounts) {
        state.seasoningsDiscounts = seasoningsDiscounts
    },
    loadCurrentSpecialDiscountData(state, specialDiscounts) {
        state.specialDiscounts = specialDiscounts
    },
    loadCurrentShippingDiscountData(state, shippingDiscounts) {
        state.shippingDiscounts = shippingDiscounts
    },
}

export default {namespaced: true, state, getters, actions, mutations};