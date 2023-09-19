<template>
  <!-- -------Advantages----- -->
  <section class="contain mt-50px xl:mt-[100px] xl:pb-[80px] pb-[50px]">
    <div class="Advantage">
      <div class="adv-title">
        <h1>Преимущества</h1>
      </div>
      <!-- advantage card -->
      <div class="AdvCard">
        <div class="Tema" data-aos="flip-up" data-aos-duration="1000">
          <div class="tema">
            <img :src="image1" alt="" />
            <h3>Темы</h3>
          </div>
          <p>
            Насыщенная деловая программа, включающая уникальные тематические
            сессии, круглые столы, семинары и мастер классы
          </p>
        </div>
        <div class="Tema" data-aos="flip-up" data-aos-duration="1000">
          <div class="tema">
            <img :src="image2" alt="" />
            <h3>Опыт</h3>
          </div>
          <p>
            Мероприятие призвано стать площадкой для обмена передовым опытом и
            практиками между экспертами фармацевтического рынка.
          </p>
        </div>
        <div class="Tema" data-aos="flip-up" data-aos-duration="1000">
          <div class="tema">
            <img :src="image3" alt="" />
            <h3>Нетворкинг</h3>
          </div>
          <p>
            Установление личных неформальных контактов с заинтересованными
            людьми узконаправленной специализации с наименьшими затратами усилий
            и времени на деловые поездки
          </p>
        </div>
        <div class="Tema" data-aos="flip-up" data-aos-duration="1000">
          <div class="tema">
            <img :src="image4" alt="" />
            <h3>Эксклюзивность</h3>
          </div>
          <p>Уникальное для своей отрасли мероприятие</p>
        </div>
        <div class="Tema" data-aos="flip-up" data-aos-duration="1000">
          <div class="tema">
            <img :src="image5" alt="" />
            <h3>Партнерство</h3>
          </div>
          <p>Формирование и расширение базы потенциальных деловых партнеров</p>
        </div>

        <div class="Tema" data-aos="flip-up" data-aos-duration="1000">
          <div class="tema">
            <img :src="image6" alt="" />
            <h3>Тренды</h3>
          </div>
          <p>Обсудим предстоящие тенденции рынка</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      image1: require("~/assets/svg/advlogo1.png"),
      image2: require("~/assets/svg/advlogo2.png"),
      image3: require("~/assets/svg/advlogo3.png"),
      image4: require("~/assets/svg/advlogo4.png"),
      image5: require("~/assets/svg/advlogo5.png"),
      image6: require("~/assets/svg/advlogo6.png"),
    };
  },
};
</script>

<style scoped>

</style>