<template>
  <div class="home col-8 mx-auto py-5 mt-5">
    <div class="card">
      <div>
        <h4 class="card-title">Transaction Key</h4>
        <table
          class="table table-bordered table-responsive-md table-striped text-center"
        >
          <thead class="blue lighten-4">
            <tr>
              <th class="text-center">Transaction Key</th>
              <th class="text-center">Created on</th>
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
                {{ item.txn_ref_ttl }}
              </td>
              <td>
                <span class="table-remove">
                  <button
                    type="button"
                    class="btn btn-success btn-rounded btn-sm my-0"
                    @click="refresh"
                  >
                    Refresh key
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
      Transaction.all_trxn_keys()
        .then(response => {
          this.items = response.data;
        })
        .catch(err => console.log(err));
    },
    refresh() {
      Transaction.refresh_trxn_keys(this.item.transaction_ref)
        .then(response => {
          if (response.status == 200) {
            this.$emit("keyChange");
          }
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
