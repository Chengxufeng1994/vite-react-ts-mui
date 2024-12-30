import axios from 'axios';

// const API_ENDPOINT = 'https://jsonplaceholder.typicode.com';
const API_ENDPOINT = '/api';

const axiosInstance = axios.create({
  baseURL: `${API_ENDPOINT}`,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
});

axiosInstance.interceptors.request.use(config => {
  // You can modify the config before the request is sent
  return config;
});

axiosInstance.interceptors.response.use(
  response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response;
  },
  error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    return Promise.reject(error);
  }
);

export default axiosInstance;
