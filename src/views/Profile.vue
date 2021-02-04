<template>
  <div class="wrap">
    <div class="row follow-box">
      <div class="follow-header">
        <img
          src="../assets/noimage.png"
          :alt="user.user.first_name"
          width="100"
          height="100"
          class="follow-user-image"
        />
        <div class="follow-header-info">
          <div class=" col-md-18 follow-name-text">
            <span>Name:</span>
            {{ user.user.first_name }} {{ user.user.last_name }}
          </div>
          <div class=" col-md-18 follow-name-text">
            <span>BVN:</span>
            *******
          </div>
          <div class=" col-md-18 follow-name-text">
            <span>Email:</span>
            {{ user.user.email }}
          </div>
          <div class=" col-md-18 follow-name-text">
            <span>Phone:</span>
            {{ user.user.phone }}
          </div>
          <div class=" col-md-18 follow-name-text">
            <span>Account No:</span>
            {{ user.user.account_no }}
          </div>
          <div class=" col-md-18 follow-name-text">
            <span>Card:</span>
            {{ user.user.card_type }}
          </div>
          <div class="col-smd618follow-body-text">
            <a
              href="/update"
              class=" transform hover:-translate-y-1 hover:scale-110 ..."
              >Update Profile</a
            >
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
      user: []
    };
  },
  mounted() {
    User.auth().then(response => {
      this.user = response.data;
    });
  }
};
</script>
<style scoped>
.follow-box {
  background: #563e91;
  max-width: 650px;
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 3px;
  padding: 30px;
  color: #fff;
  animation: mymove 5s infinite;
}
span {
  color: rgb(238, 173, 34);
  font-weight: bold;
}

.wrap {
  padding: 10px;
  padding-top: 20px;
}

.follow-header {
  display: flex;
  align-items: flex-start;
  font-size: 14px;
  width: 100%;
}

.follow-user-image {
  border-radius: 50%;
}

.follow-header_info {
  text-align: right;
  width: 100%;
}
.follow-name-text {
  width: 100%;
}
.follow-user-name {
  font-size: 16px;
  font-weight: 800;
  padding: 0px;
  margin: 0px;
  text-align: right;
}

@keyframes animate {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
</style>
