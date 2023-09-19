<template>
  <div class="backgroundImage xl:h-[650px]">
    <div class="container text0">
      <div class="text-2">
        <h1 class="text">
          {{ $t("uzbforumtext") }}
        </h1>
        <p class="text2">
          {{ $t("forumtextp") }}
        </p>
      </div>
      <div class="flex11">
        <div class="flex1 mt-4">
          <img class="thesame" :src="image" alt="" />
          <p>{{ $t("month") }}</p>
        </div>
        <div class="flex2 mt-4">
          <img class="thesame" :src="images" alt="" />
          <p>{{ $t("toshkent") }}</p>
        </div>
      </div>
      <!------ regist2------- -->
      <div class="regist22">
        <button class="h1 regist2 xl:mt-[50px]">
          <nuxt-link to="#">{{ $t("Regist") }}</nuxt-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: require("~/assets/images/mini.png"),
      images: require("~/assets/images/location.png"),
    };
  },
};
</script>

<style>
.backgroundImage {
  background: url(../../assets/images/background-image.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
}

.text0 {
  padding-top: 120px;
}

.text {
  max-width: 400px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 25px;
  color: #fff;
}

.text2 {
  max-width: 500px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 150%;
}

.flex11 {
  display: flex;
  align-items: center;
}

.thesame {
  width: 15px;
  height: 15px;
  margin-top: 4px;
  margin-right: 10px;
}

.flex1 {
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 150%;
  padding-top: 10px;
  display: flex;
  width: 149px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: 4px;
  justify-content: center;
  margin-right: 20px;
}

.flex2 {
  width: 301px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: 4px;
  display: flex;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 150%;
  justify-content: center;
  padding-top: 10px;
}

.regist2 {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 32px;

  background: #06b48b;
  border-radius: 4px;
}

.regist2 .h1 {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  color: #fff;
}

@media (min-width: 1280px) {}

@media (max-width: 768px) {
  .main {
    display: flex;
    flex-wrap: wrap;
  }

  .forum button {
    margin-bottom: 30px;
  }

  /* .nav{
    display: none;
  } */
  /* .res-menu{
    display: block;
  } */
}

@media (max-width: 480px) {
  .GreenCard {
    padding-top: 20px;
  }

  .text0 {
    padding-bottom: 30px;
  }

  .green {
    gap: 10px;
  }

  .gg {
    font-size: 7px;
    padding-left: 10px;
  }

  .flex11 {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
  }

  .registration {
    display: flex;
    justify-content: center;
  }

  .regist2 {
    margin-top: 15px;
  }

  .regist22 {
    display: flex;
    justify-content: center;
  }

  .text-2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .text-2 h1 {
    font-size: 22px;
    font-weight: 900;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .text-2 p {
    font-size: 13px;
  }
}

@media (max-width: 375px) {
  li {
    flex-direction: row;
  }

  .text {
    display: flex;
    flex-wrap: wrap;
    font-size: 15px;
    align-items: center;
  }

  .text2 {
    font-size: 15px;
  }

  .text0 {
    display: flex;
    flex-wrap: wrap;
    margin-left: 10px;
    padding-bottom: 30px;
  }

  .flex11 {
    display: flex;
    flex-wrap: wrap;
  }

  .regist2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 50px;
  }

  .regist2 .h1 {
    font-size: 15px;
  }

  .firstPage {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .green {
    gap: 5px;
  }

  .gg {
    font-size: 7px;
    padding-left: 10px;
  }

  .firstPage img {
    margin-bottom: 20px;
  }

  .g1 {
    font-size: 7px;
    padding-left: 17px;
  }

  .textt h1 {
    margin-left: 50px;
  }

  .main {
    display: flex;
    flex-wrap: wrap;
  }
}</style>