import axios from "axios";
import data from "./config.json";
const instance = axios.create({
  baseURL: data.production,
});
export default instance;
