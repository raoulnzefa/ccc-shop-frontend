import axios from "axios";

export const getReviews = async function (productId) {
  let json = {
    "productId": productId
  }

  try {
    const response = await axios.post("/api/valuation/get", json);
    return response.data.valuationList;
  } catch (err) {
    console.log(err);
  }
};
