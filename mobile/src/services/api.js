import axios from "axios";

const server = axios.create({
  baseURL: "http://192.168.0.105:8080/"
});

export default server;
