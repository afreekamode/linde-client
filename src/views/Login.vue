<template>
  <div class="container">
    <div class="row justify-content-center py-5 mt-5">
      <div class="col-md-8">
        <div class="card">
          <div
            class="card-header"
            style="color:rgb(254, 255, 149); background-color:orange"
          >
            Sign in
          </div>
          <div class="card-body">
             <form ref="myform" @submit.prevent="login">
            <div class="form-group row">
              <label class="col-md-4 col-form-label text-md-right">Email</label>
              <div class="col-md-6">
                <input
                  type="email"
                  v-model="form.email"
                  class="form-control"
                  id="email"
                />
                <span class="text-danger" v-if="errors.email">
                  {{ errors.email[0] }}
                </span>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-md-4 col-form-label text-md-right"
                >Password</label
              >
              <div class="col-md-6">
                <input
                  type="password"
                  v-model="form.password"
                  class="form-control"
                  id="password"
                  aria-current="password"
                />
                <span class="text-danger" v-if="errors.password">
                  {{ errors.password[0] }}
                </span>
              </div>
            </div>

            <div class="form-group row mb-0">
              <div class="col-md-6 offset-md-4">
                <button
                  class="btn btn-primary btn-block"
                  type="submit"
                  @click.prevent="login"
                >
                  Sign In
                </button>
              </div>
            </div>
             </form>
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
      form: {
        email: "",
        password: ""
      },
      errors: []
    };
  },
  methods: {
    login() {
      User.login(this.form).then(response => {
        if (response.status == 200) {
          this.$store.commit("LOGIN", true);
          localStorage.setItem("token", response.data.Accesstoken);
          this.$router.push({ name: "Home" });
        } else {
          this.flash(response.data.message, "info");
        }
      });
    }
  }
};
</script>
