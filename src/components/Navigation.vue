<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
    <div class="container">
      <router-link
        class="navbar-brand font-weight-bold"
        style="color:#563e91"
        to="/"
        >Lindi</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto smooth-scroll">
          <li class="nav-item">
            <router-link
              v-if="!isLoggedIn"
              class="nav-link"
              data-offset="90"
              :to="{ name: 'Login' }"
            >
              Login
            </router-link>
          </li>

          <li class="nav-item">
            <router-link
              v-if="!isLoggedIn"
              class="nav-link"
              data-offset="90"
              :to="{ name: 'Register' }"
            >
              Register
            </router-link>
          </li>

          <li class="nav-item">
            <router-link
              v-if="isLoggedIn"
              class="nav-link"
              data-offset="90"
              :to="{ name: 'Landing' }"
            >
              Home
            </router-link>
          </li>

          <li class="nav-item" v-if="user.length !== 0">
            <router-link
              v-if="user.user.user_role == 'teller'"
              class="nav-link"
              data-offset="90"
              :to="{ name: 'Dashboard' }"
            >
              Dashboard
            </router-link>
          </li>

          <li class="nav-item">
            <router-link
              v-if="isLoggedIn"
              class="nav-link"
              data-offset="90"
              :to="{ name: 'Bill' }"
            >
              Pay Bill
            </router-link>
          </li>

          <li class="nav-item" v-if="user.length !== 0">
            <router-link
              v-if="user.user.user_role == 'teller'"
              class="nav-link"
              data-offset="90"
              :to="{ name: 'Banks' }"
            >
              Banks
            </router-link>
          </li>

          <li class="nav-item">
            <router-link
              v-if="isLoggedIn"
              class="nav-link"
              data-offset="90"
              :to="{ name: 'CreateTransactionKey' }"
            >
              Create Key
            </router-link>
          </li>

          <li class="nav-item" v-if="user.length !== 0">
            <router-link
              v-if="user.user.user_role == 'teller'"
              class="nav-link"
              data-offset="90"
              :to="{ name: 'TransactionKey' }"
            >
              Transaction Keys
            </router-link>
          </li>

           <li class="nav-item" v-if="user.length !== 0">
            <router-link
              v-if="user.user.user_role == 'teller'"
              class="nav-link"
              data-offset="90"
              :to="{ name: 'TransactionHistory' }"
            >
              Transaction History
            </router-link>
          </li>

          <li class="nav-item">
            <router-link
              v-if="isLoggedIn"
              class="nav-link"
              data-offset="90"
              :to="{ name: 'MyTransactionKey' }"
            >
              My Transaction Keys
            </router-link>
          </li>
        </ul>
        <!-- Social Icon  -->
        <ul class="navbar-nav nav-flex-icons">
          <li class="nav-item" v-if="user.length !== 0">
            <router-link data-offset="90" :to="{ name: 'Profile' }"
              ><span
                >{{ user.user.first_name
                }}<svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  widght="30"
                  height="25"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  /></svg
              ></span>
            </router-link>
          </li>

          <li
            class="nav-item nav-link"
            type="button"
            data-offset="90"
            v-if="user.length !== 0"
            @click.prevent="logout"
          > Logout
          </li>
           <li
            class="nav-item nav-link"
            type="button"
            data-offset="90"
            v-else-if="isLoggedIn"
            @click.prevent="expired"
          >
            Logout
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import User from "../apis/User";
import { mapGetters } from "vuex";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      user: state => state.auth.user
    }),
    ...mapGetters(["isLoggedIn"])
  },
  mounted() {
    User.auth().then(response => {
      this.$store.commit("AUTH_USER", response.data);
    });
  },
  methods: {
    logout() {
      User.logout().then(() => {
        localStorage.removeItem("token");
        this.$store.commit("LOGIN", false);
        this.$router.push({ name: "Home" });
      });
    },
    expired() {
        localStorage.removeItem("token");
        this.$store.commit("LOGIN", false);
        this.$router.push({ name: "Login" });
    }
  }
};
</script>

<style>
.router-link-exact-active {
  color: #ffffff !important;
  transition: all 0.25s;
}
span,
em {
  color: #563e91;
  font-weight: bold;
  font-variant-caps: small-caps;
}

.top-nav-collapse,
.page-footer {
  background-color: #563e91 !important;
}

.navbar:not(.top-nav-collapse) {
  background: rgb(238, 173, 34) !important;
}

@media (max-width: 991px) {
  .navbar:not(.top-nav-collapse) {
    background: #563e91 !important;
  }
  .navbar-brand {
    color: rgb(238, 173, 34) !important;
  }
  em,
  span {
    color: rgb(238, 173, 34) !important;
  }
}
</style>
