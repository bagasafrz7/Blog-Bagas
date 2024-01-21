<template>
  <div class="main-content" v-on="scroll">
    <b-container>
      <b-row>
        <b-col cols="12">
          <section id="header" class="header-custom">
            <div class="navbars">
              <div v-if="$colorMode.preference === 'light'">
                <nuxt-link to="/">
                  <img src="~/assets/img/logo/ba3-black.png" alt="Logo Bagas" />
                </nuxt-link>
              </div>
              <div v-else>
                <nuxt-link to="/">
                  <img src="~/assets/img/logo/ba3-white.png" alt="Logo Bagas" />
                </nuxt-link>
              </div>
              <div class="nav-menu">
                <div class="toole-switch">
                  <!-- <ToggleDarkMode /> -->
                  <button v-if="!darkMode" @click="toggleSwitch">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="11.9998"
                        cy="11.9998"
                        r="5.75375"
                        fill="currentColor"
                      />
                      <g>
                        <circle
                          cx="3.08982"
                          cy="6.85502"
                          r="1.71143"
                          transform="rotate(-60 3.08982 6.85502)"
                          fill="currentColor"
                        />
                        <circle
                          cx="3.0903"
                          cy="17.1436"
                          r="1.71143"
                          transform="rotate(-120 3.0903 17.1436)"
                          fill="currentColor"
                        />
                        <circle
                          cx="12"
                          cy="22.2881"
                          r="1.71143"
                          fill="currentColor"
                        />
                        <circle
                          cx="20.9101"
                          cy="17.1436"
                          r="1.71143"
                          transform="rotate(-60 20.9101 17.1436)"
                          fill="currentColor"
                        />
                        <circle
                          cx="20.9101"
                          cy="6.8555"
                          r="1.71143"
                          transform="rotate(-120 20.9101 6.8555)"
                          fill="currentColor"
                        />
                        <circle
                          cx="12"
                          cy="1.71143"
                          r="1.71143"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </button>
                  <button v-else @click="toggleSwitch">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 50 50"
                    >
                      <path
                        d="M 43.81 29.354 C 43.688 28.958 43.413 28.626 43.046 28.432 C 42.679 28.238 42.251 28.198 41.854 28.321 C 36.161 29.886 30.067 28.272 25.894 24.096 C 21.722 19.92 20.113 13.824 21.683 8.133 C 21.848 7.582 21.697 6.985 21.29 6.578 C 20.884 6.172 20.287 6.022 19.736 6.187 C 10.659 8.728 4.691 17.389 5.55 26.776 C 6.408 36.163 13.847 43.598 23.235 44.451 C 32.622 45.304 41.28 39.332 43.816 30.253 C 43.902 29.96 43.9 29.647 43.81 29.354 Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <DropdownCountry />
                </div>
              </div>
            </div>
          </section>
        </b-col>
      </b-row>
    </b-container>
    <PortfolioComponent />

    <!-- Scroll Top -->
    <div
      v-if="scrollTop"
      v-scroll-to="{
        el: '#header',
        duration: 500,
        offset: -50,
        easing: 'linear'
      }"
      class="scroll-top"
    >
      <p>
        <span><b-icon icon="arrow-up"></b-icon></span>
        {{ $t('link_scrooltop') }}
      </p>
    </div>
    <!-- Scroll Top -->
  </div>
</template>

<script>
import aosMixin from '~/plugins/aos'
import PortfolioComponent from '~/components/Portfolio'

export default {
  components: {
    PortfolioComponent
  },
  mixins: [aosMixin],
  data() {
    return {}
  },
  mounted() {
    if (this.$i18n.locale === 'id') {
      this.titlePage = 'Portofolio Saya | Bagas Afrizal'
    } else {
      this.titlePage = `My Portfolio | Bagas Afrizal`
    }
  },
  beforeMount() {
    window.addEventListener('wheel', this.handleScroll)
  },

  beforeDestroy() {
    window.removeEventListener('wheel', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 400) {
        this.scrollTop = true
      } else {
        this.scrollTop = false
      }
      // console.log(window.scrollY)
    },
    toggleSwitch() {
      this.$colorMode.preference =
        this.$colorMode.preference === 'light' ? 'dark' : 'light'
      // console.log(this.$colorMode.preference)
      this.darkMode = !this.darkMode
    }
  },
  head() {
    return {
      title: this.titlePage,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Halo, Aku Bagas Afrizal! | Tech Enthusiasts, Frontend Engineers and Indonesian Youth'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'Bagas Afrizal,Tentang Bagas Afrizal, Bagas, Afrizal, Frontend Developer, Pemuda Indonesia, bagasafrizal.com'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

@font-face {
  font-family: 'futura';
  src: url('@/assets/font/futura/FuturaBold.ttf') format('ttf');
}
.content {
  color: #777777;
  font-family: 'Poppins', sans-serif;
}

.flex-portfolio {
  display: flex;
}
.description {
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.link-linkedin {
  color: #0a66c2;
  text-decoration: underline;
  font-size: 16px;
  font-weight: bold;
}
.link-now {
  color: var(--color-logo);
  text-decoration: underline;
  font-size: 16px;
  font-weight: bold;
}
</style>
