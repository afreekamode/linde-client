<template>
  <div class="container">
    <div class="row justify-content-center py-5 mt-5">
      <div class="col-md-8">
        <div class="card-body">
          <h3 class="card-title">Transaction Keys</h3>
          <div v-for="(item, index) in items" v-bind:key="index" ref="body">
            <div class="card">
              <div class="form-group row">
                <label class="col-md-4 col-form-label text-md-right"
                  >Transaction Key:</label
                >
                <div class="col-md-6">
                  <h4 class="itemText" style="color:green">
                    {{ item.transaction_ref }}
                  </h4>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-md-4 col-form-label text-md-right"
                  >Valid Till:</label
                >
                <div class="col-md-6">
                  <p class="itemText" style="color:green">
                    {{ item.txn_ref_ttl }}
                    <span class="table-remove">
                      <button
                        type="button"
                        class="btn btn-success btn-rounded btn-sm"
                        @click="refreshKey(item.transaction_ref)"
                      >
                        Refresh
                      </button>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Trxn from "../apis/Transaction";
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
      Trxn.mykeys()
        .then(response => {
          this.items = response.data;
        })
        .catch(err => console.log(err));
    },
    refreshKey(id) {
      Trxn.refresh_trxn_keys(id)
        .then(response => {
          if (response.status == 200) {
            this.$emit("keyChange");
            console.log(response.data);
          }
        })
        .catch(err => console.log(err));
    }
  },
  onUpdate() {
     this.$refs.body.refresh();
    }
};
</script>
<style scoped>
.card {
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: rgb(241, 241, 241);
  padding: 15px;
}

.headText {
  left: 20px;
  width: 100%;
  margin-left: 5px;
}
.itemText {
  margin-left: 5px;
}
</style>
