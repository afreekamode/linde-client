import Api from "./Api";
// import Csrf from "./Csrf";

export default {
  register_bank(form) {
    return Api().post("/user/register/bank", form);
  },

  banks() {
    return Api().get("/all/banks");
  },

  auth() {
    return Api().get("/user/profile");
  }
};
