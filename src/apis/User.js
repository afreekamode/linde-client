import Api from "./Api";
// import Csrf from "./Csrf";

export default {
  register(form) {
    return Api().post("/user/register/user", form);
  },
  update(user) {
    return Api().put("/user/user/edit", user);
  },
  login(form) {
    return Api().post("/user/login", form);
  },
  verify_email(verifycode) {
    return Api().post("/user/verify/" + verifycode);
  },
  logout() {
    return Api().post("/user/logout");
  },

  auth() {
    return Api().get("/user/profile");
  }
};
