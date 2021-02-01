<template>
  <div class="home text-center py-5 mt-5">
    <h3>
      Hey Hi <em v-if="user">{{ user.user.first_name }}</em
      >!<br />
      Welcome to
    </h3>
    <h1>Lindi</h1>
    <router-link class="nav-link" data-offset="90" :to="{ name: 'Landing' }"
      ><button class="start" id="signUp">Get Started</button></router-link
    >
  </div>
</template>

<script>
import User from "../apis/User";
export default {
  name: "Home",
  data() {
    return {
      user: null
    };
  },
  mounted() {
    User.auth().then(response => {
      this.user = response.data;
    });
  }
};
</script>

<style>
em {
  font-variant-caps: small-caps;
  font-size: 1.5em;
}
.start {
  border-radius: 20px;
  border: 1px solid #ffffff;
  background-color: #6113f1;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 14px 35px;
  letter-spacing: 1px;
  text-transform: uppercase;
}
</style>
