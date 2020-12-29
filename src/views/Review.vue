<template>
  <div>
    <Header />
    <HeaderAuth />
    <Profile />
    <Footer />
  </div>  
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeaderAuth from '../components/HeaderAuth'
import Profile from '../components/Profile'
export default {
  components: {
    Header,
    Footer,
    HeaderAuth,
    Profile
  }
}
</script>