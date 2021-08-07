<template>
  <section id="about-page">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <!-- <b-skeleton-wrapper :loading="loading">
            <template #loading>
              <b-card>
                <b-skeleton-img no-aspect height="150px"></b-skeleton-img>
              </b-card>
            </template>
          </b-skeleton-wrapper> -->
          <div class="hero-about">
            <div class="row">
              <div class="col-md-3">
                <div class="img-profile">
                  <img src="@/assets/img/pp_ig_hd.png" alt="" srcset="" />
                </div>
              </div>
              <div class="col-md-9">
                <p class="about-text">
                  Seorang Pemuda Indonesia yang gemar dan sangat tertarik dengan
                  Dunia Teknologi. Saat ini bekerja sebagai Frontend Engineer di
                  salah satu perusahaan swasta di Jakarta. Dan sedang
                  mempelajari Backend agar kedepannya bisa menjadi Full Stack
                  Developer.
                  <br />
                  <br />
                  Saya suka menjelajahi dan mempelajari hal-hal seputar
                  teknologi, bukan hanya dalam hal coding saja, tapi setiap hal
                  yang berhubungan dengan Teknologi. Selain itu, saya juga
                  senang berpetualang, entah naik gunung dan menjelajahi
                  kota-kota dengan kawan atau bahkan sendiri. Dan ada satu hal
                  lagi yang sangat saya sukai, yaitu TULISAN. Saya amat menyukai
                  sebuah karya tulis, entah berbentuk buku atau puisi.
                </p>
              </div>
            </div>
          </div>
          <hr />
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
                  keputusan berdasarkan apa yang di lihat hari ini, tidak akan
                  ada yang namanya INOVASI. Padahal sebenarnya tidak ada yang
                  tidak bisa, hanya saja belum tau caranya dan belum dicoba.
                  <br />
                  <br />
                  Dulu ketika ada sebuah aplikasi toko online pertama kali
                  mengudara di Indonesia, banyak sekali orang skeptis, belanja
                  ya di Mall bukan di handphone. Lalu ketika dulu ada sebuah
                  aplikasi transportasi online terbentuk, banyak orang yang
                  meragukannya, mesen ojek aja harus pakai aplikasi. Tapi
                  sekarang, hampir setiap aktivitas kita engga jauh dari yang
                  namanya aplikasi tersebut, untuk berpergian tinggal buka
                  handphone lalu transportasinya datang. Untuk belanja tidak
                  perlu report-report keluar rumah, tinggal buka aplikasinya
                  lalu beli dan lusa barangnya sudah sampai dirumah. Jadi tidak
                  ada yang namanya tidak bisa, Bisa tapi membutuhkan waktu dan
                  berani untuk mencobanya. Jika gagal, coba lagi. Gagal lagi,
                  coba lagi. Gagal lagi, coba lagi dengan belajar dari kegagalan
                  yang sebelumnya. Ingat, semua itu butuh waktu dan proses.
                  Selama proses tersebutlah yang membuat kamu bisa banyak
                  belajar hingga tujuan itu tercapai.
                  <br />
                  <br />
                  Jika kamu ingin kerjasama dalam bentuk apapun, dari proyek
                  pembuatan perangkat lunak, penulisan konten, atau hal yang
                  lainnya. Silahkan hubungi saya melalui form inquiry dibawah
                  ini atau bisa menguhubungi saya melalui linkedin.
                </p>
              </div>
            </div>
          </div>
          <div class="social-media">
            <div class="row">
              <div class="col-md-4">
                <div class="title">
                  <p>My Social Media</p>
                </div>
                <div class="detail-sosmed">
                  <a
                    href="https://www.instagram.com/bagasafrizall/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <fa :icon="['fab', 'instagram']" class="instagram" />
                  </a>
                  <a
                    href="https://twitter.com/bagasss_i"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <fa :icon="['fab', 'twitter']" class="twitter" />
                  </a>
                  <a
                    href="https://github.com/bagasafrz7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <fa :icon="['fab', 'github']" class="github" />
                  </a>
                  <a
                    href="https://linkedin.com/in/bagas-afrizal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <fa :icon="['fab', 'linkedin']" class="linkedin" />
                  </a>
                </div>
              </div>
              <div class="col-md-8">
                <p class="contact-me">Contact Me</p>
                <div class="login-box">
                  <form>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="user-box">
                          <input type="text" name="" required />
                          <label>Name</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="user-box">
                          <input type="email" name="" required />
                          <label>Email</label>
                        </div>
                      </div>
                    </div>
                    <div class="user-box">
                      <input type="text" name="" required />
                      <label>Your Message</label>
                      <!-- <textarea name="" id="" cols="30" rows="5"></textarea> -->
                    </div>
                    <a type="submit" @click="submitData">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      Submit
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      loadingTime: 0,
      maxLoadingTime: 3
    }
  },
  watch: {
    loading(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.clearLoadingTimeInterval()

        if (newValue) {
          this.$_loadingTimeInterval = setInterval(() => {
            this.loadingTime++
          }, 1000)
        }
      }
    },
    loadingTime(newValue, oldValue) {
      if (newValue !== oldValue) {
        if (newValue === this.maxLoadingTime) {
          this.loading = false
        }
      }
    }
  },
  created() {
    this.$_loadingTimeInterval = null
  },
  mounted() {
    this.startLoading()
  },
  methods: {
    clearLoadingTimeInterval() {
      clearInterval(this.$_loadingTimeInterval)
      this.$_loadingTimeInterval = null
    },
    startLoading() {
      this.loading = true
      this.loadingTime = 0
    },
    submitData() {
      this.$swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Oops...',
        html: 'Fitur ini masih dalam tahap pengembangan. Tapi jangan khawatir, kamu bisa menghubungi saya di email bagasafrz16@gmail.com, atau dengan <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bagasafrz16@gmail.com&su=HalloBagas&body=Message" target="_blank">Klik Disini</a>'
      })
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

