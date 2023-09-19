<template>
  <!-- Forum program -->
  <section class="ForumProg">
    <div class="contain MainProg">
      <div class="progtitle">
        <h1>Программа форума</h1>
        <div>
          <a-button class="btn2" @click="open = true">Задайте вопрос </a-button>
          <a-modal
            :footer="null"
            title="Оставить сообщение"
            centered
            :visible="open"
            @ok="open = false"
            @cancel="open = false"
            :width="700"
            :height="640"
          >
            <div class="InputDiv">
              <input type="text" class="p-2 text-xl" :placeholder="name" />
              <input type="text" class="p-2 text-xl" :placeholder="pochta" />
              <input type="number" class="p-2 text-xl" :placeholder="number" />
              <input type="text" class="p-2 text-xl" :placeholder="company" />
              <!-- <input type="text" :placeholder="rank" /> -->
              <select class="selectoption" v-model="selectedOption">
                <option v-for="option in options" :key="option.value">
                  {{ option.label }}
                </option>
              </select>
              <a-textarea
                v-model="value"
                class="p-2 text-xl"
                :placeholder="question"
                :rows="4"
              />
            </div>
            <div class="mt-[10px] end-regist">
              <button>Отправить</button>
            </div>
          </a-modal>
        </div>
      </div>
      <!-- --- -->
      <div class="collapse-2">
        <div data-aos="fade-down" data-aos-duration="1000">
          <a-collapse accordion expand-icon-position="left">
            <a-collapse-panel
              type="setting"
              key="1"
              class="data"
              header="ДЕНЪ 1"
            >
              <p class="line mb-[20px]"></p>
              <h5>Основной зал</h5>
              <div class="p-tag mb-[15px]">
                <div class="mt-[15px] w-[110px]">
                  <p class="text-[10px] mr-[10px]">9.30–11.00</p>
                </div>
                <div>
                  <p>
                    Торжественное открытие форума:<br />
                    <span class="spann"
                      >Кудратов Л.Ш., Министр инвестиций, промышленности и
                      внешней торговли, ИНОЯТОВ А.Ш., Министр
                      здравоохранения</span
                    >
                  </p>
                </div>
              </div>
              <div class="p-tag mb-[15px]">
                <div class="mt-[15px] w-[100px]">
                  <p class="text-[10px] mr-[13px]">9.30–11.00</p>
                </div>
                <div>
                  <p>
                    Пленарное заседание<br />
                    <span class="spann"
                      >Стратегия развития и адаптации фармацевтической отрасли
                      нового Узбекистана к новой реальности.
                    </span>
                  </p>
                </div>
              </div>
              <div class="p-tag mb-[15px]">
                <div class="mt-[15px] w-[130px]">
                  <p class="text-[10px] mr-[10px]">9.30–11.00</p>
                </div>
                <div>
                  <p>
                    <span class="spann"> Панельная сессия 1</span><br />
                    Система государственных закупок лекарственных препаратов и
                    изделий медицинского назначения в Узбекистане: перспективы
                    развития.
                  </p>
                </div>
              </div>
              <div class="p-tag mb-[15px]">
                <div class="mt-[15px] w-[100px]">
                  <p class="text-[10px] mr-[6px]">9.30–11.00</p>
                </div>
                <div>
                  <p>
                    <span class="spann">Панельная сессия 2</span> <br />
                    Тенденции развития фармацевтического рынка Узбекистана:
                    тренды и вызовы.
                  </p>
                </div>
              </div>
              <div class="p-tag mb-[15px]">
                <div class="mt-[15px] w-[100px]">
                  <p class="text-[10px] mr-[6px]">9.30–11.00</p>
                </div>
                <div>
                  <p>
                    <span class="spann">Панельная сессия 3</span> <br />
                    Потенциал локального производства: инвестиции и контрактное
                    производство.
                  </p>
                </div>
              </div>
              <h5>Зал №2</h5>
              <div class="p-tag mb-[15px]">
                <div class="mt-[15px] w-[110px]">
                  <p class="text-[10px] mr-[10px]">9.30–11.00</p>
                </div>
                <div>
                  <p>
                    Круглый стол 1<br />
                    <span class="spann"
                      >Дискуссия по внедрению стандарта GMP, GVP, GDP в
                      фармацевтическую отрасль РУз.
                    </span>
                  </p>
                </div>
              </div>
              <div class="p-tag mb-[15px]">
                <div class="mt-[15px] w-[110px]">
                  <p class="text-[10px] mr-[10px]">9.30–11.00</p>
                </div>
                <div>
                  <p>
                    Круглый стол 2<br />
                    <span class="spann"
                      >Цифровая маркировка: достигнутые успехи и открытые
                      вопросы.
                    </span>
                  </p>
                </div>
              </div>
              <img
                class="w-[16px] h-[16px]"
                slot="extra"
                src="../../assets/svg/plus.png"
                alt=""
              />
              <!-- -------- -->
            </a-collapse-panel>
          </a-collapse>
        </div>
        <div class="collapse-1" data-aos="fade-down" data-aos-duration="1500">
          <a-collapse accordion expand-icon-position="left">
            <a-collapse-panel
              type="setting"
              key="1"
              class="data"
              header="ДЕНЪ 2"
            >
              <p class="line mb-[20px]"></p>
              <h5>Основной зал</h5>
              <div class="p-tag mb-[15px]">
                <div class="mt-[15px] w-[110px]">
                  <p class="text-[10px] mr-[10px]">10.00–11.30</p>
                </div>
                <div>
                  <p>
                    Панельная сессия 4<br />
                    <span class="spann"
                      >Фармацевтический рынок стран СНГ 2022-2023: Точки роста и
                      пути их достижения.
                    </span>
                  </p>
                </div>
              </div>
              <div class="p-tag mb-[15px]">
                <div class="w-[110px]">
                  <p class="text-[10px] mr-[13px]">11.30–12.00</p>
                </div>
                <div>
                  <p>
                    <span class="spann"> Кофе брейк</span>
                  </p>
                </div>
              </div>
              <div class="p-tag mb-[15px]">
                <div class="mt-[15px] w-[110px]">
                  <p class="text-[10px] mr-[10px]">12.00–13.30</p>
                </div>
                <div>
                  <p>
                    <span class="spann">Панельная сессия 5</span><br />
                    Новые требования к регистрации лекарственных средств и ИМН в
                    Узбекистане и сопредельных странах.
                  </p>
                </div>
              </div>
              <div class="p-tag mb-[15px]">
                <div class="w-[110px]">
                  <p class="text-[10px] mr-[6px]">13.30–14.30</p>
                </div>
                <div>
                  <p><span class="spann"> Обед в ресторане </span></p>
                </div>
              </div>
              <div class="p-tag mb-[15px]">
                <div class="mt-[15px] w-[112px]">
                  <p class="text-[10px] mr-[6px]">14.30–16.00</p>
                </div>
                <div>
                  <p>
                    <span class="spann">Панельная сессия 6</span><br />
                    Стратегическая Дискуссия: Коммерческий потенциал и драйверы
                    роста фармацевтического рынка Узбекистана.
                  </p>
                </div>
              </div>
              <div class="p-tag mb-[15px]">
                <div class="w-[110px]">
                  <p class="text-[10px] mr-[13px]">16.00–16.00</p>
                </div>
                <div>
                  <p>
                    <span class="spann"> Кофе брейк</span>
                  </p>
                </div>
              </div>

              <h5>Зал Амударья</h5>
              <div class="p-tag mb-[15px]">
                <div class="mt-[15px] w-[110px]">
                  <p class="text-[10px] mr-[10px]">14.30–16.00</p>
                </div>
                <div>
                  <p>
                    Сателитный симпозиум при поддержке компании Roche Роль
                    лабораторной диагностики в системе здравоохранения.
                  </p>
                </div>
              </div>
              <div class="p-tag mb-[15px]">
                <div class="mt-[15px] w-[110px]">
                  <p class="text-[10px] mr-[10px]">16.30–18.00</p>
                </div>
                <div>
                  <p>
                    <span class="spann">Круглый стол 3</span><br />
                    Подготовка кадров в области обеспечения качества и
                    безопасности лекарственных препаратов.
                  </p>
                </div>
              </div>
              <img
                class="w-[16px] h-[16px]"
                slot="extra"
                src="../../assets/svg/plus.png"
                alt=""
              />
            </a-collapse-panel>
          </a-collapse>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Button, Modal } from "ant-design-vue";
import { ref } from "vue";
export default {
  components: {
    "a-button": Button,
    "a-modal": Modal,
  },
  setup() {
    const value = ref("");
    return {
      value,
    };
  },
  data() {
    return {
      isOpen: false,
      open: false,
      name: "Имя и фамилия",
      number: "Номер телефона",
      rank: "Должность",
      pochta: "Электронный адрес",
      company: "Компания",
      question: "Вопрос",
      options: [
        // { value:"asdas", label: 'Бизнес-кофе' },
        // {  label: 'Кофе брейк' },
        // {  label: 'Обед' },
        // {  label: 'Кофе брейк' },
        // {  label: 'Панельная сессия 1' },
        // {  label: 'Панельная сессия 2' },
        // {  label: 'Панельная сессия 3' },
        // {  label: 'Панельная сессия 4' },
        // {  label: 'Панельная сессия 5' },
        { label: "Панельная сессия 6" },
        { label: "Панельная сессия 7" },
        { label: "Панельная сессия 8" },
      ],
      selectedOption: "jack",
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.isOpen = false;
    },
  },
};
</script>

<style scoped>
</style>