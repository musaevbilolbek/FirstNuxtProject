<template>
  <!-- --Main Speaker- -->
  <section class="mainspeaker xl:pt-[100px]">
    <div class="contain Main">
      <div class="SpeakerText">
        <h1 class="xl:pb-[20px]">{{ $t("maintext") }}</h1>
        <nuxtlink to="/members" class="btn1">{{ $t("allsee") }}</nuxtlink>
      </div>
      <!-- speaker card -->
      <div class="AllCard">
        <div class="Card" data-aos="zoom-in" data-aos-duration="1500">
          <img :src="Image1" alt="" />
          <h1>{{ $t("name1") }}</h1>
          <div class="bggreen">
            <p>{{ $t("name1p") }}</p>
          </div>
          <h3>
            {{ $t("name1h3") }}
          </h3>
        </div>
        <!-- ------ -->
        <div class="Card" data-aos="zoom-in" data-aos-duration="1500">
          <img :src="Image2" alt="" />
          <h1>{{ $t("name2") }}</h1>
          <div class="bggreen">
            <p>{{ $t("name2p") }}</p>
          </div>
          <h3>{{ $t("name2h3") }}</h3>
        </div>
        <!-- ---- -->
        <div class="Card" data-aos="zoom-in" data-aos-duration="1500">
          <img :src="Image3" alt="" />
          <h1>{{ $t("name3") }}</h1>
          <div class="bggreen">
            <p>{{ $t("name3p") }}</p>
          </div>
          <h3>{{ $t("name3h3") }}</h3>
        </div>
        <!--  -->
        <div class="Card" data-aos="zoom-in" data-aos-duration="1500">
          <img :src="Image4" alt="" />
          <h1>{{ $t("name4") }}</h1>
          <div class="bggreen">
            <p>{{ $t("name4p") }}</p>
          </div>
          <h3>{{ $t("name4h3") }}</h3>
        </div>
        <!--  -->
        <div class="Card" data-aos="zoom-in" data-aos-duration="1500">
          <img :src="Image5" alt="" />
          <h1>{{ $t("name5") }}</h1>
          <div class="bggreen">
            <p>{{ $t("name5p") }}</p>
          </div>
          <h3>
            {{ $t("name5h3") }}
          </h3>
        </div>
        <!--  -->
        <div class="Card" data-aos="zoom-in" data-aos-duration="1500">
          <img :src="Image6" alt="aa" />
          <h1>{{ $t("name6") }}</h1>
          <div class="bggreen">
            <p>{{ $t("name6p") }}</p>
          </div>
          <h3>
            {{ $t("name6h3") }}
          </h3>
        </div>
        <!-- --- -->
        <div class="Card" data-aos="zoom-in" data-aos-duration="1500">
          <img :src="Image7" alt="" />
          <h1>{{ $t("name7") }}</h1>
          <div class="bggreen">
            <p>{{ $t("name7p") }}</p>
          </div>
          <h3>{{ $t("name7h3") }}</h3>
        </div>
        <!-- -- -->
        <div class="Card" data-aos="zoom-in" data-aos-duration="1500">
          <img :src="Image8" alt="" />
          <h1>{{ $t("name8") }}</h1>
          <div class="bggreen">
            <p>{{ $t("name8p") }}</p>
          </div>
          <h3>
            {{ $t("name8h3") }}
          </h3>
        </div>
        <!-- -- -->
        <div class="Card" data-aos="zoom-in" data-aos-duration="1500">
          <img :src="Image9" alt="" />
          <h1>{{ $t("name9") }}</h1>
          <div class="bggreen">
            <p>{{ $t("name9p") }}</p>
          </div>
          <h3>
            {{ $t("name9h3") }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      Image1: require("~/assets/images/speaker1.png"),
      Image2: require("~/assets/images/speaker2.png"),
      Image3: require("~/assets/images/speaker3.png"),
      Image4: require("~/assets/images/speaker4.png"),
      Image5: require("~/assets/images/speaker5.png"),
      Image6: require("~/assets/images/speaker6.png"),
      Image7: require("~/assets/images/speaker7.png"),
      Image8: require("~/assets/images/speaker8.png"),
      Image9: require("~/assets/images/speaker9.png"),
    };
  },
};
</script>

