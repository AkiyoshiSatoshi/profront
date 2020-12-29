<template>
  <div>
    <Header />
    <HeaderAuth />
    <div class="profile">
      <div class="profile_group">
        <img src="../assets/Orion_user.svg" alt=""  class="user_img">
        <div class="profile_wrap">
          <p class="user_name   txt">名前： <span>変更</span></p>
          <p class="birthplace  txt">出身地：<span>変更</span></p>
        </div>
      </div>
      <div class="profile_detail">
        <p>プロフィール:</p>
      </div>
      <div class="change_btn">変更</div>
    </div>
    <Footer />
  </div>  
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeaderAuth from '../components/HeaderAuth'
export default {
  components: {
    Header,
    Footer,
    HeaderAuth
  }
}
</script>

<style scoped>

.profile_group {
  display: flex;
}

.user_img {
  width: 30%;
  background: #C4C4C4;
  border-radius: 10%;
  padding: 5px 15px;
  margin: 10px 15px;
}

.profile_wrap {
  padding: 40px 0 0 10px;
}

.user_name {
  padding-bottom: 20px;
}

.txt {
  color: black;
}

span {
  color: black;
  background: #C4C4C4;
  padding: 7px 15px;
  width: 20%;
  text-align: center;
  border-radius: 10px;
  margin-left: 40px;
}

.profile_detail {
  background: white;
  border-radius: 10px;
  margin: 10px auto;
  width: 90%;
  padding-bottom: 30px;
}

.profile_detail p {
  color: black;
  padding: 20px 0 50px 20px;
}

.change_btn {
  background: #C4C4C4;
  color: black;
  padding: 7px 10px;
  width: 20%;
  text-align: center;
  border-radius: 10px;
  float: right;
  margin-right: 25px;
}

</style>