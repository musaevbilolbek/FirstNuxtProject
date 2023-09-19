<template>
  <div>
    <div class="med">
      <h1 class="container mediatext">Медиа</h1>
    </div>
    <div class="container mainpage mt-[30px]">
      <div class="btn">
        <button @click="activateImage = 1" class="but mb-[30px]">
          5-6 июня, 2023
        </button>
        <button @click="activateImage = 2" class="but mb-[30px]">
          15-17 июня, 2022
        </button>
      </div>
      <!-- line -->
      <div class="line-gray"><span></span></div>
      <!--  -->
      <div class="btn">
        <button @click="activateImg = 1" class="but1 mb-[30px]">
          Фотогалерея
        </button>
        <button @click="activateImg = 2" class="but1 mb-[30px]">
          Видеогалерея
        </button>
      </div>
      <!-- -------------- -->
      <div v-if="activateImage === 1"></div>
      <div v-if="activateImg === 2">
        <div class="Media pb-[50px]">sadasdasd</div>
      </div>
      <div v-if="activateImage === 1">
        <div class="Media pb-[50px]" v-for="(item, idx) in images" :key="idx">
          <img :src="item.image" alt="" />
        </div>
      </div>
      <div v-if="activateImage === 2">
        <div class="pb-[50px]">
          <div class="Media" v-for="item in images2" :key="item">
            <img :src="item.image" alt="img" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activateImage: 1,
      activateImg: 1,
      activateImg: 2,
      images: [
        { image: require("~/assets/images/media11.jpg") },
        { image: require("~/assets/images/media12.jpg") },
        { image: require("~/assets/images/media13.png") },
        { image: require("~/assets/images/media1.jpg") },
        { image: require("~/assets/images/media2.jpg") },
        { image: require("~/assets/images/media3.jpg") },
        { image: require("~/assets/images/media4.jpg") },
        { image: require("~/assets/images/media5.jpg") },
        { image: require("~/assets/images/media6.jpg") },
        { image: require("~/assets/images/media7.jpg") },
        { image: require("~/assets/images/media8.jpg") },
        { image: require("~/assets/images/media9.jpg") },
      ],
      images2: [
        { image: require("~/assets/images/images2.jpg") },
        { image: require("~/assets/images/images3.jpg") },
        { image: require("~/assets/images/images4.jpg") },
        { image: require("~/assets/images/images5.jpg") },
        { image: require("~/assets/images/images6.jpg") },
        { image: require("~/assets/images/images7.jpg") },
        { image: require("~/assets/images/images8.jpg") },
        { image: require("~/assets/images/images9.jpg") },
        { image: require("~/assets/images/images10.jpg") },
        { image: require("~/assets/images/images11.jpg") },
        { image: require("~/assets/images/images12.jpg") },
        { image: require("~/assets/images/images13.jpg") },
      ],
    };
  },
};
</script>

<style scoped>
.line-gray {
  margin-bottom: 25px;
  width: 100%;
  opacity: 0.2;
  border: 1px solid rgb(82, 81, 81);
}
.btn {
  display: flex;
  gap: 20px;
}
.but {
  border: 1px solid;
  border-color: rgba(6, 180, 139, 1);
  padding: 5px 10px;
  color: rgba(6, 180, 139, 1);
}
.but1 {
  border: 1px solid;
  border-color: rgba(6, 180, 139, 1);
  padding: 8px 12px;
  color: rgba(6, 180, 139, 1);
}
.but:hover {
  background: #c9ece4;
}
.Tabs-2 {
  display: flex;
}
.Media {
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(4, 1fr);
}

.ant-tabs-ink-bar {
  background-color: red;
}
.med {
  height: 170px;
  width: 100%;
  background: #078b6c;
}
.mediatext {
  padding: 54px;
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 140%;
  color: #ffffff;
}
/* responsive */

@media (max-width: 768px) {
  /* .mainpage {
    display: flex;
    flex-wrap: wrap;
  } */
  .Media {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(1, 1fr);
  }
  .Media img {
    width: 100%;
    height: 290px;
  }
}
@media (max-width: 480px) {
  .Media img {
    width: 100%;
    height: 240px;
  }
}
@media (max-width: 375px) {
  .Media img {
    width: 100%;
    height: 200px;
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
