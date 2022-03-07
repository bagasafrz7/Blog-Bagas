<template>
  <div>
    <section id="header" class="header">
      <div class="navbars">
        <div v-if="$colorMode.preference === 'light'">
          <img src="~/assets/img/logo/ba3-black.png" alt="Logo Bagas" />
        </div>
        <div v-else>
          <img src="~/assets/img/logo/ba3-white.png" alt="Logo Bagas" />
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
          <div class="menu">
            <p>Menu</p>
            <ul>
              <li
                v-scroll-to="{
                  el: '#about',
                  duration: 500,
                  offset: -50,
                  easing: 'linear'
                }"
              >
                <span>{{ $t('link_about') }}</span>
              </li>
              <li
                v-scroll-to="{
                  el: '#project',
                  duration: 500,
                  offset: -50,
                  easing: 'linear'
                }"
              >
                <span>{{ $t('link_project') }}</span>
              </li>
              <li
                v-scroll-to="{
                  el: '#blog',
                  duration: 500,
                  offset: -50,
                  easing: 'linear'
                }"
              >
                <span>{{ $t('link_blog') }}</span>
              </li>
              <li
                v-scroll-to="{
                  el: '#contact',
                  duration: 500,
                  easing: 'linear'
                }"
              >
                <span>{{ $t('link_contact') }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="hero-header">
        <div class="row">
          <div class="col-md-6">
            <div data-aos="fade-down" data-aos-duration="1000">
              <div class="detail-hello">
                <h2>{{ $t('label_hi') }}</h2>
                <span class="cicrle-header"></span>
              </div>
              <h2>{{ $t('label_im') }} Bagas Afrizal</h2>
              <div class="detail-header">
                <hr class="lines-header" />
                <span class="typed-text">{{ typeValue }}</span>
                <span class="cursor" :class="{ typing: typeStatus }"
                  >&nbsp;</span
                >
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <AnimationHeaders
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </div>
      <div
        v-scroll-to="{
          el: '#about',
          duration: 500,
          offset: -50,
          easing: 'linear'
        }"
        class="scroll-down"
      >
        <b-icon
          icon="b-icon-arrow-down"
          animation="cylon-vertical"
          font-scale="2"
        ></b-icon>
      </div>
    </section>
    <section id="about" class="about">
      <h6>{{ $t('title_about') }}</h6>
      <hr class="lines-about" />
      <div class="row mt-4">
        <div class="col-md-3" data-aos="fade-up">
          <div class="img-profile">
            <img src="@/assets/img/pp_ig_hd.png" alt="" srcset="" />
          </div>
        </div>
        <div class="col-md-9" data-aos="fade-up">
          <p class="about-text">
            {{ $t('label_about1') }}
            <br />
            <br />
            {{ $t('label_about2') }}
          </p>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-md-6">
          <div class="title-two" data-aos="fade-up">
            <p>
              {{ $t('label_about_main') }}
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="content" data-aos="fade-up">
            <p>
              {{ $t('label_about3') }}
              <br />
              <br />
              {{ $t('label_about4') }}
              <br />
              <br />
              {{ $t('label_about5') }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="project" class="project">
      <h6>{{ $t('title_project') }}</h6>
      <hr class="lines-project" />
      <div class="list-project">
        <div class="row" data-aos="fade-up" data-aos-duration="1000">
          <div class="col-md-4">
            <div class="card-project">
              <div class="detail-project">
                <div class="img-project">
                  <fa :icon="['far', 'building']" class="building" />
                  <a href="https://jualrumahpluit.com/" target="_blank">
                    <b-icon
                      icon="box-arrow-up-right"
                      font-scale="1"
                      class="pointer"
                    ></b-icon>
                  </a>
                </div>
                <div class="description-project">
                  <a href="https://jualrumahpluit.com/" target="_blank">
                    <h6>Jualrumahpluit.com</h6>
                  </a>
                  <p>
                    {{ $t('deskripsi_jualrumah') }}
                  </p>
                  <div class="tools">
                    <fa :icon="['fab', 'html5']" class="html5 detail-tools" />
                    <fa
                      :icon="['fab', 'css3-alt']"
                      class="css3-alt detail-tools"
                    />
                    <fa :icon="['fab', 'react']" class="react detail-tools" />
                    <fa :icon="['fab', 'php']" class="php detail-tools" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card-project">
              <div class="detail-project">
                <div class="img-project">
                  <fa :icon="['far', 'hospital']" class="building" />
                  <a href="https://rscikinidrivethru.com/" target="_blank">
                    <b-icon icon="box-arrow-up-right" font-scale="1"></b-icon>
                  </a>
                </div>
                <div class="description-project">
                  <a href="https://rscikinidrivethru.com/" target="_blank">
                    <h6>RS PGI Cikini Drive Thru</h6>
                  </a>
                  <p>
                    {{ $t('deskripsi_cikini') }}
                  </p>
                  <div class="tools">
                    <fa :icon="['fab', 'vuejs']" class="vuejs detail-tools" />
                    <fa
                      :icon="['fab', 'bootstrap']"
                      class="bootstrap detail-tools"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card-project">
              <div class="detail-project">
                <div class="img-project">
                  <fa :icon="['fas', 'business-time']" class="building" />
                  <a href="https://marvelfood.co.id/" target="_blank">
                    <b-icon icon="box-arrow-up-right" font-scale="1"></b-icon>
                  </a>
                </div>
                <div class="description-project">
                  <a href="https://marvelfood.co.id/" target="_blank">
                    <h6>Marvel Food</h6>
                  </a>
                  <p>
                    {{ $t('deskripsi_marvel') }}
                  </p>
                  <div class="tools">
                    <img
                      src="@/assets/img/favicon.png"
                      alt=""
                      srcset=""
                      class="detail-tools"
                    />
                    <fa
                      :icon="['fab', 'js']"
                      class="js detail-tools detail-tools"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row" data-aos="fade-up" data-aos-duration="1000">
          <div class="col-md-4">
            <div class="card-project">
              <div class="detail-project">
                <div class="img-project">
                  <fa :icon="['fas', 'money-check-alt']" class="building" />
                  <a href="https://nepays.netlify.app/" target="_blank">
                    <b-icon icon="box-arrow-up-right" font-scale="1"></b-icon>
                  </a>
                </div>
                <div class="description-project">
                  <a href="https://nepays.netlify.app/" target="_blank">
                    <h6>Nepays</h6>
                  </a>
                  <p>
                    {{ $t('deskripsi_nepays') }}
                  </p>
                  <div class="tools">
                    <fa :icon="['fab', 'vuejs']" class="vuejs detail-tools" />
                    <fa :icon="['fab', 'js']" class="js detail-tools" />
                    <fa
                      :icon="['fab', 'node-js']"
                      class="node-js detail-tools"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card-project">
              <div class="detail-project">
                <div class="img-project">
                  <fa :icon="['fas', 'store']" class="building" />
                  <a href="https://pos-space.netlify.app/login" target="_blank">
                    <b-icon icon="box-arrow-up-right" font-scale="1"></b-icon>
                  </a>
                </div>
                <div class="description-project">
                  <a href="https://pos-space.netlify.app/login" target="_blank">
                    <h6>Space Point of Sale</h6>
                  </a>
                  <p>
                    {{ $t('deskripsi_pos') }}
                  </p>
                  <div class="tools">
                    <fa :icon="['fab', 'vuejs']" class="vuejs detail-tools" />
                    <fa :icon="['fab', 'js']" class="js detail-tools" />
                    <fa
                      :icon="['fab', 'node-js']"
                      class="node-js detail-tools"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card-project">
              <div class="detail-project">
                <div class="img-project">
                  <fa :icon="['fas', 'network-wired']" class="building" />
                  <a href="https://badag.netlify.app/" target="_blank">
                    <b-icon icon="box-arrow-up-right" font-scale="1"></b-icon>
                  </a>
                </div>
                <div class="description-project">
                  <a href="https://badag.netlify.app/" target="_blank">
                    <h6>Portal Job - BADAG</h6>
                  </a>
                  <p>
                    {{ $t('deskripsi_badag') }}
                  </p>
                  <div class="tools">
                    <fa :icon="['fab', 'vuejs']" class="vuejs detail-tools" />
                    <fa :icon="['fab', 'js']" class="js detail-tools" />
                    <fa
                      :icon="['fab', 'node-js']"
                      class="node-js detail-tools"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="see-more text-right">
        <nuxt-link to="/projects">
          <span> See More... </span>
        </nuxt-link>
      </div> -->
    </section>
  </div>
</template>

<script>
import AnimationHeaders from '~/components/AnimationHeaders'
// import ToggleDarkMode from '~/components/ToggleDarkMode'
import DropdownCountry from '~/components/DropdownCountry'
export default {
  components: {
    AnimationHeaders,
    DropdownCountry
    // ToggleDarkMode
  },
  data() {
    return {
      typeValue: '',
      typeStatus: false,
      typeArray: ['Frontend Engineers', 'Tech Enthusiasts', 'Pemuda Indonesia'],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,
      posts: [],
      darkMode: true
    }
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200)
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        )
        this.charIndex += 1
        setTimeout(this.typeText, this.typingSpeed)
      } else {
        this.typeStatus = false
        setTimeout(this.eraseText, this.newTextDelay)
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        )
        this.charIndex -= 1
        setTimeout(this.eraseText, this.erasingSpeed)
      } else {
        this.typeStatus = false
        this.typeArrayIndex += 1
        setTimeout(this.typeText, this.typingSpeed + 1000)
        if (this.typeArrayIndex === 2) {
          this.typeArrayIndex = 0
        }
      }
    },
    toggleSwitch() {
      this.$colorMode.preference =
        this.$colorMode.preference === 'light' ? 'dark' : 'light'
      // console.log(this.$colorMode.preference)
      this.darkMode = !this.darkMode
    }
  }
}
</script>
