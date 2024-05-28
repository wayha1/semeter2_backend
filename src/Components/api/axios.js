import axios from "axios";

export default axios.create({
  baseURL: "https://backend.skinme.site:8000",
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
});
