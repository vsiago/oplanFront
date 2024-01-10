import axios from "axios";

const api = axios.create({
  // baseURL: "",
  baseURL: "http://192.168.7.110:3333/api",
});

export { api };
