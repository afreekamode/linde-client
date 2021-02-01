<template>
  <div class="home col-8 mx-auto py-5 mt-5">
    <main class="mt-5">
      <div class="card">
        <div class="card-body font-weight-bold" v-if="user">
          Hello <em style="color: #563e91">{{ user.user.first_name }}</em
          >!
        </div>
      </div>
      <!--Section: Best Features-->
      <section id="best-features" class="text-center">
        <!-- Heading -->
        <h2 class="mb-5 font-weight-bold" style="color:orange;">
          What do wanna do?
        </h2>

        <!--Grid row-->
        <div class="row d-flex justify-content-center mb-4">
          <!--Grid column-->
          <div class="col-md-8">
            <!-- Description -->
            <p class="grey-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
              voluptate hic provident nulla repellat facere esse molestiae ipsa
              labore porro minima quam quaerat rem, natus repudiandae debitis
              est sit pariatur.
            </p>
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->

        <!--Grid row-->
        <div class="row">
          <!--Grid column-->
          <div class="col-md-4 mb-5">
            <router-link :to="{ name: 'CreateTransactionKey' }">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                style="fill:orange; width:55px; height:55px"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                  clip-rule="evenodd"
                />
              </svg>
            </router-link>
            <h4 class="my-4 font-weight-bold">Cash deposit</h4>
            <p class="grey-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.
            </p>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-md-4 mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              style="fill:orange; width:55px; height:55px"
            >
              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
              <path
                fill-rule="evenodd"
                d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                clip-rule="evenodd"
              />
            </svg>
            <img src="" />
            <h4 class="my-4 font-weight-bold">Transfer</h4>
            <p class="grey-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.
            </p>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-md-4 mb-1">
            <router-link :to="{ name: 'Bill' }">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                style="fill:orange; width:55px; height:55px"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
            </router-link>
            <h4 class="my-4 font-weight-bold">Pay Bills</h4>
            <p class="grey-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.
            </p>
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->
      </section>
      <!--Section: Best Features-->
    </main>
  </div>
</template>

<script>
import User from "../apis/User";

export default {
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
.my-4 {
  color: #563e91;
}
</style>
