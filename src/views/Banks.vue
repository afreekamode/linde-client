<template>
  <div class="container">
    <div class="row justify-content-center py-5 mt-5">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header text-primary">Cash Deposit</div>
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
                  :class="[
                    form.transaction_ref ? 'active' : 'inactive',
                    'plus'
                  ]"
                  @click.prevent="confirmed(form.transaction_ref)"
                >
                  Verify key
                </button>
              </div>
            </div>
            <hr />
            <div v-if="item.length === 0"></div>
            <div v-else>
              <form ref="myform" @submit.prevent="confirmed_deposit">
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
                    >Recipient Name</label
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
                    >Recipient Account no:</label
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
                  <label class="col-md-4 col-form-label text-md-right"
                    >Recipient Bank:</label
                  >
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
                      v-model="item.TransactionData.depositor_fullname"
                      class="form-control"
                      id="depositor_fullname"
                    />
                    <span class="text-danger" v-if="errors.depositor_fullname">
                      {{ errors.depositor_fullname[0] }}
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
                      v-model="form.from_bank_name"
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
                        item.TransactionData.transaction_ref
                          ? 'active'
                          : 'inactive',
                        'plus'
                      ]"
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
        from_bank_name: ""
      },
      errors: [],
      item: []
    };
  },
  methods: {
    confirmed(id) {
      Key.a_trxn_key(id).then(response => {
        if (response.status == 200) {
          this.form = {
            receiver_acc_no: response.data.TransactionData.receiver_acc_no,
            receiver_fullname: response.data.TransactionData.receiver_fullname,
            amount: response.data.TransactionData.amount,
            purpose: response.data.TransactionData.purpose,
            receiving_bank_name:
              response.data.TransactionData.receiving_bank_name,
            depositor_fullname:
              response.data.TransactionData.depositor_fullname,
            transaction_ref: response.data.TransactionData.transaction_ref
          };
          this.item = response.data;
        } else {
          alert(response.data.message);
        }
      });
    },
    confirmed_deposit(e) {
      e.preventDefault();
      Key.cash_deposit(this.form).then(response => {
        if (response.status == 201) {
          alert(response.data.message);
          this.$router.push({ name: "MyTransactionKey" });
        } else {
          alert(response.data.message);
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
