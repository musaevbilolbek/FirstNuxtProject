<template>
  <div>
    <div class="programma">
      <h1 class="container prog">Участники</h1>
    </div>
    <div class="container pb-[50px]">
      <a-tabs>
        <a-tab-pane key="1" tab="Приглашенные компании">
          <div class="GeneralPartner">
            <div class="PartnerImg">
              <img src="../assets/images/partner5.png" alt="img" />
            </div>
            <div class="PartnerImg">
              <img src="../assets/images/partner8.png" alt="img" />
            </div>
            <div class="PartnerImg">
              <img src="../assets/images/partner6.png" alt="img" />
            </div>
            <div class="PartnerImg">
              <img src="../assets/images/partner77.png" alt="img" />
            </div>
            <div class="PartnerImg">
              <img src="../assets/images/partner9.png" alt="img" />
            </div>
            <div class="PartnerImg">
              <img src="../assets/images/partner10.png" alt="img" />
            </div>
            <div class="PartnerImg">
              <img src="../assets/images/partner11.png" alt="img" />
            </div>
            <div class="PartnerImg">
              <img src="../assets/images/partner12.png" alt="img" />
            </div>
            <div class="PartnerImg">
              <img src="../assets/images/partner13.png" alt="" />
            </div>
            <div class="PartnerImg young">
              <img src="../assets/images/youngpharm.png" alt="" />
            </div>
            <div class="PartnerImg young">
              <img src="../assets/images/partnerend.png" alt="" />
            </div>
            <div class="PartnerImg young">
              <img src="../assets/images/blacklegalmax.png" alt="" />
            </div>
            <div class="PartnerImg">
              <img src="../assets/images/grandpharm.png" alt="img" />
            </div>
            <div class="PartnerImg">
              <img src="../assets/images/partner1.png" alt="img" />
            </div>
            <div class="PartnerImg IMAGE">
              <img src="../assets/images/pharmluxe.png" alt="img" />
            </div>
            <div class="PartnerImg IMAGE">
              <img src="../assets/images/astrazneca.png" alt="img" />
            </div>
            <div class="PartnerImg IMAGE">
              <img src="../assets/images/shreya.png" alt="img" />
            </div>
            <div class="PartnerImg IMAGE">
              <img src="../assets/images/component.png" alt="img" />
            </div>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="Основные спикеры">
          <div class="AllCard">
            <div class="Card">
              <img :src="image1" alt="" />
              <h1>Воитов Азиз</h1>
              <div class="bggreen">
                <p>Первый заместитель министра</p>
              </div>
              <h3>
                Министерство инвестиций и внешней торговли Республики Узбекистан
              </h3>
            </div>
            <div class="Card">
              <img :src="image2" alt="" />
              <h1>Иноятов Амрилло</h1>
              <div class="bggreen">
                <p>Первый заместитель министра</p>
              </div>
              <h3>Министерство Здравоохранения Республики Узбекистан</h3>
            </div>
            <!-- ---- -->
            <div class="Card">
              <img :src="image3" alt="" />
              <h1>Кариев Сардор</h1>
              <div class="bggreen">
                <p>Директор</p>
              </div>
              <h3>Агентство по развитию фармацевтической отрасли</h3>
            </div>
            <!--  -->
            <div class="Card">
              <img :src="image4" alt="" />
              <h1>Шорахметов Шохрух</h1>
              <div class="bggreen">
                <p>Председатель</p>
              </div>
              <h3>Антимонопольный комитет Республики Узбекистан</h3>
            </div>
            <!--  -->
            <div class="Card">
              <img :src="image5" alt="" />
              <h1>Азиз Дусматов</h1>
              <div class="bggreen">
                <p>Директор</p>
              </div>
              <h3>
                Центр надлежащей практики ГУП Агентства по развитию
                фармацевтической отрасли при Минздраве
              </h3>
            </div>
            <!--  -->
            <div class="Card">
              <img :src="image6" alt="" />
              <h1>Аскарова Мухаббат</h1>
              <div class="bggreen">
                <p>Председатель</p>
              </div>
              <h3>
                Ассоциация представительств иностранных фармацевтических
                компаний и производителей в Республике Узбекистан
              </h3>
            </div>
            <!-- --- -->
            <div class="Card">
              <img :src="image7" alt="" />
              <h1>Ерхат Искалиев</h1>
              <div class="bggreen">
                <p>Председатель</p>
              </div>
              <h3>ТОО «СК-Фармация»</h3>
            </div>
            <!-- -- -->
            <div class="Card">
              <img :src="image8" alt="" />
              <h1>Адриано Антонио Треве</h1>
              <div class="bggreen">
                <p>Председатель</p>
              </div>
              <h3>
                Центральняа и Восточная Европа, Турция, Россия и Индийский
                субконтинент
              </h3>
            </div>
            <!-- -- -->
            <div class="Card">
              <img :src="Image9" alt="" />
              <h1>Лидия Ключарева</h1>
              <div class="bggreen">
                <p>Председатель</p>
              </div>
              <h3>
                Группа стран СНГ, дивизион Безрецептурные препараты, АО «Байер»
              </h3>
            </div>
            <div class="Card">
              <img :src="lastimage1" alt="" />
              <h1>Лян Наталья</h1>
              <div class="bggreen">
                <p>Глава представительства</p>
              </div>
              <h3>
                Представительство компании ''Valenta Pharm'' в Узбекистане
              </h3>
            </div>
            <div class="Card">
              <img :src="lastimage2" alt="" />
              <h1>Ганиева Хилола Гайратовна</h1>
              <div class="bggreen">
                <p>Советник директора</p>
              </div>
              <h3>Агентство по развитию фармацевтической отрасли</h3>
            </div>
            <div class="Card">
              <img :src="lastimage3" alt="" />
              <h1>Даминов Равшан Маратович</h1>
              <div class="bggreen">
                <p>Учредитель, генеральный директор</p>
              </div>
              <h3>''Orville Services''</h3>
            </div>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
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
      Image1: require("~/assets/images/lastpage6.png"),
      Image2: require("~/assets/images/lastpage5.png"), 
      Image3: require("~/assets/images/lastpage4.png"), 
    };
  },
};
</script>

<style scoped>

</style>