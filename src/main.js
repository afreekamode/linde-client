import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import flash from "./flash";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = true;

new Vue({
  store,
  router,
  flash,
  render: h => h(App)
}).$mount("#app");
