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
    return axios.post("http://143.167.210.245:45560/login", data);
  },
  getUserData() {
    return axios.get("/api/user");
  },
  getNotices() {
    return axios.get("/api/notices");
  },
  getStoresInfo() {
    return axios.get("/api/stores");
  },
  getStorePerformance(id) {
    return axios.get(`/api/performance/${id}`);
  },
  getProductListsInfo() {
    return axios.get("/api/products");
  },
  getWarehouse() {
    return axios.get("/api/warehouse");
  },
  submitOrder(data) {
    return axios.post("/api/orders", data);
  }
};
