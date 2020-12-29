<template>
  <div>
    <Header />
    <HeaderAuth />
    <ResultScreen />
    <Footer />
  </div>  
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeaderAuth from '../components/HeaderAuth'
import ResultScreen from '../components/ResultScreen'
export default {
  components: {
    Header,
    Footer,
    HeaderAuth,
    ResultScreen
  }
}
</script>