/* #about-page {
  background: #121212;
} */

.hero-about {
  margin: 50px 0 0 0;
}

.img-profile img {
  width: 100%;
}

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

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #121212;
  background-clip: border-box;
  /* height: 250px; */
  border: 1px solid #121212;
  border-radius: 0px;
  /* height: 500px; */
  margin-bottom: 350px;
}

.social-media .title p {
  color: var(--color);
  font-size: 32px;
  font-family: 'Poppins', sans-serif;
}

hr {
  background: #777777;
  margin: 50px 0;
}

.detail-sosmed .instagram,
.twitter,
.github,
.linkedin {
  color: var(--color);
  font-size: 32px;
  margin: 0 10px;
  transition: ease-in 0.5s;
}

.detail-sosmed .instagram:hover {
  color: #e4405f;
}
.detail-sosmed .twitter:hover {
  color: #1da1f2;
}
.detail-sosmed .github:hover {
  color: rgb(90, 90, 90);
}
.detail-sosmed .linkedin:hover {
  color: #0a66c2;
}

p.contact-me {
  color: var(--color);
  font-family: 'Poppins', sans-serif;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: var(--color);
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid var(--color);
  outline: none;
  background: transparent;
}

.login-box .user-box textarea {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: var(--color);
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid var(--color);
  outline: none;
  background: transparent;
}
.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: var(--color);
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box label.text-area {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: var(--color);
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #f7b633;
  font-size: 12px;
}

.login-box .user-box textarea:focus ~ label,
.login-box .user-box textarea:valid ~ label {
  top: -20px;
  left: 0;
  color: #f7b633;
  font-size: 12px;
}

.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #f7b633;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin: 10px 0;
  letter-spacing: 4px;
}

.login-box a:hover {
  background: #f7b633;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #f7b633, 0 0 25px #f7b633, 0 0 50px #f7b633,
    0 0 100px #f7b633;
}

.login-box a span {
  position: absolute;
  display: block;
}

.login-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #f7b633);
  animation: btn-anim1 2s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}

.login-box a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #f7b633);
  animation: btn-anim2 2s linear infinite;
  animation-delay: 0.25s;
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}

.login-box a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #f7b633);
  animation: btn-anim3 2s linear infinite;
  animation-delay: 0.5s;
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}

.login-box a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #f7b633);
  animation: btn-anim4 2s linear infinite;
  animation-delay: 0.75s;
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}

@media screen and (max-width: 768px) {
  .title-two p {
    font-size: 60px;
  }
}

@media screen and (max-width: 576px) {
  .img-profile {
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
  .img-profile img {
    width: 75%;
  }
  .title-two p {
    font-size: 48px;
  }
  .detail-sosmed {
    margin: 0 0 25px 0;
  }
}
</style>
