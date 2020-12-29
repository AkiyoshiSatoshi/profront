<template>
  <div>
    <Header />
    <HeaderAuth />
    <Map />
    <div class="profile">
      <div class="user_top">
        <img src="../assets/Orion_user.svg" alt="">
        <div class="user_info">
          <p class="user_name txt">名前：<span>AkiyoshiSatoshi</span></p>
          <p class="birthplace txt">出身地：<span>Nara</span></p>
        </div>
      </div>
      <div class="user_middle">
        <div class="user_data">
          <div class="user_contents">
            <img src="../assets/Orion_team.svg" alt="" class="contents_img">
            <p class="number">15</p>
            <p class="msg">出会った人数</p>
          </div>
          <div class="user_contents">
            <img src="../assets/Orion_checkbox-square.svg" alt="" class="contents_img">
            <p class="number">3.5</p>
            <p class="msg">自分の評価</p>
          </div>
          <div class="user_contents">
            <img src="../assets/Orion_world-globe.svg" alt="" class="contents_img">
            <p class="number">10</p>
            <p class="msg">訪れた国</p>
          </div>
        </div>
      </div>
      <div class="user_end">
        <p class="setting btn" @click="$router.push('/change')">設定</p>
        <p class="list btn" @click="$router.push('/friend')">友達リスト</p>
      </div>
    </div>
    <Footer />
  </div>  
</template>

<script>
import Header from '../components/Header'
import HeaderAuth from '../components/HeaderAuth'
import Map from '../components/Map'
import Footer from '../components/Footer'
export default {
  components: {
    Header,
    HeaderAuth,
    Map,
    Footer
  }
}
</script>

<style scoped>

.user_top {
  display: flex;
  margin:  20px auto;
  width: 90%;
}

.user_top img {
  width: 25%;
  border-radius: 50%;
  background: gray;
}

.user_info {
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  padding: 0 0 0 20px;
  margin: auto;

}

span {
  color: black;
}

.txt {
  color: black;
  border-bottom: black 1px solid;
  margin-bottom: 10px;
}

.user_middle {
  width: 90%;
  background: #45A7BB;
  border-radius: 10px;
  margin: 0 auto;
  padding: 20px 10px;
}

.user_data {
  display: flex;
  justify-content: space-around;
}

.user_contents {
  text-align: center;
}

.contents_img {
  width: 50%;
}

.number {
  padding-top: 10px;
}

.msg {
  padding-top: 10px;
}

.user_end {
  display: flex;
  justify-content: space-around;
  margin: 10px auto 10px auto;
}

.btn {
  background: #45A7BB;
  text-align: center;
  padding: 25px 50px;
  border-radius: 25px;
}

</style>