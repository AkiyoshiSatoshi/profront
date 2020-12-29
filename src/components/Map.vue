<template>
  <div class="map">
    <div class="map_detail"></div>
    <div class="map_btn">
      <p class="btn_detail" @click="$router.push('/research')">友達を探す</p>
    </div>
  </div>
</template>

<style scoped>

.map {
  background: gray;
  height: 230px;
  margin: 0;
}

.map_btn {
  width: 50%;
  margin: 0 auto;
  padding-top: 130px;
}

.btn_detail {
  background: #45A7BB;
  padding: 15px 20px;
  border-radius: 15px;
  text-align: center;
}
</style>