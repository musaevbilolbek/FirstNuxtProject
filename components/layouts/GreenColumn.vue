<template>
  <!---- green1 column----- -->
  <section class="greencolumn xl:h-[300px] mt-[40px] xl:mt-[100px]">
    <div class="contain green1">
      <div
        class="firstG pt-[80px] aos-animate"
        data-aos="flip-left"
        data-aos-easing="ease-in sine"
        data-aos-duration="3000"
      >
        <div class="Green1 numimage">
          <img :src="image" alt="Images green column" />
        </div>
        <div class="Green1">
          <p class="pt-2">{{ $t("greencolumn") }}</p>
        </div>
      </div>
      <div
        class="firstG pt-[80px]"
        data-aos="flip-center"
        data-aos-easing="ease-in sine"
        data-aos-duration="3000"
      >
        <div class="Green1">
          <img :src="images" alt="Images green column" />
        </div>
        <div class="Green1">
          <p class="gg pt-2 pl-6">
            {{ $t("greencolp") }}
          </p>
        </div>
      </div>
      <div
        class="firstG pt-[80px]"
        data-aos="flip-left"
        data-aos-easing="ease-in sine"
        data-aos-duration="3000"
      >
        <div class="Green1">
          <img :src="Image" alt="Images green column" />
        </div>
        <div class="Green1">
          <p class="g1 pt-2">{{ $t("greencol") }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import  { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      image: require("~/assets/images/num1.png"),
      images: require("~/assets/images/num2.png"),
      Image: require("~/assets/images/num3.png"),
    };
  },
  computed: {
    ...mapGetters("media", ["list"]),
  },
  methods: {
    ...mapActions("media", ["fetchData"]),
    
    async fetchList(){
      await this.fetchData();
    }
  },
  mounted() {
    this.fetchList()
  },
};
</script>

<style scoped>
.green1 {
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
}
.greencolumn {
  background: #f2f8f6;
}
.firstG {
  color: white;
  width: 100%;
  height: 200px;
  background: #06b48b;
  border-radius: 4px;
}
.Green1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.Green1 p {
  font-size: 15px;
}

@media (max-width: 1400px) {
  .contain{ 
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 24px /* 32px */;
  padding-left: 24px /* 32px */;
}
}
@media (max-width: 1280px) {
  .contain{ 
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 24px /* 32px */;
  padding-left: 24px /* 32px */;
}
  .green1{
    padding-bottom: 50px;
  }
}
@media (max-width: 1200px) {
 .firstG{
  width: 100%;
 }
}
@media (max-width: 1024px) {
 .firstG{
  width: 100%;
 }
}

@media (max-width: 992px) {
  .Green1 p {
    font-size: 12px;
  }
}
@media (max-width: 768px) {
  .firstG {
    width: 100%;
  }
  .Green1 p {
    font-size: 20px;
  }
  
  .green1 {
    padding-top: 40px;
    padding-bottom: 40px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
}
@media (max-width: 480px) {
  .Green1 .gg{
  padding-left: 15px;
  }
  .green1 {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }
  .Green1 img{
    widows: 70px;
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