import axios from "axios";

export default axios.create({
  baseURL: "http://13.251.94.255:8000/api",
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
});
