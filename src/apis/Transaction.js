import Api from "./Api";
// import Csrf from "./Csrf";

export default {
  generate_transaction_key(form) {
    return Api().post("/api/v1/trxn/generate/key", form);
  },

  cash_deposit(form) {
    return Api().post("/api/v1/trxn/cash-deposit", form);
  },

  refresh_trxn_keys(id) {
    return Api().patch("/api/v1/trxn/key/refresh/" + id);
  },

  all_trxn_keys() {
    return Api().get("/api/v1/trxn/transaction/trxn");
  },

  a_trxn_key(id) {
    return Api().get("/api/v1/trxn/transaction/key/" + id);
  },

  mykeys() {
    return Api().get("/trxn/transaction/key");
  },
  deletekey(key) {
    return Api().delete("/trxn/delete-key/" + key);
  }
};
