import axios from "axios";

let BaseApi = axios.create({
  baseURL: "https://lindi-api.herokuapp.com/api/v1"
});

let Api = function() {
  let token = localStorage.getItem("token");

  if (token) {
    BaseApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return BaseApi;
};

export default Api;
