import axios from "axios";

const api = axios.create({
  baseURL: "https://sidekick-be.onrender.com",
});

export default api;