<template>
  <div class="container">
    <div class="row justify-content-center py-5 mt-5">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header text-primary">Verification Code</div>
          <div class="card-body">
            <div class="form-group row">
              <label class="col-md-4 col-form-label text-md-right"
                >Please input a verification code sent to your email to contineu</label
              >
              <div class="col-md-6">
                <input
                  type="text"
                  v-model="form.verifycode"
                  class="form-control"
                  id="verifycode"
                />
                <span class="text-danger" v-if="errors.verifycode">
                  {{ errors.verifycode[0] }}
                </span>
              </div>
            </div>
            <div class="form-group row mb-0">
              <div class="col-md-6 offset-md-4">
                <button
                  class="btn btn-block"
                  type="submit"
                  :class="[
                    form.verifycode ? 'active' : 'inactive',
                    'plus'
                  ]"
                  @click.prevent="verify(form.verifycode)"
                >
                  Verify code
                </button>
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
        verifycode: ""
      },
      errors: [],
    };
  },
  methods: {
    verify(id) {
      User.verify_email(id)
        .then(response => {
            if(response.status === 200){
          this.$store.commit("LOGIN", true);
          localStorage.setItem("token", response.data.Accesstoken);
          this.$router.push({ name: "Home" });
            }else if(response.data.verified === "Done"){
                this.$router.push({ name: "Login" });
            }else{
            this.flash(response.data.message, "info");
            }
        })
    }
  }
};
</script>
<style scoped>
.active {
  background-color: chartreuse;
  color: aliceblue;
}
.inactive {
  background-color: darkgrey;
}
</style>
