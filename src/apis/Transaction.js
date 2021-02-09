import Api from "./Api";
// import Csrf from "./Csrf";

export default {
  generate_transaction_key(form) {
    return Api().post("/trxn/generate/key", form);
  },

  cash_deposit(form) {
    return Api().post("/trxn/cash-deposit", form);
  },

  refresh_trxn_keys(id) {
    return Api().patch("/trxn/key/refresh/" + id);
  },

  all_trxn_keys() {
    return Api().get("/trxn/transaction/trxn");
  },
  all_trxn_history() {
    return Api().get("/trxn/transaction/history");
  },
  a_trxn_key(id) {
    return Api().get("/trxn/transaction/key/" + id);
  },
  mykeys() {
    return Api().get("/trxn/transaction/key");
  },
  deletekey(key) {
    return Api().delete("/trxn/delete-key/" + key);
  }
};
