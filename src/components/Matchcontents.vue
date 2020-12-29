<template>
  <div class="matchinglist">
    <div class="contents-left">
      <img src="../assets/Orion_user.svg" alt=""  class="matching-img">
      <p class="match-name">{{ name }}</p>
    </div>
    <div class="contents-right">
      <button class="friend-application">{{ txtupper }}</button>
      <button class="detail-btn">{{txtbottom}}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "txtupper", "txtbottom"],

}
</script>

<style scoped>

.matchinglist {
  background: white;
  border-radius: 10%;
  height: 150px;
  margin: 10px auto;
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 90%;
}

.contents-left {
  margin-top: 10px;
}

.contents-right{
  display: flex;
  flex-wrap: wrap;
  margin-left: 160px;
}

.contents-right button {
  width: 80%;
  margin: 15px 0;
  background: #45A7BB;
  border: white;
  border-radius: 10px;
  padding: 5px 10px;
}

.matching-img {
  width: 20%;
  z-index: 100;
  background: gray;
  border-radius: 5%;
  padding: 10px 15px;
  margin: auto 0;
  position: absolute;
  top: 10px;
  left: 25px;
}

.match-name {
  color: black;
  position: absolute;
  top: 115px;
  left: 55px;
}





</style>