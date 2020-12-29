<template>
  <header>
    <div class="header">
      <div class="flex-left">
        <div class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="flex-center">
        <p class="app-title">OFFLINE</p>
      </div>
        <div class="switchArea">
          <input type="checkbox" id="switch1">
          <label for="switch1"><span></span></label>
          <div id="swimg"></div>
        </div>
    </div>
  </header>
</template>

<style scoped>

.header {
  display: flex;
  height: 75px;
}

/* === ハンバーガーメニュー=== */
.hamburger {
  width: 40px;
  height: 40px;
  position: absolute;
  cursor: pointer;
  z-index: 100;
  top: 20px;
  left: 20px;
  transition: 0.4s;
}

.hamburger span {
  position: absolute;
  left: 2px;
  display: block;
  width: 35px;
  height: 3px;
  border-radius: 40px;
  background-color: black;
  transition: 0.8s;
}

.hamburger span:nth-of-type(1) {
  top: 10px;
}

.hamburger span:nth-of-type(2) {
  top: 20px;
}

.hamburger span:nth-of-type(3) {
  top: 30px;
}

.header-nav {
  display: none;
}


/* === タイトル名 === */

.flex-center {
  margin: 0 auto;
  padding-top: 45px;
}

.app-title {
  width: 30%;
  color: black;
  transform: translate(-50%, -50%);
  font-size: 24px;
}

/* === ボタンを表示するエリア === */

.switchArea {
  line-height: 60px;
  text-align: center;     
  position: absolute;  
  width: 90px;
  right: 10px;
  top: 20px;
}

.switchArea input[type="checkbox"] {
  display: none;
}

.switchArea label {
  display: block;
  box-sizing: border-box;
  height: 48px;
  border: 2px solid #45A7BB;
  border-radius: 30px;
}

.switchArea input[type="checkbox"]:checked +label {
  border-color: #6d7172;
}

.switchArea label span:after {
  padding: 0 0 0 30px;
  color: black;
}

.switchArea input[type="checkbox"]:checked +label span:after{
  padding: 0 36px 0 0;
  color: black;
}

.switchArea #swimg {
  position: absolute;
  width: 40px;
  height: 40px;
  background: #45A7BB;
  top: 4px;
  left: 4px;
  border-radius: 26px;
  transition: .2s;
}

.switchArea input[type="checkbox"]:checked ~ #swimg {
  transform: translateX(42px);
  background: #45A7BB;
}

</style>