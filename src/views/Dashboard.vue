<template>
  <div class="home col-8 mx-auto py-5 mt-5">
    <div class="card">
      <div class="card-body">
        <h3>Hello, {{ user.user.first_name }}</h3>
      </div>
      <div>
        <div class="card mb-2" v-bind:key="user.user.id">
          <div class="col-md-6">
            <a class="btn btn-success btn-rounded btn-sm" @click="refresh">
              Profile
            </a>
          </div>
          <div class="card-body ">
            <button
              type="button"
              class="btn btn-success btn-rounded btn-sm"
              @click="refresh"
            >
              Pay Bill
            </button>
          </div>
          <div class="card-body ">
            <button
              type="button"
              class="btn btn-success btn-rounded btn-sm"
              @click="refresh"
            >
              Cash Deposit
            </button>
          </div>
          <div class="card-body ">
            <button
              type="button"
              class="btn btn-success btn-rounded btn-sm"
              @click="refresh"
            >
              Transaction Key
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import User from "../apis/User";
export default {
  data() {
    return {
      user: []
    };
  },
  mounted() {
    User.auth().then(response => {
      this.user = response.data;
    });
  }
};
</script>
