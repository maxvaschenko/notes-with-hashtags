import axios from "axios";

const endpoint = "https://gentle-escarpment-19443.herokuapp.com/v1";
export const getToken = () =>
  axios.post(`${endpoint}/users/auth`, {
    email: "user1@email.com",
    password: "!password!"
  });