<style scoped>
.mainspeaker {
  background: #078b6c;
}

.SpeakerText h1 {
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  color: #ffffff;
}


.btn1 {
  cursor: pointer;
  color: #edf5f3;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 4px 16px;
  font-size: 12px;
}
.Main {
  display: flex;
  justify-content: space-between;
}
.Card img {
  width: 250px;
  height: 200px;
  background-position: center;
  background-size: cover;
}
.Card {
  padding: 15px 15px;
  background: #ffffff;
  border-radius: 4px;
  width: 269px;
  height: 390px;
}
.Card h1 {
  padding-top: 15px;
  padding-bottom: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 140%;
}
.bggreen {
  padding: 4px 4px;
  background: #ebf3f1;
  border-radius: 2px;
}
.bggreen p {
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 150%;
  color: #078b6c;
  opacity: 0.8;
}
.Card h3 {
  padding-top: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 150%;
  color: #1c2f3f;
}
.AllCard {
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 1400px) {
  .SpeakerText h1 {
  max-width: 100px;
}

  .contain {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 24px /* 32px */;
    padding-left: 24px /* 32px */;
  }
  .mainspeaker {
    padding-bottom: 100px;
  }
  
}
@media (max-width: 1280px) {
  .mainspeaker {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .SpeakerText h1{
    margin-bottom:20px;
  }
  .AllCard {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 35px;
  }
  .Card {
    width: 260px;
    height: 480px;
  }
  .Card img {
    width: 245px;
    height: 260px;
    background-position: center;
    background-size: cover;
  }
}
@media (max-width: 1200px) {
  .mainspeaker {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .Card {
    width: 247px;
    height: 480px;
  }
  .Card img {
    width: 245px;
    height: 260px;
    background-position: center;
    background-size: cover;
  }
  .contain {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 24px /* 32px */;
    padding-left: 24px /* 32px */;
  }
}
@media (max-width: 1024px) {
  .contain {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 24px /* 32px */;
    padding-left: 24px /* 32px */;
  }
  .SpeakerText {
    width: 120px;
    margin-right: 120px;
  }
  .mainspeaker {
    padding-top: 50px;
  }
  .Card {
    width: 210px;
    height: 455px;
  }
  .Card img {
    height: 220px;
  }
  .AllCard {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 25px;
  }
  .btn1 {
    margin-top: 20px;
  }
}

@media (max-width: 992px) {
  .SpeakerText {
   
    margin-bottom: 20px;
  }
  .Main {
    display: flex;
    flex-wrap: wrap;
  }
  .AllCard {
    display: grid;
    gap: 25px;
    grid-template-columns: repeat(3, 1fr);
  }
  .Card {
    width: 100%;
  }
}
@media (max-width: 768px) {
  .Main {
    display: flex;
    flex-wrap: wrap;
  }
  .Card {
    width: 100%;
    height: 430px;
  }
  .Card img {
    width: 100%;
    height: 240px;
  }
  .SpeakerText h1 {
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .SpeakerText .btn1 {
    margin-bottom: 15px;
  }
  .AllCard {
    display: grid;
    gap: 25px;
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 576px) {
  .Card {
    width: 350px;
    height: 420px;
  }
  .Card img {
    width: 100%;
    height: 240px;
  }
  .AllCard {
    display: grid;
    gap: 25px;
    grid-template-columns: repeat(1, 1fr);
  }
}
@media (max-width: 480px) {
  .SpeakerText h1 {
    font-size: 25px;
  }
  .AllCard {
    display: grid;
    gap: 25px;
    grid-template-columns: repeat(1, 1fr);
  }
  .Card img {
    width: 100%;
    height: 266px;
  }

  .Card {
    width: 100%;
    height: 430px;
    padding-top: 15px;
  }
  .Main {
    display: flex;
    flex-wrap: wrap;
  }

  .btn1 {
    margin-top: 15px;
  }
}
/* // 1760
// 1440-1400
// 1200-1280
// 992
// 768
// 576
// 480
// 375
// 320 */
</style>