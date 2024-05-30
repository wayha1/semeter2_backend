import axios from "axios";

export default axios.create({
  baseURL: "https://backend.skinme.site:8000/api",
  // baseURL: "http://127.0.0.1:8000/api",
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
});
