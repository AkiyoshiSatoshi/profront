<template>
  <div>
    <Header />
    <HeaderAuth />
    <div class="list_btn">
      <p @click="$router.push('/friend')">友達リスト</p>
      <p @click="$router.push('/adopt')">申請リスト</p>
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

.list_btn {
  display: flex;
  flex-wrap: wrap;
}

.list_btn p {
  background: #45A7BB;
  border: white;
  margin: 80px auto 0;
  padding: 50px 120px;
  border-radius: 20px;
  font-size: 20px;
}

</style>