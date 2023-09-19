<template>
  <!--------------- firstPage---- -------->
  <div class="container firstPage mt-[50px]">
    <div class="firstpageimage">
      <img class="mr-4" :src="image" alt="img" />
      <img class="xl:mr-[30px]" :src="images" alt="img" />
    </div>
    <div class="textt">
      <h1 class="mb-[20px]">
        {{ $t("firstpage") }}
      </h1>
      <p>
        {{ $t("firstpagep") }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      image: require("~/assets/images/firstpag1.png"),
      images: require("~/assets/images/firstpage2.png"),
    };
  },
};
</script>
<style scoped>
.firstpageimage {
  display: flex;
}
.firstPage {
  display: flex;
}
.firstpageimage img {
  width: 200px;
  height: 200px;
}
.textt {
  width: 650px;
}
.textt h1 {
  font-style: normal;
  font-weight: 700;
  font-size: 20px;

  color: #1c2f3f;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.textt p {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #1c2f3f;
  opacity: 0.5;
}
@media (max-width: 1440px) {
}
@media (max-width: 1280px) {
  .firstpageimage {
    margin-right: 20px;
  }
  .textt {
    width: 480px;
  }
  .textt2 h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #1c2f3f;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  .textt2 p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    font-size: 10px;
    color: #1c2f3f;
    opacity: 0.5;
  }
}
@media (max-width: 1200px) {
  .textt {
    width: 500px;
  }
  .firstpageimage img {
    width: 170px;
    height: 180px;
  }
  .textt2 h1 {
    font-weight: 700;
    font-size: 17px;
    color: #1c2f3f;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  .textt2 p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    font-size: 9px;
    color: #1c2f3f;
  }
}
@media (max-width: 1024px) {
  .firstPage {
  }
  .firstpageimage {
    margin-right: 100px;
  }
  .firstpageimage img {
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
  }
  .textt2 h1 {
    font-weight: 700;
    font-size: 15px;
    color: #1c2f3f;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  .textt2 p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    font-size: 8px;
    color: #1c2f3f;
  }
}

@media (max-width: 992px) {
  .firstPage {
    display: flex;
    flex-wrap: wrap;
  }
  .textt {
    margin-top: 20px;
    width: 640px;
  }
  .firstpageimage img {
    width: 250px;
    height: 250px;
    margin-bottom: 20px;
  }
}
@media (max-width: 768px) {
  .firstPage {
    display: flex;
    flex-wrap: wrap;
  }
  .firstpageimage {
    gap: 25px;
  }
  .firstpageimage img {
    width: 250px;
    height: 250px;
    margin-bottom: 20px;
  }

  .textt2 h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;

    color: #1c2f3f;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  .textt2 p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    color: #1c2f3f;
    opacity: 0.5;
  }
}
@media (max-width: 576px) {
  .firstpageimage {
    gap: 10px;
  }
  .firstPage {
    display: flex;
    flex-wrap: wrap;
  }
  .firstpageimage img {
    width: 187px;
    height: 200px;
  }

  .textt2 h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #1c2f3f;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  .textt2 p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    color: #1c2f3f;
    opacity: 0.5;
  }
}
@media (max-width: 480px) {
  .firstpageimage {
    gap: 10px;
  }
  .firstpageimage img {
    width: 180px;
    height: 200px;
  }

  .firstPage {
    display: flex;
    flex-wrap: wrap;
  }

  .textt h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #1c2f3f;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  .textt2 p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    color: #1c2f3f;
    opacity: 0.5;
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