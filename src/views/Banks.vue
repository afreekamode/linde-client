<template>
  <div class="container">
    <div class="row justify-content-center py-5 mt-5">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header text-primary">Generate Key</div>
          <div class="card-body">
            <div class="form-group row">
              <label class="col-md-4 col-form-label text-md-right"
                >Transaction Key</label
              >
              <div class="col-md-6">
                <input
                  type="text"
                  v-model="form.transaction_ref"
                  class="form-control"
                  id="transaction_ref"
                />
                <span class="text-danger" v-if="errors.transaction_ref">
                  {{ errors.transaction_ref[0] }}
                </span>
              </div>
            </div>
            <div class="form-group row mb-0">
              <div class="col-md-6 offset-md-4">
                <button
                  class="btn btn-block"
                  type="submit"
                  :class="[form.transaction_ref ? 'active' : 'inactive', 'plus']"
                  @click.prevent="confirmed(form.transaction_ref)"
                >
                Verify key
                </button>
              </div>
            </div>
            <hr>
  <div v-if="item.length === 0"></div>
    <div v-else>
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <div class="form-group row">
              <div class="col-md-6">
                <input
                  type="text"
                  v-model="item.TransactionData.transaction_ref"
                  class="form-control"
                  id="transaction_ref"
                  hidden
                />
                <span class="text-danger" v-if="errors.transaction_ref">
                  {{ errors.transaction_ref[0] }}
                </span>
              </div>
            </div>
        <div class="form-group row">
              <label class="col-md-4 col-form-label text-md-right"
                >Reciepient Name</label
              >
              <div class="col-md-6">
                <input
                  type="text"
                  v-model="item.TransactionData.receiver_fullname"
                  class="form-control"
                  id="receiver_fullname"
                />
                <span class="text-danger" v-if="errors.receiver_fullname">
                  {{ errors.receiver_fullname[0] }}
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
                  v-model="item.TransactionData.receiver_acc_no"
                  class="form-control"
                  id="receiver_acc_no"
                />
                <span class="text-danger" v-if="errors.receiver_acc_no">
                  {{ errors.receiver_acc_no[0] }}
                </span>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-md-4 col-form-label text-md-right">Bank:</label>
              <div class="col-md-6">
                <input
                  type="text"
                  v-model="item.TransactionData.receiving_bank_name"
                  class="form-control"
                  id="receiver_bank_name"
                />
                <span class="text-danger" v-if="errors.receiving_bank_name">
                  {{ errors.receiving_bank_name[0] }}
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
                  v-model="item.TransactionData.amount"
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
                >Purpose (optional):</label
              >
              <div class="col-md-6">
                <input
                  type="text"
                  v-model="item.TransactionData.purpose"
                  class="form-control"
                  id="purpose"
                />
                <span class="text-danger" v-if="errors.purpose">
                  {{ errors.purpose[0] }}
                </span>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-md-4 col-form-label text-md-right"
                >Depositor:</label
              >
              <div class="col-md-6">
                <input
                  type="text"
                  v-model="item.TransactionData.depositor_name"
                  class="form-control"
                  id="depositor_name"
                />
                <span class="text-danger" v-if="errors.depositor_name">
                  {{ errors.depositor_name[0] }}
                </span>
              </div>
            </div>

             <div class="form-group row">
              <label class="col-md-4 col-form-label text-md-right"
                >From Bank:</label
              >
              <div class="col-md-6">
                <input
                  type="text"
                  v-model="item.from_bank_name"
                  class="form-control"
                  id="from_bank_name"
                />
                <span class="text-danger" v-if="errors.from_bank_name">
                  {{ errors.from_bank_name[0] }}
                </span>
              </div>
            </div>

            <div class="form-group row mb-0">
              <div class="col-md-6 offset-md-4">
                <button
                  class="btn btn-block"
                  type="submit"
                  :class="[
                    form.transaction_ref ? 'active' : 'inactive',
                    'plus'
                  ]"
                  @click.prevent="confirmed_deposit"
                >
                  Confirm deposit
                </button>
              </div>
            </div>
            </form>
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
        receiver_acc_no: "",
        receiver_fullname: "",
        amount: "",
        purpose: "",
        receiving_bank_name: "",
        depositor_name:"",
        from_bank_name: ""
      },
      errors: [],
      item:[]
    };
  },
  methods:{
    confirmed(id) {
      Key.a_trxn_key(id)
        .then(response => {
          if (response.status == 200) {
            this.$emit("keyChange");
            this.item = response.data;
            console.log(response.data);
          }
        })
        .catch(err => console.log(err));
    },
    confirmed_deposit() {
      Key.cash_deposit(this.form)
        .then(() => {
          this.$router.push({ name: "MyTransactionKey" });
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
