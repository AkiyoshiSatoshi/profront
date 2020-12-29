<template>
  <div class="profile">
    <div class="profile_group">
      <img src="../assets/Orion_user.svg" alt="" class="user_img">
      <div class="profile_wrap">
        <p class="user_name txt">名前：<span>AkiyoshiSatoshi</span></p>
        <p class="birthplace txt">出身地：<span>Nara</span></p>
      </div>
    </div>
    <div class="profile_detail">
      <p>プロフィール:</p>
    </div>
    <div class="star_review">
        <p>
          <span class="star5_rating" data-rate="4"></span>
        </p>
    </div>
    <div class="comment">
      <p>コメントする</p>
    </div>
    <div class="send_btn">送信する</div>
  </div>
</template>

<style scoped>

.profile_group {
  display: flex;
}

.user_img {
  width: 30%;
  background: #C4C4C4;
  border-radius: 10%;
  padding: 5px 15px;
  margin: 10px 15px;
}

.profile_wrap {
  padding: 40px 0 0 10px;
}

.user_name {
  padding-bottom: 20px;
}

.txt {
  color: black;
}

span {
  color: black;
}

.profile_detail {
  background: white;
  border-radius: 10px;
  margin: 10px auto;
  width: 90%;
  padding-bottom: 30px;
}

.profile_detail p {
  color: black;
  padding: 20px 0 50px 20px;
}

/*===evaluate===*/

.star5_rating{
  position: relative;
  z-index: 0;
  display: inline-block;
  white-space: nowrap;
  color: #CCCCCC; /* グレーカラー 自由に設定化 */
  font-size: 30px;
  margin-left: 20px;
}

.star5_rating:before, .star5_rating:after{
    content: '★★★★★';
}

.star5_rating:after{
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    overflow: hidden;
    white-space: nowrap;
    color: #ffcf32; /* イエローカラー 自由に設定化 */
}

.star5_rating[data-rate="5"]:after{ width: 100%; } /* 星5 */
.star5_rating[data-rate="4.5"]:after{ width: 90%; } /* 星4.5 */
.star5_rating[data-rate="4"]:after{ width: 80%; } /* 星4 */
.star5_rating[data-rate="3.5"]:after{ width: 70%; } /* 星3.5 */
.star5_rating[data-rate="3"]:after{ width: 60%; } /* 星3 */
.star5_rating[data-rate="2.5"]:after{ width: 50%; } /* 星2.5 */
.star5_rating[data-rate="2"]:after{ width: 40%; } /* 星2 */
.star5_rating[data-rate="1.5"]:after{ width: 30%; } /* 星1.5 */
.star5_rating[data-rate="1"]:after{ width: 20%; } /* 星1 */
.star5_rating[data-rate="0.5"]:after{ width: 10%; } /* 星0.5 */
.star5_rating[data-rate="0"]:after{ width: 0%; } /* 星0 */

/*===evaluate finished===*/

.comment {
  background: white;
  width: 90%;
  margin: 0 auto;
  border-radius: 10px;
}

.comment p {
  color: black;
  padding: 20px 0 100px 20px;
}

.send_btn {
  background: #45A7BB;
  margin: 20px auto;
  text-align: center;
  width: 30%;
  border-radius: 20px;
  padding: 20px 30px;
}

</style>