<template>
  <div>
    <Header />
    <HeaderAuth />
    <Matchcontents :txtupper="sendText1"  :txtbottom="sendText2" v-for="(data, index) in lists" :key="index" :name="data.name" />
    <Footer />
  </div>  
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeaderAuth from '../components/HeaderAuth'
import Matchcontents from '../components/Matchcontents'
export default {
  data() {
    return {
      sendText1: "メッセージを送る",
      sendText2: "詳細情報",
      lists: [
        {
          name: "Taro"
        },
        {
          name: "Jiro"
        },
        {
          name: "Saburo"
        },
        {
          name: "Shiro"
        },
        {
          name: "Goro"
        }
      ]
    };
  },
  components: {
    Header,
    Footer,
    HeaderAuth,
    Matchcontents
  }
}
</script>
