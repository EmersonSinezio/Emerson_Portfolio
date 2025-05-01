import axios from "axios";

const api = axios.create({
  baseURL: "https://emerson-portfolio-server.vercel.app/",
});

export default api;
