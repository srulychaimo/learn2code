import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api";

export const httpService = {
  get: axios.get,
};
