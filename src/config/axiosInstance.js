import axios from "axios";

const BASE_SERVER_URL = import.meta.env.VITE_BASE_SERVER_URL;

export const axiosInstance = axios.create({
    baseURL: BASE_SERVER_URL,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
    },
});
