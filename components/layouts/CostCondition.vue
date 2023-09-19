<template>
  <!-- ---- Cost and Condition ---- -->
  <section class="contain mt-50px xl:mt-[100px] xl:pb-[80px] pb-[50px]">
    <div class="Condition xl:gap-[160px]">
      <div class="cond">
        <h1>Стоимость и условия участия</h1>
        <div>
          <a-modal
            :footer="null"
            title="Зарегистрироваться"
            centered
            :visible="open"
            @ok="open = false"
            @cancel="open = false"
            :width="700"
            :height="640"
          >
            <div class="InputDiv">
              <input type="text" :placeholder="name" />
              <input type="text" :placeholder="pochta" />
              <input type="number" :placeholder="number" />
              <input type="text" :placeholder="company" />
              <input type="text" :placeholder="rank" />
              <div class="checkbox">
                <input type="checkbox" id="subscribe" value="subscribe" />
                <label for="subscribe"
                  >Я согласен с <span>пользовательскими условиями</span></label
                ><br />
              </div>
            </div>
            <div class="mt-[10px] end-regist">
              <h1>Зарегистрироваться</h1>
            </div>
          </a-modal>
        </div>
      </div>
      <!-----  ant design ---->
    
      <div class="gridcolumn">
        <div class="btn-2">
          <button @click="activateText = 1" class="bt active">Участие</button>
      <button @click="activateText = 2" class="bt ">
        Стать партнером
      </button>
        </div>
        <div class="CardContainer" v-if="activateText === 1">
          <div class="stoimost pt-[5px] pb-[5px]">Cтоимость</div>
          <div class="numtext mt-[10px]">
            <h1>$1 500</h1>
          </div>
          <div class="numtext1 text-lg mt-[8px] font-semibold">
            <p>За одного делегата</p>
          </div>
          <div class="numtext1">
            <a-button class="btnbutton" @click="open = true">
            Регистрация
          </a-button>
          </div>
          
        </div>
        <div v-if="activateText === 2">
          <div class="text-h1">
            <h1>
              Оставьте заявку на онлайн-участие и наши представители свяжутся с
              вами для подробной информации
            </h1>
            <h2>
              Выбор одного из спонсорских пакетов — это наилучший способ
              продемонстрировать лидирующее положение на рынке, расширить сеть
              деловых контактов, привлечь эффективных партнеров.
            </h2>
          </div>
          <div class="inputform">
            <form>
              <input type="text" :placeholder="name" />
              <input type="text" :placeholder="pochta" />
              <input type="number" :placeholder="number" />
              <input type="text" :placeholder="company" />
              <input type="text" :placeholder="rank" />
            </form>
          </div>
          <button class="btn-new">Отправить</button>
        </div>
      </div>

      <!-- <a-tabs default-active-key="1" @change="callback">
        <a-tab-pane @click="changeStyle" key="1" tab="Участие">
        
        </a-tab-pane>
        <a-tab-pane key="2" tab="Стать партнером" force-render>
         
        </a-tab-pane>
      </a-tabs> -->
    </div>
  </section>
</template>

<script>
import { Button, Modal } from "ant-design-vue";
export default {
  components: {
    "a-button": Button,
    "a-modal": Modal,
  },
  data() {
    return {
      name: "Имя и фамилия",
      number: "Номер телефона",
      rank: "Должность",
      pochta: "Почта",
      company: "Компания",
      open: false,
      activateText: 1,
    };
  },
};
</script>

<style scoped>
.Condition {
 display:flex;

}
.end-regist {
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 15px;
  width: 650px;
  height: 60px;
  background: #06b48b;
  border-radius: 4px;
}
.end-regist h1 {
  font-weight: 600;
  font-size: 20px;
  
  text-align: center;
  color: #ffffff;
}
.InputDiv input {
  width: 650px;
}
.checkbox {
  display: flex;
  align-items: center;
}
.checkbox label {
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 150%;
  color: #465863;
}
.checkbox input {
  width: 12.5px;
  height: 12.5px;
  margin-right: 11px;
}
span {
  color: #06b48b;
}
.btnbutton {
  transition: 0.4s ease-out;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-radius: 4px;
  padding: 2px 16px;
  font-weight: 600;
  font-size: 14px;
  color: #06b48b;
}
.bt{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 50px;
  border: 1px solid #06b48b;
  border-radius: 4px;
  color: #06b48b;
}
.btn-2{
  display: flex;
  gap: 20px;
}

.text-h1 h1 {
 
  font-weight: 700;
  font-size: 23px;
  line-height: 140%;
  color: #1c2f3f;
}
form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}
input {
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  color: #465863;
  padding: 10px 15px 15px;
  width: 410px;
  height: 50px;
  background: #ffffff;
  border: 1.5px solid #c5d4e0;
  border-radius: 4px;
}
input:hover {
  transition: border 0.5s ease-out;
  border: 1px solid rgba(6, 180, 139, 1);
}
.numtext {
  display: flex;
  justify-content: center;
  align-items: center;
}
.numtext h1 {
  font-weight: 900px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 35px;
  color: #ffff;
}
.numtext1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.numtext1 p {
  font-size: 15px;
  color: #ffff;
}

.stoimost {
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  text-align: center;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-content: center;
  background: #0ac398;
}

.text-h1 h2 {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-top: 12px;
  margin-bottom: 25px;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 150%;
  color: #1c2f3f;
  opacity: 0.8;
}
.cond h1 {
  width: 250px;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 140%;
  color: #1c2f3f;
}
.CardContainer {
  width: 400px;
  height: 200px;
  background: #ffffff;
  border: 2px solid #06b48b;
  border-radius: 4px;
  background: #06b48b;
}
.InputDiv {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.btn-new {
  margin-top: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 2px 16px;

  font-weight: 600;
  font-size: 20px;

  color: #fff;
  background: #06b48b;
}

@media (max-width: 1400px) {
  .contain {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 24px /* 32px */;
  padding-left: 24px /* 32px */;
}

  .bt{
  margin-bottom: 40px;
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

}
@media (max-width: 1200px) {
 
}
@media (max-width: 992px) {
  .contain {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 24px /* 32px */;
  padding-left: 24px /* 32px */;
}
 .Condition{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
 }
}
@media (max-width: 768px) {
  .cond {
    margin-right: 30px;
  }
  form {
    display: flex;
    flex-wrap: wrap;
  }
}
@media (max-width: 480px) {
  .CardContainer{
    width: 370px;
  }
  .btn-2{
    margin-top: 15px;
  }
  .btn-2 button{
  width: 140px;
  height: 40px;
  }
 
  form {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 15px;
  }
  input {
    width: 100%;
  }
}
</style>