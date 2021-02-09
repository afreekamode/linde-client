<template>
  <div class="container">
    <div class="alert alert-success spacing" role="alert" v-show="show">
      {{ body }}
    </div>
    <div class="row justify-content-center py-5 mt-5">
      <div class="col-md-8">
        <div class="card-body" v-if="items">
          <h3 class="card-title">Transaction Keys</h3>
          <div v-if="loading" class="loading">Loading...</div>
          <div v-if="items.length == 0">
            <div class="col-md-6 offset-md-4" v-if="!loading">
              <button class="btn btn-block" type="submit">
                <router-link
                  data-offset="90"
                  :to="{ name: 'CreateTransactionKey' }"
                >
                  <p>Hoops nothing found! click here to generate a new Key</p>
                </router-link>
              </button>
            </div>
          </div>
          <div v-for="(item, index) in items" v-bind:key="index">
            <div class="card">
              <div class="form-group row">
                <label class="col-md-4 col-form-label text-md-right">
                  Key
                </label>
                <div class="col-md-6">
                  <p class="itemText" style="color:green">
                    {{ item.transaction_ref }}
                    | Name: <span>{{ item.receiver_fullname }}</span>
                    | Amount: <span>&#8358;{{ item.amount }}</span>
                  </p>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-md-4 col-form-label text-md-right"
                  >Valid</label
                >
                <div class="col-md-6">
                  <p class="itemText" style="color:green">
                    {{ item.txn_ref_ttl }}
                    <span class="table-remove">
                      <button
                        type="button"
                        class="btn btn-success btn-rounded btn-sm"
                        @click.prevent="refreshKey(item.transaction_ref)"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                      </button>
                    </span>
                    <span>
                      <button
                        type="button"
                        class="btn btn-success btn-rounded btn-sm"
                        @click.prevent="deleteKey(item.transaction_ref)"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="red"
                          viewBox="0 0 24 24"
                          width="18"
                          height="18"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
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
  data() {
    return {
      show: false,
      body: "",
      items: [],
      loading: true,
      errored: false
    };
  },
  created() {
    this.getKeys();
    if (this.message) {
      this.flash(this.message);
    }
    window.events.on("flash", message => this.flash(message));
  },

  methods: {
    getKeys() {
      Trxn.mykeys()
        .then(response => {
          this.items = response.data;
        })
        .finally(() => (this.loading = false));
    },
    refreshKey(id) {
      Trxn.refresh_trxn_keys(id).then(response => {
        if (response.status == 200) {
          this.flash("Key refreshed Successfully", "success");
          this.getKeys();
        }
      });
    },
    deleteKey(id) {
      Trxn.deletekey(id)
        .then(response => {
          if (response.status == 200) {
            this.flash("Key deleted Successfully", "success");
            this.getKeys();
          } else {
            this.flash(response.data.message, "info");
          }
        })
        .finally(() => (this.loading = false));
    },
    flash(message) {
      this.show = true;
      this.body = message;
      setTimeout(() => {
        this.hide();
      }, 3500);
    },
    hide() {
      this.show = false;
    }
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
  font-size: 15px;
}
span {
  padding: 5px;
}
.spacing {
  width: 250px;
  position: fixed;
  right: 25px;
  bottom: 15px;
  z-index: 1;
}
.loading {
  width: 250px;
  right: 55px;
  bottom: 15px;
  z-index: 1;
  color: blueviolet;
}
</style>
