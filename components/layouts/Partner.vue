<template>
  <!-- Partner Forum -->
  <section class="contain mt-50px xl:mt-[100px] xl:pb-[80px] pb-[50px]">
    <div class="PartnerForum">
      <div class="adv-title">
        <h1>Партнеры форума</h1>
      </div>
      <!-- Partner -->
      <div class="AllPartner">
        <h3>Генеральный партнер</h3>
        <div class="General">
          <div class="PartnerImg" data-aos="fade-down" data-aos-duration="1000">
            <img :src="image1" alt="img" />
          </div>
          <div
            class="PartnerImg"
            data-aos="fade-down"
            data-aos-easing="ease in sine"
            data-aos-duration="1500"
          >
            <img :src="image2" alt="img" />
          </div>
          <div
            class="PartnerImg IMAGE"
            data-aos="fade-down"
            data-aos-easing="ease in sine"
            data-aos-duration="2000"
          >
            <img :src="image3" alt="img" />
          </div>
          <div
            class="PartnerImg IMAGE"
            data-aos="fade-down"
            data-aos-easing="ease in sine"
            data-aos-duration="2500"
          >
            <img :src="image4" alt="img" />
          </div>
        </div>
        <!-- line gray -->
        <!-- ---- -->
        <h3 class="mt-[20px] mb-[10px]">Главный партнер</h3>
        <div class="General">
          <div class="PartnerImg" data-aos="fade-down" data-aos-duration="1000">
            <img :src="image5" alt="img" />
          </div>
          <div
            class="PartnerImg"
            data-aos="fade-down"
            data-aos-easing="ease in sine"
            data-aos-duration="1000"
          >
            <img :src="image6" alt="img" />
          </div>
          <div
            class="PartnerImg"
            data-aos="fade-down"
            data-aos-easing="ease in sine"
            data-aos-duration="1500"
          >
            <img :src="image7" alt="img" />
          </div>
        </div>
        <!-- ------- -->
        <h3 class="mt-[20px] mb-[10px]">Юридический партнер</h3>
        <div class="General">
          <div class="PartnerImg" data-aos="fade-down" data-aos-duration="1000">
            <img :src="image8" alt="" />
          </div>
          <div
            class="PartnerImg young"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <img :src="image9" alt="" />
          </div>
          <div
            class="PartnerImg young"
            data-aos="fade-down"
            data-aos-easing="ease in sine"
            data-aos-duration="2000"
          >
            <img :src="image10" alt="" />
          </div>
          <div
            class="PartnerImg young"
            data-aos="fade-down"
            data-aos-easing="ease in sine"
            data-aos-duration="3000"
          >
            <img :src="image11" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      image1: require("~/assets/images/grandpharm.png"),
      image2: require("~/assets/images/partner1.png"),
      image3: require("~/assets/images/pharmluxe.png"),
      image4: require("~/assets/images/astrazneca.png"),
      image5: require("~/assets/images/partner4.png"),
      image6: require("~/assets/images/partner2.png"),
      image7: require("~/assets/images/partner3.png"),
      image8: require("~/assets/images/partner13.png"),
      image9: require("~/assets/images/youngpharm.png"),
      image10: require("~/assets/images/partnerend.png"),
      image11: require("~/assets/images/blacklegalmax.png"),
    };
  },
};
</script>

<style scoped>
.adv-title h1 {
  width: 120px;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 130%;
  color: #1c2f3f;
}
.PartnerForum {
  display: flex;
  justify-content: space-between;
}
.PartnerImg {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 198px;
  height: 150px;
  background: #ffffff;
  border: 1px solid #c5d4e0;
  border-radius: 4px;
}
.PartnerImg img {
  width: 150px;
  height: 100px;
}
.IMAGE img {
  height: 60px;
}
.line {
  width: 885px;
  height: 0px;
  border: 1px solid #c5d4e0;
}
.AllPartner h3 {
  padding-bottom: 15px;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 140%;
  color: #1c2f3f;
}
.young img {
  height: 50px;
}
.General {
  display: grid;
  gap: 22px;
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

  .PartnerImg {
    width: 182px;
  }
  .General {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  .adv-title h1 {
    margin-bottom: 15px;
  }
  .AllPartner h3 {
    margin-bottom: 15px;
  }
}
@media (max-width: 1200px) {
  .PartnerImg {
    width: 100%;
  }
}
@media (max-width: 1024px) {
  .adv-title h1 {
    margin-top: 20px;
    margin-bottom: 15px;
  }
  .AllPartner h3 {
    margin-bottom: 15px;
  }
  .PartnerImg {
    width: 100%;
  }
}
@media (max-width: 992px) {
  .PartnerForum {
    display: flex;
    flex-wrap: wrap;
  }
  .PartnerImg {
    width: 100%;
  }
}
@media (max-width: 768px) {
  .PartnerForum {
    display: flex;
    flex-wrap: wrap;
  }
  .PartnerImg img {
    width: 130px;
  }
  .PartnerImg {
    width: 172px;
  }
  .General {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 576px) {
  .PartnerForum {
    display: flex;
    flex-wrap: wrap;
  }

  .PartnerImg {
    width: 182px;
  }
  .adv-title h1 {
    margin-top: 20px;
    margin-bottom: 15px;
  }
  .AllPartner h3 {
    margin-bottom: 15px;
  }
}
@media (max-width: 480px) {
  .PartnerForum {
    display: flex;
    flex-wrap: wrap;
  }
  .General {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .adv-title h1 {
    margin-top: 20px;
    margin-bottom: 15px;
  }
  .AllPartner h3 {
    margin-bottom: 15px;
  }
  .PartnerImg {
    width: 182px;
  }
}
</style>