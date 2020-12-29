<template>
  <div>
    <Header />
    <HeaderAuth />
    <div class="talklist-">
      <div class="talk-contents">
        <img src="../assets/Orion_user.svg" alt="" class="friend_img">
        <p>AkiyoshiSatoshi</p>
      </div>
      <div class="talk-contents">
        <img src="../assets/Orion_user.svg" alt="" class="friend_img">
        <p>AkiyoshiSatoshi</p>
      </div>
      <div class="talk-contents">
        <img src="../assets/Orion_user.svg" alt="" class="friend_img">
        <p>AkiyoshiSatoshi</p>
      </div>
      <div class="talk-contents">
        <img src="../assets/Orion_user.svg" alt="" class="friend_img">
        <p>AkiyoshiSatoshi</p>
      </div>
      <div class="talk-contents">
        <img src="../assets/Orion_user.svg" alt="" class="friend_img">
        <p>AkiyoshiSatoshi</p>
      </div>
      <div class="talk-contents">
      <img src="../assets/Orion_user.svg" alt="" class="friend_img">
      <p>AkiyoshiSatoshi</p>
    </div>
    </div>
    <Footer />
  </div>  
</template>

<style scoped>

.talk-contents {
  background: white;
  display: flex;
  height: 100px;
  margin: 2px 0;
  position: relative;
}

.friend_img {
  background: gray;
  border-radius: 45%;
  width: 70px;
  height: 70px;
  margin: auto 10px;
}

.talk-contents p {
  position: absolute;
  top: 40px;
  left: 120px;
  color: black;
}

</style>

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
