import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:44364",
  headers: {
    "Content-type": "application/json"
  }
});