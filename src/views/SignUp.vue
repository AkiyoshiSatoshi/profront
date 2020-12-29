<template>
  <div>
    <div class="card flex">
      <img src="../assets/94f18b30496644c993e7c708892a019a.jpg" alt="">
      <div class="form">
        <input placeholder="名前" type="text"/>
        <input placeholder="メールアドレス" type="text" />
        <button>サインアップ</button>
      </div>
    </div>
  </div>
</template>


<style scoped>

.card {
  text-align: center;
  margin-top: 20px;
}

.card img {
  width: 80%;
  height: 408px;
  border-radius: 10px 10px 0 0;
}

.form {
  width: 80%;
  margin-top: 15px;
  display: flex;
}

.input {
  margin-top: 15px;
  width: 100%;
  border-radius: 10px;
  color: black;
}

.button {
  width: 100px;
  text-align: center;
}

</style>