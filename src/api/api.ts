import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "https://emerson-portfolio-server.vercel.app/",
});

export default api;
