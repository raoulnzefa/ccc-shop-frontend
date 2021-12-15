import axios from "axios";

export const addProductToShoppingCart = async function (productId, customerId, quantity) {
    let json = {
        "productId": productId,
        "customerId": customerId,
        "quantity": quantity
    }

    try {
        const response = await axios.post("/api/shopping-cart/create", json);
        return response.data;
    } catch (err) {
        console.log(err);
    }
};