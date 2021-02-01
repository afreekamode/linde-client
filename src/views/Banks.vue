<template>
  <div class="container">
    <div class="row justify-content-center py-5 mt-5">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header text-primary">Generate Key</div>
          <div class="card-body">
            <div class="form-group row">
              <label class="col-md-4 col-form-label text-md-right"
                >Reciepient Name</label
              >
              <div class="col-md-6">
                <input
                  type="text"
                  v-model="form.item.item.reciever_fullname"
                  class="form-control"
                  id="reciever_fullname"
                />
                <span class="text-danger" v-if="errors.reciever_fullname">
                  {{ errors.reciever_fullname[0] }}
                </span>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-md-4 col-form-label text-md-right"
                >Account no:</label
              >
              <div class="col-md-6">
                <input
                  type="text"
                  v-model="form.item.item.reciever_acc_no"
                  class="form-control"
                  id="reciever_acc_no"
                />
                <span
                  class="text-danger"
                  v-if="errors.item.item.reciever_acc_no"
                >
                  {{ errors.reciever_acc_no[0] }}
                </span>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-md-4 col-form-label text-md-right">Bank:</label>
              <div class="col-md-6">
                <input
                  type="text"
                  v-model="form.item.item.recieving_bank_name"
                  class="form-control"
                  id="reciever_bank_name"
                />
                <span class="text-danger" v-if="errors.recieving_bank_name">
                  {{ errors.recieving_bank_name[0] }}
                </span>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-md-4 col-form-label text-md-right"
                >Amount:</label
              >
              <div class="col-md-6">
                <input
                  type="text"
                  v-model="form.item.item.amount"
                  class="form-control"
                  id="amount"
                />
                <span class="text-danger" v-if="errors.amount">
                  {{ errors.amount[0] }}
                </span>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-md-4 col-form-label text-md-right"
                >Verification:</label
              >
              <div class="col-md-6">
                <input
                  type="chekbox"
                  v-model="form.confirmed"
                  class="form-control"
                  id="confirmed"
                />
                <span class="text-danger" v-if="errors.confirmed">
                  {{ errors.confirmed[0] }}
                </span>
              </div>
            </div>

            <div class="form-group row mb-0">
              <div class="col-md-6 offset-md-4">
                <button
                  class="btn btn-block"
                  type="submit"
                  :class="[form.confirmed ? 'active' : 'inactive', 'plus']"
                  @click.prevent="process"
                >
                  Generate Key
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
import Key from "../apis/Transaction";

export default {
  data() {
    return {
      form: {
        reciever_acc_no: "",
        reciever_fullname: "",
        amount: "",
        verified: "",
        recieving_bank_name: ""
      },
      errors: [],
      item: []
    };
  },

  methods: {
    process() {
      Key.a_trxn_key(this.form)
        .then(() => {
          this.$router.push({ name: "Banks" });
        })
        .catch(error => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
          }
        });
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
