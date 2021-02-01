<template>
  <div class="container">
    <div class="row justify-content-center py-5 mt-5">
      <div class="col-md-8">
        <div class="card">
          <div
            class="card-header"
            style="color:rgb(254, 255, 149); background-color:orange"
          >
            Update Profile
          </div>
          <div class="card-body">
            <div class="form-group row">
              <label class="col-md-4 col-form-label text-md-right"
                >First Name</label
              >
              <div class="col-md-6">
                <input
                  type="text"
                  v-model="user.user.first_name"
                  class="form-control"
                  id="name"
                  readonly
                />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-md-4 col-form-label text-md-right"
                >Last Name</label
              >
              <div class="col-md-6">
                <input
                  type="text"
                  v-model="user.user.last_name"
                  class="form-control"
                  id="lastname"
                  readonly
                />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-md-4 col-form-label text-md-right">Email</label>
              <div class="col-md-6">
                <input
                  type="email"
                  v-model="user.user.email"
                  class="form-control"
                  id="email"
                  readonly
                />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-md-4 col-form-label text-md-right">Phone</label>
              <div class="col-md-6">
                <input
                  type="text"
                  v-model="user.user.phone"
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
                >Add Account No</label
              >
              <div class="col-md-6">
                <input
                  type="text"
                  v-model="user.user.account_no"
                  class="form-control"
                  id="account_no"
                />
                <span class="text-danger" v-if="errors.account_no">
                  {{ errors.account_no[0] }}
                </span>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-md-4 col-form-label text-md-right">Bank</label>
              <div class="col-md-6">
                <input
                  type="text"
                  v-model="user.user.bank"
                  class="form-control"
                  id="bank"
                />
                <span class="text-danger" v-if="errors.bank">
                  {{ errors.bank[0] }}
                </span>
              </div>
            </div>

            <div class="form-group row mb-0">
              <div class="col-md-6 offset-md-4">
                <button
                  class="btn btn-primary btn-block"
                  type="submit"
                  @click.prevent="update"
                >
                  Update
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
        account_no: "",
        phone: "",
        card: "",
        card_date: ""
      },
      errors: [],
      user: []
    };
  },

  methods: {
    update() {
      User.update(this.user)
        .then(() => {
          this.$router.push({ name: "Profile" });
        })
        .catch(error => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
          }
        });
    }
  },
  mounted() {
    User.auth().then(response => {
      this.user = response.data;
    });
  }
};
</script>
