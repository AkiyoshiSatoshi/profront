<template>
  <div class="footer">
    <div class="footer-bar">
      <div class="footer_contents">
        <img src="../assets/Orion_house.svg" alt="" class="footer_img" @click="$router.push('/home')">
      </div>
      <div class="footer_contents">
        <img src="../assets/Orion_map-marker.svg" alt="" class="footer_img">
      </div>
      <div class="footer_contents">
        <img src="../assets/Orion_team.svg" alt="" class="footer_img" @click="$router.push('/friend')">
      </div>
      <div class="footer_contents">
        <img src="../assets/Orion_setting.svg" alt="" class="footer_img" @click="$router.push('/change')">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>

.footer {
  z-index: 100;
  border-radius: 20%;
  position: fixed;
  top: 713px;
}

.footer-bar {
  height: 100px;
  background: #45A7BB;
  z-index: 0;
  display: flex;
  justify-content: space-around;
  border-radius: 10% 10% 0 0;
}

.footer_contents {
  z-index: 100;
  text-align: center;
  padding: 30px 0;
}

.footer_img {
  width: 40%;
  z-index: 100;
}

</style>