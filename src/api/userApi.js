import axios from "axios";

export const loginUser = async function (username, password) {
  let json = {
    "username": username,
    "password": password
  }

  try {
    const response = await axios.post("/api/user/login", json);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const createUser = async function (username, identity, password, phone, email, creditCard, address) {
  let json = {
    "username": username,
    "identity": identity,
    "password": password,
    "phone": phone,
    "email": email,
    "creditCard": creditCard,
    "address": address
  }

  try {
    const response = await axios.post("/api/user/create", json);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateUser = async function (id, username, identity, phone, email, creditCard, address) {
  let json = {
    "id": id,
    "username": username,
    "identity": identity,
    "phone": phone,
    "email": email,
    "creditCard": creditCard,
    "address": address
  }

  try {
    const response = await axios.post("/api/user/update", json);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getAllUser = async function () {
  // export const getAllUser = function () {
  // var users = [
  //   {
  //     id: "0",
  //     username: "Frozen",
  //     identity: "admin",
  //     password: "12321312",
  //     email: "fds@ggg",
  //     phone: "0912312312",
  //     creditCard: "123123123",
  //     address: "home",
  //   },
  //   {
  //     id: "1",
  //     username: "Ice",
  //     identity: "staff",
  //     password: "1232131",
  //     email: "hello@g",
  //     phone: "0912312312",
  //     creditCard: "12312312312",
  //     address: "my address",
  //   },
  //   {
  //     id: "2",
  //     username: "hi",
  //     identity: "customer",
  //     password: "1232131",
  //     email: "hello@g",
  //     phone: "0912312312",
  //     creditCard: "12312312312",
  //     address: "my address",
  //   },
  // ];

  try {
    const response = await axios.get("/api/user/get-all");
    return response.data.userList;
    // return users;
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = async function (id) {
  let json = {
    "id": id,
  }

  try {
    const response = await axios.post("/api/user/delete", json);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};