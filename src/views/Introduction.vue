<template>
  <div>
    <Header />
    <HeaderAuth />
    <Detail />
    <Footer />
  </div>  
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeaderAuth from '../components/HeaderAuth'
import Detail from '../components/Detail'
export default {
  components: {
    Header,
    Footer,
    HeaderAuth,
    Detail
  }
}
</script>
