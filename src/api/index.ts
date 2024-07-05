import axios, { AxiosInstance } from "axios";

const baseURL = "http://localhost:8080";

const axiosClient: AxiosInstance = axios.create({
  baseURL,
});

export default axiosClient;
