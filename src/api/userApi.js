import axios from "axios";

export const login = async function (username, password) {
  const formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);
  formData.append("request", "login");
  try {
    const response = await axios.post("/api/user/get", formData);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const createUser = async function (username, password, phone, email, creditCard, address) {
  const formData = new FormData();

  formData.append("username", username);
  formData.append("password", password);
  formData.append("phone", phone);
  formData.append("email", email);
  formData.append("creditCard", creditCard);
  formData.append("address", address);
  try {
    const response = await axios.post("/api/user/add", formData);
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
