<template>
  <div class="main-content" v-on="scroll">
    <b-container>
      <!-- <b-row>
        <b-col cols="12">
          <Particles
            id="tsparticles"
            :options="{
              background: {
                color: {}
              },
              fpsLimit: 100,
              interactivity: {
                detectsOn: 'canvas',
                events: {
                  onClick: {
                    enable: true,
                    mode: 'push'
                  },
                  onHover: {
                    enable: true,
                    mode: 'repulse'
                  },
                  resize: true
                },
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.4,
                    size: 40
                  },
                  push: {
                    quantity: 4
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.1
                  }
                }
              },
              particles: {
                color: {
                  value: 'rgb(104, 104, 104)'
                },
                collisions: {
                  enable: true
                },
                move: {
                  direction: 'none',
                  enable: true,
                  outMode: 'bounce',
                  random: false,
                  speed: 6,
                  straight: false
                },
                number: {
                  density: {
                    enable: true,
                    value_area: 800
                  },
                  value: 80
                },
                opacity: {
                  value: 0.2
                },
                shape: {
                  type: 'circle'
                },
                size: {
                  random: true,
                  value: 5
                }
              },
              detectRetina: true
            }"
          />
        </b-col>
        <b-col class="hero-img text-center" cols="12">
          <h1 data-aos="fade-down" data-aos-duration="1000">
            {{ $t('label_hi') }} <br />
            {{ $t('label_im') }} <span>Bagas Afrizal </span>
          </h1>
          <p data-aos="fade-up" data-aos-duration="1000">
            {{ $t('label_title_home') }}
          </p>
        </b-col>
      </b-row> -->
      <b-row>
        <b-col cols="12">
          <LandingSite />
        </b-col>
      </b-row>
      <section id="blog" class="blog">
        <div class="row">
          <div class="col-md-12">
            <h6>{{ $t('title_blog') }}</h6>
            <hr class="lines-blog" />
          </div>
          <ListBlog
            v-for="post in posts"
            :id="post.id"
            :key="post.id"
            :title="post.title"
            :excerpt="post.previewText"
            :thumbnail="post.thumbnailUrl"
            :publishedat="post.publishedAt"
            :content="post.content"
          />
          <div class="col-md-12">
            <div class="see-more text-right">
              <nuxt-link to="/blog">
                <span>{{ $t('label_viewmore') }}</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </section>
      <b-row>
        <b-col cols="12">
          <GetInTouch />
        </b-col>
      </b-row>
      <b-row>
        <div class="col-md-12">
          <footer>
            <p>
              {{ $t('text_footer')
              }}<span class="text-bold"> Bagas Afrizal</span>
            </p>
          </footer>
        </div>
      </b-row>
    </b-container>

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
import LandingSite from '~/components/LandingSite'
import ListBlog from '~/components/ListBlog'
import GetInTouch from '~/components/GetInTouch'
import aosMixin from '~/plugins/aos'
export default {
  components: {
    LandingSite,
    ListBlog,
    GetInTouch
  },
  mixins: [aosMixin],
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories', {
        version: context.isDev ? 'draft' : 'published',
        starts_with: 'blog/'
      })
      .then((res) => {
        return {
          posts: res.data.stories.map((bp) => {
            return {
              id: bp.slug,
              title: bp.content.title,
              previewText: bp.content.sumary,
              thumbnailUrl: bp.content.thumbnail,
              publishedAt: bp.published_at,
              content: bp.content.content
            }
          })
        }
      })
  },
  data() {
    return {
      particlesSnow: '',
      titlePage: '',
      scrolled: false,
      scrollTop: false
    }
  },
  mounted() {
    if (this.$i18n.locale === 'id') {
      this.titlePage = 'Halo, Aku Bagas Afrizal!'
    } else {
      this.titlePage = `Hi, I'm Bagas Afrizal!`
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

canvas.tsparticles-canvas-el {
  width: 100%;
  /* background: #121212; */
  pointer-events: initial;
}

/* .main-content {
  background: #121212;
} */

.hero-img {
  position: absolute;
  top: 25%;
}

.hero-img h1 {
  width: 50%;
  margin: 25px auto;
  font-size: 80px;
  color: var(--color);
  font-family: 'Poppins', sans-serif;
  /* font-family: 'futura'; */
}

.hero-img h1 span {
  font-weight: bold;
  color: #f7b633;
  font-family: 'Poppins', sans-serif;
}

.hero-img p {
  width: 50%;
  margin: 25px auto 0;
  color: var(--sub-color);
  font-size: 20px;
  font-weight: 100 !important;
  font-family: 'Poppins', sans-serif;
}

/* About */
.about-me h2,
h4,
p {
  color: #000;
}

.about-image img {
  width: 75%;
}
/* About */
/* Section 2 */
p.about-text {
  color: #777777;
  margin: 25px 0;
  font-family: 'Poppins', sans-serif;
}

.title-two p {
  font-weight: 600;
  font-size: 80px;
  line-height: 85px;
  letter-spacing: -1px;
  padding-right: 0px;
  margin-bottom: 50px;
  color: var(--color);
  font-family: 'Poppins', sans-serif;
}

.content {
  color: #777777;
  font-family: 'Poppins', sans-serif;
}

/* Section 2 */

@media screen and (min-width: 768px) {
  #tsparticles {
    width: 100%;
    height: 650px;
  }
  .hero-img h1 {
    width: 100%;
    font-size: 64px;
  }
}

@media screen and (max-width: 576px) {
  #tsparticles {
    width: 100%;
    height: 500px;
  }
  .hero-img h1 {
    width: 100%;
    font-size: 32px;
  }
  .hero-img p {
    font-size: 16px;
    width: 100%;
  }
}
</style>
