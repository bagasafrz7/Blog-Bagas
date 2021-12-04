<template>
  <div class="main-content">
    <b-container fluid>
      <b-row>
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
          <h1>
            {{ $t('label_hi') }} <br />
            {{ $t('label_im') }} <span>Bagas Afrizal </span>
          </h1>
          <p>{{ $t('label_title_home') }}</p>
        </b-col>
      </b-row>
    </b-container>
    <!-- <section class="section-two">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="title-two">
              <p>
                Loser says "It Can't Be Done", Winner says "It's Hard, But We
                Can Try"
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="content">
              <p>
                Banyak orang yang bilang “Tidak Bisa” itu bermodalkan apa yang
                dia lihat pada hari ini. Dan jika semua orang mengambil
                keputusan berdasarkan apa yang di lihat hari ini, tidak akan ada
                yang namanya INOVASI. Padahal sebenarnya tidak ada yang tidak
                bisa, hanya saja belum tau caranya dan belum dicoba.
                <br />
                <br />
                Dulu ketika ada sebuah aplikasi toko online pertama kali
                mengudara di Indonesia, banyak sekali orang skeptis, belanja ya
                di Mall bukan di handphone. Lalu ketika dulu ada sebuah aplikasi
                transportasi online terbentuk, banyak orang yang meragukannya,
                mesen ojek aja harus pakai aplikasi. Tapi sekarang, hampir
                setiap aktivitas kita engga jauh dari yang namanya aplikasi
                tersebut, untuk berpergian tinggal buka handphone lalu
                transportasinya datang. Untuk belanja tidak perlu report-report
                keluar rumah, tinggal buka aplikasinya lalu beli dan lusa
                barangnya sudah sampai dirumah. Jadi tidak ada yang namanya
                tidak bisa, Bisa tapi membutuhkan waktu dan berani untuk
                mencobanya. Jika gagal, coba lagi. Gagal lagi, coba lagi. Gagal
                lagi, coba lagi dengan belajar dari kegagalan yang sebelumnya.
                Ingat, semua itu butuh waktu dan proses. Selama proses
                tersebutlah yang membuat kamu bisa banyak belajar hingga tujuan
                itu tercapai.
                <br />
                <br />
                Jika kamu ingin kerjasama dalam bentuk apapun, dari proyek
                pembuatan perangkat lunak, penulisan konten, atau hal yang
                lainnya. Silahkan hubungi saya melalui form inquiry dibawah ini
                atau bisa menguhubungi saya melalui linkedin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- <section class="section-three">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <p class="title">Konten Blog</p>
            <div class="see-all">
              <p>Lihat Selangkapnya</p>
            </div>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
// import PostPreview from '../components/Blog/postPreview'
export default {
  components: {
    // PostPreview
  },
  data() {
    return {
      particlesSnow: '',
      titlePage: ''
    }
  },
  mounted() {
    if (this.$i18n.locale === 'id') {
      this.titlePage = 'Halo, Aku Bagas Afrizal!'
    } else {
      this.titlePage = `Hi, I'm Bagas Afrizal!`
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
