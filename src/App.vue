<template>
  <div>
    <div id="app" class="h-screen">
      <Navigation />
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  components: {
    Navigation
  },
  mounted() {
    this.$store.commit("LOGIN", !!localStorage.getItem("token"));
  }
};
</script>

<style>
body {
  font-family: "Nunito", sans-serif;
  height: 100vh;
  margin: 0;
}
.h-screen {
  height: 100%;
}
</style>
