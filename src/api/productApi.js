import axios from "axios";

export const getProduct = async function (id) {
  let json = {
    "id": id
  }

  try {
    const response = await axios.post("/api/product/get", json);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getAllProducts = async function () {
  try {
    const response = await axios.get("/api/product/get-all");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const createProduct = async function (name, venderId, category, price, stock, warehouseAddress, description, pictureURL) {
  let json = {
    "name": name,
    "venderId": venderId,
    "category": category,
    "price": price,
    "stock": stock,
    "warehouseAddress": warehouseAddress,
    "description": description,
    "pictureURL": pictureURL,
  }

  try {
    const response = await axios.post("/api/product/create", json);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteProduct = async function (id) {
  let json = {
    "id": id
  }

  try {
    const response = await axios.post("/api/product/delete", json);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateProduct = async function (name, venderId, category, price, stock, warehouseAddress, description, pictureURL, id) {
  let json = {
    "name": name,
    "venderId": venderId,
    "category": category,
    "price": price,
    "stock": stock,
    "warehouseAddress": warehouseAddress,
    "description": description,
    "pictureURL": pictureURL,
    "existFlag": 1,
    "id": id
  }

  try {
    const response = await axios.post("/api/product/update", json);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};