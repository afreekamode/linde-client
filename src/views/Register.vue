<template>
  <div class="container">
    <div class="row justify-content-center py-5 mt-5">
      <div class="col-md-8">
        <div class="card">
          <div
            class="card-header"
            style="color:rgb(254, 255, 149); background-color:orange"
          >
            Signup
          </div>
          <div class="card-body">
            <div class="form-group row">
              <label class="col-md-4 col-form-label text-md-right"
                >First Name</label
              >
              <div class="col-md-6">
                <input
                  type="text"
                  v-model="form.first_name"
                  class="form-control"
                  id="name"
                />
                <span class="text-danger" v-if="errors.first_name">
                  {{ errors.first_name[0] }}
                </span>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-md-4 col-form-label text-md-right"
                >Last Name</label
              >
              <div class="col-md-6">
                <input
                  type="text"
                  v-model="form.last_name"
                  class="form-control"
                  id="lastname"
                />
                <span class="text-danger" v-if="errors.last_name">
                  {{ errors.last_name[0] }}
                </span>
              </div>
            </div>

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
              <label class="col-md-4 col-form-label text-md-right">BVN</label>
              <div class="col-md-6">
                <input
                  type="text"
                  v-model="form.bvn"
                  class="form-control"
                  id="bvn"
                />
                <span class="text-danger" v-if="errors.bvn">
                  {{ errors.bvn[0] }}
                </span>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-md-4 col-form-label text-md-right">Phone</label>
              <div class="col-md-6">
                <input
                  type="text"
                  v-model="form.phone"
                  class="form-control"
                  id="phone"
                />
                <span class="text-danger" v-if="errors.phone">
                  {{ errors.phone[0] }}
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
                />
                <span class="text-danger" v-if="errors.password">
                  {{ errors.password[0] }}
                </span>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-md-4 col-form-label text-md-right"
                >Confirm Password</label
              >
              <div class="col-md-6">
                <input
                  type="password"
                  v-model="form.password_confirmation"
                  class="form-control"
                  id="password_confirmation"
                />
                <span class="text-danger" v-if="errors.password_confirmation">
                  {{ errors.password_confirmation[0] }}
                </span>
              </div>
            </div>

            <div class="form-group row mb-0">
              <div class="col-md-6 offset-md-4">
                <button
                  class="btn btn-primary btn-block"
                  type="submit"
                  @click.prevent="register"
                >
                  Register
                </button>
              </div>
            </div>
            <div class="form-group row mb-0">
              <div class="col-md-6 pt-4 offset-md-4">
                <span>
                  <router-link data-offset="90" :to="{ name: 'Login' }">
                    Already have an account<em> Login</em>
                  </router-link>
                </span>
              </div>
            </div>
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
        first_name: "",
        last_name: "",
        email: "",
        bvn: "",
        phone: "",
        password: "",
        password_confirmation: ""
      },
      errors: []
    };
  },

  methods: {
    register() {
      User.register(this.form)
        .then(response => {
          if(response.status === 201){
          this.$router.push({ name: "VerifyKey" });
          }else{
            alert(response.data.message);
          }
        })
    }
  }
};
</script>
