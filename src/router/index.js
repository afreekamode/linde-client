import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Dashboard from "../views/Dashboard.vue";
import Banks from "../views/Banks.vue";
import NewTransactionKey from "../views/NewTransactionKey.vue";
import TransactionHistory from "../views/TransactionHistoryBank.vue";
import TransactionKey from "../views/TransactionKey.vue";
import Landing from "../views/Landing.vue";
import Bill from "../views/Bill.vue";
import MyTransactionKey from "../views/MyTransactionKeys.vue";
import Profile from "../views/Profile.vue";
import UpdateProfile from "../views/UpdateProfile.vue";
import VerifyKey from "../views/VerifyEmail";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: { authOnly: true }
  },
  {
    path: "/update",
    name: "UpdateProfile",
    component: UpdateProfile,
    meta: { authOnly: true }
  },
  {
    path: "/landing",
    name: "Landing",
    component: Landing
  },
  {
    path: "/pay-bills",
    name: "Bill",
    component: Bill,
    meta: { authOnly: true }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { guestOnly: true }
  },
  {
    path: "/verifyKey",
    name: "VerifyKey",
    component: VerifyKey,
    meta: { guestOnly: true }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { guestOnly: true }
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { authOnly: true }
  },
  {
    path: "/banks",
    name: "Banks",
    component: Banks,
    meta: { authOnly: true }
  },
  {
    path: "/createkey",
    name: "CreateTransactionKey",
    component: NewTransactionKey,
    meta: { authOnly: true }
  },
  {
    path: "/transactionkey",
    name: "TransactionKey",
    component: TransactionKey,
    meta: { authOnly: true }
  },
  {
    path: "/mytransactionkey",
    name: "MyTransactionKey",
    component: MyTransactionKey,
    meta: { authOnly: true }
  },
  {
    path: "/transactionhistory",
    name: "TransactionHistory",
    component: TransactionHistory,
    meta: { authOnly: true }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

function isLoggedIn() {
  return localStorage.getItem("token");
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authOnly)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!isLoggedIn()) {
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.guestOnly)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (isLoggedIn()) {
      next({
        path: "/",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
