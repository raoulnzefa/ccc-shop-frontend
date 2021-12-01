import axios from "axios";

export const login = async function (username, password) {
  let json = {
    "username": username,
    "password": password
  }

  try {
    const response = await axios.post("/api/user/login", json);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const createUser = async function (username, password, phone, email, creditCard, address) {
  let json = {
    "username": username,
    "identity": 2,
    "password": password,
    "phone": phone,
    "email": email,
    "creditCard": creditCard,
    "address": address
  }

  try {
    const response = await axios.post("/api/user/add", json);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

// export const GetUserId = async () => {
//   const formData = new FormData();
//   formData.append("request", "getuserno");
//   try {
//     const response = await axios.post("/php/login.php", formData);
//     return response;
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const Logout = async () => {
//   const formData = new FormData();
//   formData.append("request", "logout");
//   try {
//     const response = await axios.post("/php/login.php", formData);
//     return response;
//   } catch (err) {
//     console.log(err);
//   }
// };
