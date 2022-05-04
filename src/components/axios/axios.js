import axios from "axios";
export default axios.create({
  baseURL: "https://niobooks.in/api/web/",
  headers: {
    "content-type": "application/json",
    accept: "application/json",
    client: "web",
  },
});
