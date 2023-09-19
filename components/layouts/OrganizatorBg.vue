<template>
  <!----- Organizator--- -->
  <div class="Organizatorbg">
    <div class="contain Organ xl:pt-[100px] pb-[50px]">
      <div class="adv-title">
        <h1>Организаторы</h1>
      </div>
      
      <div class="allorganizator">
        <div
          class="OrganizatorImg"
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-easing="ease-in-sine"
        >
          <img :src="image1" alt="" />
          <h3>
            министерство инвестиций и внешней торговли республики узбекистан
          </h3>
        </div>
        <div class="OrganizatorImg">
          <img :src="image2" alt="" />
          <h3>
            АГЕНТСТВО ПО РАЗВИТИЮ ФАРМАЦЕВТИЧЕСКОЙ ОТРАСЛИ МИНИСТЕРСТВО
            ИНВЕСТИЦИЙ, ПРОМЫШЛЕННОСТИ И ТОРГОВЛИ РЕСПУБЛИКИ УЗБЕКИСТАН
          </h3>
        </div>
        <div
          class="OrganizatorImg"
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-easing="ease-in-sine"
        >
          <img :src="image3" alt="img" />
          <h3>
            Ассоциация представительств иностранных фармацевтических компаний и
            производителей в Республике Узбекистан
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      image1:require("~/assets/images/blazon.png"), 
      image2:require("~/assets/images/blazon2.png"), 
      image3:require("~/assets/images/organizator3.png"), 
    }
  }
};
</script>

<style scoped>
.Organizatorbg {
  background: #f2f8f6;

}
.OrganizatorImg {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 260px;
  height: 300px;
  background: #ffffff;
  align-items: center;
  border: 1px solid grey;
  border-radius: 4px;
}
.OrganizatorImg h3 {
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 150%;
  text-align: center;
  text-transform: uppercase;
  color: #1c2f3f;
 
}
.OrganizatorImg img {
  width: 90px;
  padding-bottom: 10px;
}
.adv-title {
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 140%;
  color: #1c2f3f;
}
.Organ {
  display: flex;
  justify-content: space-between;
}
.allorganizator {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(3, 1fr);
}

@media(max-width:1400px){
  .contain{
    width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 24px /* 32px */;
  padding-left: 24px /* 32px */;
  }
}
@media (max-width: 1280px) {
 
}
@media (max-width: 1200px) {
  
  .Organ{
    padding-top: 100px;
    padding-bottom: 50px;
  }
  
  .contain{
    width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 24px /* 32px */;
  padding-left: 24px /* 32px */;
  }
  .OrganizatorImg{
    width: 245px;
  height: 300px;
  }
}
@media (max-width:1024px) {
  .OrganizatorImg{
    width: 220px;
  height: 300px;
  }
}
@media (max-width: 992px) {
  .contain{
    width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 24px /* 32px */;
  padding-left: 24px /* 32px */;
  }
  .Organ {
    display: flex;
    flex-wrap: wrap;
  }
  .OrganizatorImg{
    width: 220px;
  height: 360px;
  }

}
@media (max-width: 768px) {
  .allorganizator {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(4, 1fr);
  }
  .OrganizatorImg {
    width: 227px;
    height: 335px;
  }
  .adv-title h1 {
    margin-top: 30px;
    margin-bottom: 25px;
  }
}
@media (max-width: 576px) {
  c .adv-title {
    margin-bottom: 30px;
    margin-top: 30px;
  }
  .allorganizator {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(1, 1fr);
  }
  .OrganizatorImg img{
    width: 65px;
  }
}
@media (max-width: 480px) {
  .Organ {
    display: flex;
    flex-wrap: wrap;
  }
  .OrganizatorImg {
    width: 100%;
    height: 250px;
  }
  .OrganizatorImg img{
    width: 65px;
  }
  .adv-title {
    margin-bottom: 30px;
    margin-top: 30px;
  }
  .allorganizator {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>