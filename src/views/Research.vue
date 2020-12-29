<template>
  <div>
    <Header />
    <HeaderAuth />
    <div class="research">
      <p>検索中</p>
      <img src="../assets/Orion_reload.svg" alt="">
      <p class="close_btn" @click="$router.push('/home')">閉じる</p>
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

.research {
  background: #45A7BB;
  margin: 120px auto;
  text-align: center;
  border-radius: 10px;
  width: 90%;
  padding: 30px 0;
}

.research img {
  width: 20%;
  animation: rotate-anime 10s linear infinite;
}

@keyframes rotate-anime {
  0%  {transform: rotate(0);}
  100%  {transform: rotate(360deg);}
}

.research p {
  
  margin-bottom: 30px;
}

.close_btn {
  background: white;
  color: #45A7BB;
  width: 30%;
  margin: 30px auto;
  border-radius: 10px;
  padding: 10px 30px;
}

</style>
