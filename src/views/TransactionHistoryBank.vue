<template>
  <div class="home col-8 mx-auto py-5 mt-5">
    <div class="card">
      <div>
        <h4 class="card-title">Transaction History</h4>
        <table
          class="table table-bordered table-responsive-md table-striped text-center"
        >
          <thead class="blue lighten-4">
            <tr>
              <th class="text-center">Transaction Key</th>
              <th class="text-center">Deposited on</th>
              <th class="text-center">Deposited From</th>
              <th class="text-center">Deposited To</th>
              <th class="text-center">Amount Deposited</th>
              <th class="text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="hide"
              v-for="(item, index) in items"
              v-bind:key="index"
              v-on:relaodKey="getKeys()"
            >
              <td class="pt-3-half">
                {{ item.transaction_ref }}
              </td>
              <td class="pt-3-half">
                {{ item.created_at }}
              </td>
              <td class="pt-3-half">
                {{ item.from_bank_name }}
              </td>
              <td class="pt-3-half">
                {{ item.to_bank_name }}
              </td>
              <td class="pt-3-half">
                {{ item.amount }}
              </td>
               <td class="pt-3-half">
                {{ item.tnx_status}}
              </td>
              <td>
                <span class="table-remove">
                  <button
                    type="button"
                    class="btn btn-success btn-rounded btn-sm my-0"
                  >
                    Actions
                  </button>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import Transaction from "../apis/Transaction";
export default {
  props: ["item"],
  data() {
    return {
      items: []
    };
  },
  created() {
    this.getKeys();
  },

  methods: {
    getKeys() {
      Transaction.all_trxn_history().then(response => {
        this.items = response.data;
      });
    }
  }
};
</script>
