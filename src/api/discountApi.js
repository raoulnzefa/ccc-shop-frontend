import axios from "axios";

export const getCurrentSpecialDiscount = async function () {
    try {
        const response = await axios.get("/api/special_discount/get-current");
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

export const getCurrentShippingDiscount = async function () {
    try {
        const response = await axios.get("/api/shipping_discount/get-current");
        return response.data;
        
    } catch (err) {
        console.log(err);
    }
};

export const getCurrentSeasoningsDiscount = async function () {
    try {
        const response = await axios.get("/api/seasonings_discount/get-current");
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

