import { apiBaseUrl } from "./url";
import axios from "axios";

const instance = axios.create({
    baseURL: apiBaseUrl,
  });

export default instance