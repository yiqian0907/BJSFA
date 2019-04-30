import axios from "axios";

// Add a request interceptor
axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    if (sessionStorage.getItem("login-token")) {
      config.headers.Authorization = sessionStorage.getItem("login-token");
    }
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
export default {
  login(data) {
    return axios.post("http://143.167.209.27:45560/login", data);
  },
  getUserData() {
    return axios.get("http://143.167.209.27:45560/api/user");
  },
  getNotices() {
    return axios.get("http://143.167.209.27:45560/api/notices");
  },
  getStoresInfo() {
    return axios.get("http://143.167.209.27:45560/api/stores");
  },
  getStorePerformance(id) {
    return axios.get(`http://143.167.209.27:45560/api/performance/${id}`);
  },
  getProductListsInfo() {
    return axios.get("http://143.167.209.27:45560/api/products");
  }
};
