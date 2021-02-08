<template>
  <div class="container">
    <div class="row justify-content-center py-5 mt-5">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header text-primary">Generate Key</div>
          <div class="card-body">
            <div class="form-group row">
              <label class="col-md-4 col-form-label text-md-right"
                >Recipient Name</label
              >
              <div class="col-md-6">
                <input
                  type="text"
                  v-model="form.receiver_fullname"
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
                  v-model="form.receiver_acc_no"
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
                >To Bank:</label
              >
              <div class="col-md-6">
                <select class="form-control" v-model="form.receiving_bank_name">
                  <option selected>Choose Bank</option>
                  <option v-for="bank in banks" v-bind:key="bank.id">{{
                    bank
                  }}</option>
                </select>
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
                  v-model="form.amount"
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
                  v-model="form.purpose"
                  class="form-control"
                  id="purpose"
                />
                <span class="text-danger" v-if="errors.purpose">
                  {{ errors.purpose[0] }}
                </span>
              </div>
            </div>

            <div class="form-group row mb-0">
              <div class="col-md-6 offset-md-4">
                <button
                  class="btn btn-block"
                  type="submit"
                  :class="[
                    form.receiver_fullname ? 'active' : 'inactive',
                    'plus'
                  ]"
                  @click.prevent="generate"
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
        receiver_acc_no: "",
        receiver_fullname: "",
        amount: "",
        purpose: "",
        sender_phone: "",
        receiving_bank_name: ""
      },
      errors: [],
      items: [],
      banks: [
        "Page MFBank",
        "Stanbic Mobile Money",
        "FortisMobile",
        "TagPay",
        "FBNMobile",
        "First Bank of Nigeria",
        "Sterling Mobile",
        "Omoluabi Mortgage Bank",
        "ReadyCash (Parkway)",
        "Zenith Bank",
        "Standard Chartered Bank",
        "eTranzact",
        "Fidelity Bank",
        "CitiBank",
        "Unity Bank",
        "Access Money",
        "Eartholeum",
        "Hedonmark",
        "MoneyBox",
        "JAIZ Bank",
        "Ecobank Plc",
        "EcoMobile",
        "Fidelity Mobile",
        "TeasyMobile",
        "NIP Virtual Bank",
        "VTNetworks",
        "Stanbic IBTC Bank",
        "Fortis Microfinance Bank",
        "PayAttitude Online",
        "ZenithMobile",
        "ChamsMobile",
        "SafeTrust Mortgage Bank",
        "Covenant Microfinance Bank",
        "Imperial Homes Mortgage Bank",
        "NPF MicroFinance Bank",
        "Parralex",
        "Wema Bank",
        "Enterprise Bank",
        "Diamond Bank",
        "Paycom",
        "SunTrust Bank",
        "Cellulant",
        "ASO Savings and & Loans",
        "Heritage",
        "Jubilee Life Mortgage Bank",
        "GTBank Plc",
        "Union Bank",
        "Sterling Bank",
        "Skye Bank",
        "Keystone Bank",
        "Pagatech",
        "Coronation Merchant Bank",
        "FSDH",
        "Mkudi",
        "First City Monument Bank",
        "FET",
        "Trustbond",
        "GTMobile",
        "United Bank for Africa",
        "Access Bank",
        "TCF MFB"
      ]
    };
  },

  methods: {
    generate(e) {
      e.preventDefault();
      Key.generate_transaction_key(this.form)
        .then(response => {
          if(response.status === 201){
            alert(response.data.message)
          this.$router.push({ name: "MyTransactionKey" });
          }else{
            alert(response.data.message)
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
