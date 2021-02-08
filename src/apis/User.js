import Api from "./Api";
// import Csrf from "./Csrf";

export default {
  register(form) {
    return Api().post("/api/v1/user/register/user", form);
  },
  update(user) {
    return Api().put("/api/v1/user/user/edit", user);
  },
  login(form) {
    return Api().post("/api/v1/user/login", form);
  },
  verify_email(verifycode) {
    return Api().post("/api/v1/user/verify/" + verifycode);
  },
  logout() {
    return Api().post("/api/v1/user/logout");
  },

  auth() {
    return Api().get("/api/v1/user/profile");
  }
};
