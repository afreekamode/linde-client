import Api from "./Api";
// import Csrf from "./Csrf";

export default {
  register_bank(form) {
    return Api().post("/api/v1/user/register/bank", form);
  },

  banks() {
    return Api().get("/api/v1/all/banks");
  },

  auth() {
    return Api().get("/api/v1/user/profile");
  }
};
