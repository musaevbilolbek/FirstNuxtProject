<template>
  <div>
    <div class="programma">
      <h1 class="container prog">Программа</h1>
    </div>
    <div class="container mainpage">
      <div class="btn mt-8">
        <button @click="activateText = 1" class="but mb-[30px]">
          <span>ДЕНЬ 1</span><br />
          <small>05 ИЮНЯ 2023</small>
        </button>
        <button @click="activateText = 2" class="but mb-[30px]">
          <span> ДЕНЬ 2</span><br />
          <small>06 ИЮНЯ 2023</small>
        </button>
      </div>
      <div v-if="activateText === 1">
        <h5>Основной зал</h5>
        <div class="p-tag mb-[15px]">
          <div class="greennum">
            <h6 class=" ">9.30 – 11.00</h6>
          </div>
          <div>
            <p>
              Торжественное открытие форума:<br />
              <span
                >Кудратов Л.Ш., Министр инвестиций, промышленности и внешней
                торговли, ИНОЯТОВ А.Ш., Министр здравоохранения</span
              >
            </p>
          </div>
        </div>
        <div class="p-tag mb-[15px]">
          <div class="greennum">
            <h6 class=" ">9.30 – 11.00</h6>
          </div>
          <div>
            <p>
              Пленарное заседание<br />
              <span
                >Стратегия развития и адаптации фармацевтической отрасли нового
                Узбекистана к новой реальности.
              </span>
            </p>
          </div>
        </div>
        <div class="p-tag mb-[15px]">
          <div class="greennum">
            <h6 class=" ">9.30 – 11.00</h6>
          </div>
          <div>
            <p>
              <span> Панельная сессия 1</span><br />
              Система государственных закупок лекарственных препаратов и изделий
              медицинского назначения в Узбекистане: перспективы развития.
            </p>
          </div>
        </div>
        <div class="p-tag mb-[15px]">
          <div class="greennum mt-[15px">
            <h6 class="">9.30 – 11.00</h6>
          </div>
          <div>
            <p>
              <span>Панельная сессия 2</span> <br />
              Тенденции развития фармацевтического рынка Узбекистана: тренды и
              вызовы.
            </p>
          </div>
        </div>
        <div class="p-tag mb-[15px]">
          <div class="greennum">
            <h6 class="">9.30 – 11.00</h6>
          </div>
          <div>
            <p>
              <span>Панельная сессия 3</span> <br />
              Потенциал локального производства: инвестиции и контрактное
              производство.
            </p>
          </div>
        </div>
        <h5>Зал №2</h5>
        <div class="p-tag mb-[15px]">
          <div class="greennum">
            <h6 class=" ">9.30 – 11.00</h6>
          </div>
          <div>
            <p>
              Круглый стол 1<br />
              <span
                >Дискуссия по внедрению стандарта GMP, GVP, GDP в
                фармацевтическую отрасль РУз.
              </span>
            </p>
          </div>
        </div>
        <div class="p-tag mb-[15px]">
          <div class="greennum">
            <h6 class=" ">9.30 – 11.00</h6>
          </div>
          <div>
            <p>
              Круглый стол 2<br />
              <span
                >Цифровая маркировка: достигнутые успехи и открытые вопросы.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div v-if="activateText === 2">
        <h5>Основной зал</h5>
        <div class="p-tag mb-[15px]">
          <div class="greennum">
            <h6 class=" ">10.00 – 11.30</h6>
          </div>
          <div>
            <p>
              Панельная сессия 4<br />
              <span>
                Фармацевтический рынок стран СНГ 2022-2023: Точки роста и пути
                их достижения.</span
              >
            </p>
          </div>
        </div>
        <div class="p-tag mb-[15px]">
          <div class="greennum">
            <h6 class=" ">11.30 – 12.00</h6>
          </div>
          <div>
            <p>
              <span> Кофе брейк </span>
            </p>
          </div>
        </div>
        <div class="p-tag mb-[15px]">
          <div class="greennum">
            <h6 class=" ">12.00 – 13.30</h6>
          </div>
          <div>
            <p>
              <span>Панельная сессия 5 </span><br />
              Новые требования к регистрации лекарственных средств и ИМН в
              Узбекистане и сопредельных странах.
            </p>
          </div>
        </div>
        <div class="p-tag mb-[15px]">
          <div class="greennum mt-[15px">
            <h6 class="">13.30 – 14.30</h6>
          </div>
          <div>
            <p>
              <span>Обед в ресторане </span>
            </p>
          </div>
        </div>
        <div class="p-tag mb-[15px]">
          <div class="greennum">
            <h6 class="">14.30 – 16.00</h6>
          </div>
          <div>
            <p>
              <span>Панельная сессия 6 </span> <br />
              Стратегическая Дискуссия: Коммерческий потенциал и драйверы роста
              фармацевтического рынка Узбекистана.
            </p>
          </div>
        </div>
        <div class="p-tag mb-[15px]">
          <div class="greennum">
            <h6 class=" ">16.00 - 16.30</h6>
          </div>
          <div>
            <p>
              <span> Кофе брейк </span>
            </p>
          </div>
        </div>
        <h5>Зал Амударья</h5>
        <div class="p-tag mb-[15px]">
          <div class="greennum">
            <h6 class=" ">14.30 – 16.00</h6>
          </div>
          <div>
            <p>
              Сателитный симпозиум при поддержке компании Roche
              <br />
              <span
                >Роль лабораторной диагностики в системе здравоохранения.
              </span>
            </p>
          </div>
        </div>
        <div class="p-tag mb-[15px]">
          <div class="greennum">
            <h6 class=" ">16.30 – 18.00</h6>
          </div>
          <div>
            <p>
              Круглый стол 3<br />
              <span
                >Подготовка кадров в области обеспечения качества и безопасности
                лекарственных препаратов.
              </span>
            </p>
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
      activateText: 1,
    };
  },
};
</script>

<style scoped>
.prog {
  padding: 54px;
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 140%;
 
}

.programma {
  height: 187px;
  left: 0px;
  top: 108px;
  background: #078b6c;
}
h1 {
  margin-top: 30px;
  color:#fff;
}
.btn {
  display: flex;
  gap: 20px;
}
.but {
  border: 1px solid;
  border-color: rgba(6, 180, 139, 1);
  padding: 5px 30px;
  color: rgba(6, 180, 139, 1);
}
.but:hover {
  background: #c9ece4;
}


.p-tag {
  display: flex;
  gap: 20px;
  align-items: center;
  background-color: rgba(242, 248, 246, 1);
  padding: 5px 10px;
}
.p-tag p span {
  color: gray;
  font-size: 12px;
  font-weight: 500;
   font-family:Verdana, Geneva, Tahoma, sans-serif;
}


.greennum {
 border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 20px;
  background-color: rgba(7, 167, 129, 1) ;
}
.greennum h6{
  color: #fff;
}


h5 {
  font-weight: 500;
  color: #000;
  font-size: 18px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin-bottom: 15px;
}

.p-tag p {
  font-size: 13px;
  color: #078b6c;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.mainpage{
  padding-bottom: 30px;
}
</style>