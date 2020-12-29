<template>
  <div class="area">
    <p class="reply_msg">返信ありがとうございました！<br>
      これからもよろしくお願いします！
    </p>
    <button class="home_btn">閉じる</button>
  </div>
</template>


<style scoped>

.area {
  background: #45A7BB;
  border-radius: 20px;
  margin: 80px auto;
  height: 350px;
  width: 80%;
}

.reply_msg {
  text-align: center;
  padding: 50px 20px 0 20px;
  line-height: 3em;
}

.home_btn {
  padding: 10px 40px;
  border-radius: 20px;
  color: #45A7BB;
  border: white;
  background: white;
  margin-top:140px;
  text-align: center;
  transform: translate(80%, -50%);
}

</style>