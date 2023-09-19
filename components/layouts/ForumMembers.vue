<template>
  <!-- --------------Forum members------------------ -->
  <div class="bgimage2">
    <div class="contain main xl:pt-[100px]">
      <div class="forum xl:pt-[200px]">
        <h1 class="xl:pb-[30px]">
          {{ $t("membersforum") }}
        </h1>
        <nuxtlink class="btn" to="/members">{{ $t("allsee") }}</nuxtlink>
      </div>
      <!-- Blazon foruma-->
      <div class="GreenCard">
        <div
          class="allsee aos-init aos-animate"
          data-aos="fade-down"
          data-aos-easing="ease-in-sine"
        >
          <img class="pb-[10px]" :src="Image1" alt="" />
          <h3>{{ $t("CardBlazon") }}</h3>
        </div>
        <div
          class="allsee aos-init aos-animate"
          data-aos="fade-down"
          data-aos-easing="ease-in-sine"
        >
          <img class="" :src="Image1" alt="" />
          <h3>{{ $t("CardBlazon2") }}</h3>
        </div>
        <div
          class="allsee aos-init aos-animate"
          data-aos="fade-down"
          data-aos-easing="ease-in-sine"
        >
          <img class="pb-[10px]" :src="Image2" alt="" />
          <h3>{{ $t("CardBlazon3") }}</h3>
        </div>
        <div
          class="allsee aos-init aos-animate"
          data-aos="fade-down"
          data-aos-easing="ease-in-sine"
        >
          <img class="" :src="Image3" alt="" />
          <h3>{{ $t("CardBlazon4") }}</h3>
        </div>
        <div class="allsee" data-aos="fade-down" data-aos-easing="ease-in-sine">
          <img class="" :src="Image4" alt="" />
          <h3>{{ $t("CardBlazon5") }}</h3>
        </div>
        <div class="allsee" data-aos="fade-down" data-aos-easing="ease-in-sine">
          <img class="" :src="Image5" alt="" />
          <h3>{{ $t("CardBlazon6") }}</h3>
        </div>
        <div class="allsee" data-aos="fade-down" data-aos-easing="ease-in-sine">
          <img class="pb-[10px]" :src="Image1" alt="" />
          <h3>{{ $t("CardBlazon7") }}</h3>
        </div>
        <nuxt-link
          to="/members"
          class="alls"
          data-aos="fade-down"
          data-aos-duration="4000"
        >
          <h1>{{ $t("CardB") }}</h1>
          <img class="w-[20px] ml-[30px] mt-[15px]" :src="Image6" alt="" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Image1: require("~/assets/images/blazon.png"),
      Image2: require("~/assets/images/blazon2.png"),
      Image3: require("~/assets/images/blazon3.png"),
      Image4: require("~/assets/images/blazonOther.png"),
      Image5: require("~/assets/images/blazonOther2.png"),
      Image6: require("~/assets/images/vv.png"),
    };
  },
};
</script>

<style scoped>
.bgimage2 {
  background: url(../../assets/images/bgimage2.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-bottom: 50px;
}

.forum h1 {
  width: 100px;
  padding-bottom: 15px;

  font-weight: 700;
  font-size: 30px;

  color: #1c2f3f;
}
.btn {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #06b48b;
  border-radius: 4px;
  padding: 4px 16px;
  font-size: 12px;
  color: #06b48b;
}

.main {
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
}
.allsee {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  background: rgba(237, 245, 243, 1);
  padding: 20px;
  border-radius: 4px;
}
.allsee h3 {
  font-weight: 500;
  font-size: 11px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.alls {
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 50px;
  font-size: 12px;
  background-color: rgb(6, 180, 139);
}
.alls h1 {
  color: #fff;
}
.allsee img {
  width: 60px;
}

.GreenCard {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
}
@media (max-width: 1400px) {
  .contain {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 24px /* 32px */;
    padding-left: 24px /* 32px */;
  }
}

@media (max-width: 1280px) {
  .contain {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 24px /* 32px */;
    padding-left: 24px /* 32px */;
  }
  .allsee {
    width: 200px;
    height: 220px;
  }
  .GreenCard {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(4, 1fr);
  }
  .forum h1 {
    margin-right: 15px;
  }
}
@media (max-width: 1200px) {
  .allsee {
    width: 190px;
    height: 225px;
  }
  .allsee img {
    width: 50px;
  }
  .forum {
    margin-bottom: 20px;
  }
}

@media (max-width: 1024px) {
  .forum {
    width: 150px;
  }
  .allsee {
    width: 155px;
    height: 230px;
  }
  .allsee img {
    width: 50px;
  }
  .forum h1 {
    font-size: 20px;
  }
  .btn {
    padding: 2px 16px;
    font-size: 12px;
  }

  .allsee h3 {
    font-size: 12px;
  }
  .GreenCard {
    display: grid;
    grid-gap: 22px;
    grid-template-columns: repeat(4, 1fr);
  }
  .alls {
    width: 100%;
  }
}
@media (max-width: 992px) {
  .main {
    display: flex;
    flex-wrap: wrap;
  }
  .allsee {
    width: 100%;
    height: 240px;
  }
  .allse h3 {
    font-size: 7px;
  }
  .allsee img {
    width: 70px;
  }
  .GreenCard {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (max-width: 768px) {
  .allsee {
    width: 100%;
    height: 170px;
  }

  .allsee img {
    width: 50px;
  }
  .GreenCard {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
  }
  .btn {
    margin-bottom: 20px;
  }
}
@media (max-width: 480px) {
  .GreenCard {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(2, 1fr);
  }
  .allsee {
    width: 100%;
    height: 220px;
  }
}
@media (max-width: 375px) {
  .GreenCard {
    display: grid;
    grid-gap: 12px;
    grid-template-columns: repeat(1, 1fr);
  }
  .allsee {
    width: 100%;
    height: 220px;
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