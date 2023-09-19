<template>
  <div class="nav">
    <div class="container">
      <div class="NavLogo mt-[10px] mb-[10px]">
        <nuxt-link to="/"><img class="image" :src="image1" alt="" /></nuxt-link>
        <nuxt-link to="/">
          <h1 class="logoname">
            Second International Pharmaceutical<br />
            Forum of Uzbekistan
          </h1>
        </nuxt-link>
      </div>
      <div class="menu mt-[10px] mb-[10px]">
        <ul class="newli">
          <li>
            <nuxt-link to="/programma">{{ $t("ProgRamma") }}</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/members">{{ $t("Members") }}</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/media">{{ $t("Media") }}</nuxt-link>
          </li>
        </ul>
        <div class="nav-regist">
          <a-dropdown :trigger="['click']" v-for="AcceptLanguage in langs" :key="AcceptLanguage.title">
            <a-button class="Flex">
              <img :src="selected.image" :alt="selected.title" />
            </a-button>

            <a-menu slot="overlay">
              <a-menu-item v-for="(AcceptLanguage, index) in langs" :key="index">
                <nuxt-link class="Flexx" :to="switchLocalePath(AcceptLanguage.title)"
                  @click.native="chooseLang(AcceptLanguage.title)"><img :src="AcceptLanguage.image"
                    alt="header-lang-image" />
                </nuxt-link>
              </a-menu-item>
            </a-menu>
          </a-dropdown>

          <!-- <a-button >
           </a-button> -->
          <button @click="open = true" class="regis">
            {{ $t("Regist") }}
          </button>
          <a-modal :footer="null" title="Зарегистрироваться" centered :visible="open" @ok="open = false"
            @cancel="open = false" :width="700" :height="640">
            <div class="InputDiv">
              <input type="text" :placeholder="name" />
              <input type="text" :placeholder="pochta" />
              <input type="number" :placeholder="number" />
              <input type="text" :placeholder="company" />
              <input type="text" :placeholder="rank" />
              <div class="checkbox">
                <input type="checkbox" id="subscribe" value="subscribe" />
                <label for="subscribe">Я согласен с <span>пользовательскими условиями</span></label><br />
              </div>
            </div>
            <div class="mt-[10px] end-regist font-semibold">
              <h1>Зарегистрироваться</h1>
            </div>
          </a-modal>
        </div>
      </div>
    </div>

    <div class="res-menu" :class="{ 'open-res-menu': isMenuOpened }">
      <transition name="mobile-nav">
        <ul class="res-link">
          <div class="navbarlogo">
            <img class="image navimage" :src="image2" alt="" />
            <h1 class="logoname">
              Second International Pharmaceutical<br />
              Forum of Uzbekistan
            </h1>
          </div>
          <li v-for="menu in menuArray" :key="menu && menu.title">
            <nuxt-link :to="menu.link">
              {{ menu.title }}
            </nuxt-link>
          </li>
        </ul>
      </transition>
    </div>

    <!-- burger mmenu -->
    <div class="mobile-menu">
      <div class="nav-logo">
        <img class="image" :src="image1" alt="" />
        <h1 class="logoname">
          Second International Pharmaceutical<br />
          Forum of Uzbekistan
        </h1>
      </div>
      <div class="BurgerMenu">
        <button v-if="!isMenuOpened" @click="openMenu">
          <img :src="image3" alt="image" />
        </button>
        <button v-if="isMenuOpened" @click="openMenu">
          <img :src="image4" alt="image" />
        </button>
      </div>
    </div>
    <!-- ------------Navbar----------- -->
    <!-- header -->
  </div>
</template>
<script>
import { Modal } from "ant-design-vue";
import { Dropdown, Menu, Button, Icon } from "ant-design-vue";
import menu_array from "~/frag/menu.js";
export default {
  components: {
    "a-modal": Modal,
    "a-dropdown": Dropdown,
    "a-menu": Menu,
    "a-menu-item": Menu.Item,
    "a-button": Button,
    // 'a-icon': Icon,
  },
  i18n: {
    inject: true,
  },
  data() {
    return {
      allLangs: {
        ru: {
          title: "ru",
          image: require("~/assets/images/rusimage.png"),
        },
        en: {
          title: "en",
          image: require("~/assets/images/english.png"),
        },
      },
      langs: {},
      selected: {},
      menu_array,
      selectedOption: "Select an option",
      options: ["Option 1"],
      isMenuOpened: false,
      menuArray: [
        {
          title: "Программа",
          link: "/programma",
        },
        {
          title: "Участники",
          link: "/members",
        },

        {
          title: "Медиа",
          link: "/media",
        },
      ],
      name: "Имя и фамилия",
      number: "Номер телефона",
      rank: "Должность",
      pochta: "Почта",
      company: "Компания",
      open: false,
      image1: require("~/assets/images/Logo.png"),
      image2: require("~/assets/images/logofooter.png"),
      image3: require("~/assets/images/menu.png"),
      image4: require("~/assets/images/exit.png"),
    };
  },
  methods: {
    handleScroll() {
      this.scrollTop = window.scrollY;
    },
    checkScreenWidth() {
      const winWidth = window.innerWidth;

      if (winWidth <= 768) {
        this.isMenuOpened = true;
      } else {
        this.isMenuOpened = false;
      }
    },
    openMenu() {
      this.isMenuOpened = !this.isMenuOpened;
    },
    chooseLang(AcceptLanguage) {
      this.selected = this.allLangs[AcceptLanguage + ""];
      this.langs = { ...this.allLangs };
      delete this.langs[AcceptLanguage + ""];
    },
  },

  mounted() {
    // const winWidth = window.innerWidth;
    // window.addEventListener("scroll", () => {
    //   this.handleScroll();
    //   window.pageYOffset > 0
    //     ? (this.is_navbar_active = true)
    //     : (this.is_navbar_active = false);
    //   if (winWidth < 800 && this.is_navbar_active == true) {
    //     this.isMenuOpened = false;
    //   }
    // }),
    this.checkScreenWidth();

    this.selected = this.allLangs[this.$i18n.locale];
    this.langs = { ...this.allLangs };
    delete this.langs[this.$i18n.locale];
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/layouts/header.scss";
</style>