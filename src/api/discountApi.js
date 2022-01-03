import axios from "axios";

//get-current
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

//create
export const createSeasoningsDiscount = async function(venderId, policyDescription, startTime, endTime, discountRate){
    let json = {
        "venderId": venderId,
        "policyDescription": policyDescription,
        "startTime": startTime,
        "endTime": endTime,
        "discountRate": discountRate
    }

    try {
        const response = await axios.post("/api/seasonings_discount/create", json);
        return response.data;
    } catch (err){
        console.log(err);
    }
};

export const createShippingDiscount = async function(venderId, policyDescription, startTime, endTime, targetPrice){
    let json = {
        "venderId": venderId,
        "policyDescription": policyDescription,
        "startTime": startTime,
        "endTime": endTime,
        "targetPrice": targetPrice
    }

    try {
        const response = await axios.post("/api/shipping_discount/create", json);
        return response.data;
    } catch (err){
        console.log(err);
    }
};

export const createSpecialDiscount = async function (discountCode, venderId, policyDescription, startTime, endTime, category, discountRate) {
    let json = {
        "venderId": venderId,
        "policyDescription": policyDescription,
        "startTime": startTime,
        "endTime": endTime,
        "category": category,
        "discountRate": discountRate
    }

    try {
        const response = await axios.post("/api/special_discount/create", json);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}


//get_vender
export const getVenderSeasoningsDiscount = async function (venderId) {
    let json = {
        "venderId": venderId
    }
    try {
        const response = await axios.get("/api/seasonings_discount/get-vender", json);
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

export const getVenderShippingDiscount = async function (venderId) {
    let json = {
        "venderId": venderId
    }
    try {
        const response = await axios.get("/api/shipping_discount/get-vender", json);
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

export const getVenderSpecialDiscount = async function (venderId) {
    let json = {
        "venderId": venderId
    }
    try {
        const response = await axios.get("/api/special_discount/get-vender", json);
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

//edit
export const editSeasoningsDiscount = async function (discountCode, venderId, policyDescription, startTime, endTime, discountRate) {
    let json = {
        "discountCode": discountCode,
        "venderId": venderId,
        "policyDescription": policyDescription,
        "startTime": startTime,
        "endTime": endTime,
        "discountRate": discountRate
    }

    try {
        const response = await axios.post("/api/seasonings_discount/edit", json);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export const editShippingDiscount = async function (discountCode, venderId, policyDescription, startTime, endTime, targetPrice) {
    let json = {
        "discountCode": discountCode,
        "venderId": venderId,
        "policyDescription": policyDescription,
        "startTime": startTime,
        "endTime": endTime,
        "targetPrice": targetPrice
    }

    try {
        const response = await axios.post("/api/shipping_discount/edit", json);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export const editSpecialDiscount = async function (discountCode, venderId, policyDescription, startTime, endTime, category, discountRate) {
    let json = {
        "discountCode": discountCode,
        "venderId": venderId,
        "policyDescription": policyDescription,
        "startTime": startTime,
        "endTime": endTime,
        "category": category,
        "discountRate": discountRate
    }

    try {
        const response = await axios.post("/api/special_discount/edit", json);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}


