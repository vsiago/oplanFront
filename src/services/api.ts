import axios from "axios";

const api = axios.create({
  // baseURL: "",
  baseURL: "https://api-kappa-red.vercel.app//api",
});

export { api };
