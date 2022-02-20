<template>
  <div>
    <section id="header" class="header">
      <div class="navbars">
        <img src="~/assets/img/logo/ba3-white.png" alt="Logo Bagas" />
        <div class="nav-menu">
          <div class="toole-switch">
            <ToggleDarkMode />
            <!-- <input id="toggle" type="checkbox" class="toggle--checkbox" />
            <label for="toggle" class="toggle--label">
              <span class="toggle--label-background"></span>
            </label>
            <div class="background"></div> -->
          </div>
          <div class="menu">
            <p>Menu</p>
            <ul>
              <li v-scroll-to="'#about'">About</li>
              <li v-scroll-to="{ el: '#project', duration: 1000 }">
                Portfolio
              </li>
              <li v-scroll-to="'#blog'">Blog</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="hero-header">
        <div class="row">
          <div class="col-md-6">
            <div class="detail-hello">
              <h2>Hello</h2>
              <span class="cicrle-header"></span>
            </div>
            <h2>I'm Bagas Afrizal</h2>
            <div class="detail-header">
              <hr class="lines-header" />
              <span class="typed-text">{{ typeValue }}</span>
              <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
            </div>
          </div>
          <div class="col-md-6">
            <AnimationHeaders />
          </div>
        </div>
      </div>
      <div v-scroll-to="'#about'" class="scroll-down">
        <b-icon
          icon="b-icon-arrow-down"
          animation="cylon-vertical"
          font-scale="2"
        ></b-icon>
      </div>
    </section>
    <section id="about" class="about">
      <h6>About</h6>
      <hr class="lines-about" />
      <div class="row mt-4">
        <div class="col-md-3">
          <div class="img-profile">
            <img src="@/assets/img/pp_ig_hd.png" alt="" srcset="" />
          </div>
        </div>
        <div class="col-md-9">
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
          <div class="title-two">
            <p>
              {{ $t('label_about_main') }}
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="content">
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
      <h6>Some Things I've Built</h6>
      <hr class="lines-project" />
      <div class="list-project">
        <div class="row">
          <div class="col-md-4">
            <div class="card-project">
              <div class="detail-project">
                <div class="img-project">
                  <fa :icon="['far', 'building']" class="building" />
                  <b-icon icon="box-arrow-up-right" font-scale="1"></b-icon>
                </div>
                <div class="description-project">
                  <h6>Jualrumahpluit.com</h6>
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
                  <b-icon icon="box-arrow-up-right" font-scale="1"></b-icon>
                </div>
                <div class="description-project">
                  <h6>RS PGI Cikini Drive Thru</h6>
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
                  <b-icon icon="box-arrow-up-right" font-scale="1"></b-icon>
                </div>
                <div class="description-project">
                  <h6>Marvel Food</h6>
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
        <div class="row">
          <div class="col-md-4">
            <div class="card-project">
              <div class="detail-project">
                <div class="img-project">
                  <fa :icon="['fas', 'business-time']" class="building" />
                  <b-icon icon="box-arrow-up-right" font-scale="1"></b-icon>
                </div>
                <div class="description-project">
                  <h6>Marvel Food</h6>
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
          <div class="col-md-4">
            <div class="card-project">
              <div class="detail-project">
                <div class="img-project">
                  <fa :icon="['fas', 'store']" class="building" />
                  <b-icon icon="box-arrow-up-right" font-scale="1"></b-icon>
                </div>
                <div class="description-project">
                  <h6>Space Point of Sale</h6>
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
                  <b-icon icon="box-arrow-up-right" font-scale="1"></b-icon>
                </div>
                <div class="description-project">
                  <h6>Portal Job - BADAG</h6>
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
      <div class="see-more text-right">
        <nuxt-link to="/projects">
          <span> See More... </span>
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import AnimationHeaders from '~/components/AnimationHeaders'
import ToggleDarkMode from '~/components/ToggleDarkMode'
export default {
  components: {
    AnimationHeaders,
    ToggleDarkMode
  },
  data() {
    return {
      typeValue: '',
      typeStatus: false,
      typeArray: ['Frontend Engineers', 'Tech Enthusiasts', 'Indonesian Youth'],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,
      posts: []
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
    }
  }
}
</script>
