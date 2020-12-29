<template>
  <div class="user_profile">
    <div class="user_img">
      <img src="../assets/Orion_user.svg" alt="" class="user_photo">
    </div>
    <div class="user_contents">
      <div class="user_first">
        <p class="user_name">AkiyoshiSatoshi</p>
        <p class="birthplace">Nara</p>
      </div>
      <div class="user_detail">
        <p>プロフィール</p>
      </div>
    </div>
    <div class="select">
      <p class="friend_btn txt">友達になる</p>
      <p class="msg_btn txt">メッセージを送る</p>
    </div>
  </div>
</template>

<style scoped>

.user_profile {
  color: black;
}

.user_img {
  background: gray;
  height: 200px;
  width: 100%;
  padding: 50px 0 20px 0;
  text-align: center;
}

.user_photo {
  height: 70%;
}

.user_first {
  display: flex;
  padding: 30px;
}

.user_name {
  color: black;
  font-size: 24px;
}

.birthplace {
  color: black;
  padding: 7px 0 0 10px;
}



.user_detail {
  width: 300px;
  border-radius: 20px;
  border: white;
  height: 120px;
  background: white;
  text-align: center;
  margin: 5px auto;
}

.user_detail p {
  color: gray;
  text-align: start;
  padding: 10px 10px;
}

.select {
  text-align: center;
  justify-content: space-around;
  margin-top: 40px;
  display: flex;
}

.txt {
  background: #45A7BB;
  border-radius: 20px;
  border: #45A7BB;
  padding: 20px 5px;
  font-size: 12px;
  width: 150px;
}

.btn_friend {
  margin-right: 20px;
}

</style>