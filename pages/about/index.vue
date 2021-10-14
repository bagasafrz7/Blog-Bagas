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
                  {{ $t('label_about1') }}
                  <br />
                  <br />
                  {{ $t('label_about2') }}
                </p>
              </div>
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
          <div class="social-media">
            <div class="row">
              <div class="col-md-4">
                <div class="title">
                  <p>{{ $t('label_social_media') }}</p>
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
                <p class="contact-me mb-2">{{ $t('label_contactme') }}</p>
                <div class="login-box">
                  <form @submit.prevent="submitData">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="user-box">
                          <input v-model="formData.name" type="text" required />
                          <label>{{ $t('label_name') }}</label>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="user-box">
                          <input
                            v-model="formData.email"
                            type="email"
                            required
                          />
                          <label>{{ $t('label_email') }}</label>
                        </div>
                      </div>
                    </div>
                    <div class="user-box">
                      <input v-model="formData.message" type="text" required />
                      <label>{{ $t('label_message') }}</label>
                      <!-- <textarea name="" id="" cols="30" rows="5"></textarea> -->
                    </div>
                    <div class="button-send">
                      <!-- <button type="submit" class="btn btn-kirim">
                        {{ $t('btn_kirim') }}
                      </button> -->
                      <button
                        type="submit"
                        class="btn btn-kirim"
                        :disabled="
                          formData.name === '' ||
                          formData.email === '' ||
                          formData.message === ''
                        "
                      >
                        {{ $t('btn_kirim') }}
                      </button>
                    </div>
                    <!-- <a type="submit">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      Submit
                    </a> -->
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

<script src="https://smtpjs.com/v3/smtp.js"></script>

<script>
// import Email from '../../email.js'

export default {
  data() {
    return {
      loading: false,
      loadingTime: 0,
      maxLoadingTime: 3,
      formData: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  head() {
    return {
      title: 'Tentang Bagas Afrizal',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tentang Bagas Afrizal'
        }
      ]
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
      // this.$swal.fire({
      //   position: 'center',
      //   icon: 'error',
      //   title: 'Oops...',
      //   html: 'Fitur ini masih dalam tahap pengembangan. Tapi jangan khawatir, kamu bisa menghubungi saya di email bagasafrz16@gmail.com, atau dengan <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bagasafrz16@gmail.com&su=HalloBagas&body=Message" target="_blank">Klik Disini</a>'
      // })
      // this.$swal.fire({
      //   position: 'center',
      //   icon: 'success',
      //   title: 'Yeay, Data Berhasil Dikirim 🥳',
      //   html: 'Data yang kamu kirim akan segera dibalas, Terima Kasih'
      // })
      // this.$toast.success('Yeay, Data Berhasil Dikirim 🥳')
      this.$toasted.success('Yeay, Data Berhasil Dikirim 🥳', {
        theme: 'bubble',
        position: 'top-center',
        duration: 5000,
        progressBar: true
      })
      Email.send({
        Host: 'ftp.marvelfood.co.id',
        Username: 'k5008115',
        Password: 'fXx4Jv94t0',
        To: 'bagasafrz16@gmail.com',
        From: 'noreply@bagasafrizal.com',
        Subject: `New Inquiry`,
        Body: `<span style="font-family:arial,helvetica,sans-serif">Hi Bagas Afrizal,<br /><br />There is a New Question From :</span><blockquote><p><span style="font-family:arial,helvetica,sans-serif">Nama : ${this.formData.name}<br />Email : ${this.formData.email}<br />Message : ${this.formData.message}</span></p></blockquote><p><span style="font-family:arial,helvetica,sans-serif">Please follow up immediately for this question data&nbsp;</span></p><p><span style="font-family:arial,helvetica,sans-serif">Best Regards,<br /><br />Tim Bagas Afrizal</span></p><hr /><p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#A9A9A9"><span style="font-size:11px">Tangerang - Indonesia<br />Phone :&nbsp;<span style="background-color:rgb(255, 255, 255)">0895-0295-5429</span></span></span></span></p>`
      })
        .then((message) => (this.formData = ''))
        .catch(
          (error) =>
            this.$swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Data Gagal Dikirim'
            }),
          setTimeout(() => {
            this.formData = ''
          }, 1500)
        )
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

.btn-kirim {
  /* border: 1px solid #f7b633; */
  background: #f7b633;
  width: 15%;
  color: #fff;
  /* color: #f7b633; */
  padding: 10px 0;
}

.button-send {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.login-box {
  margin: 25px 0 50px 0;
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
  .toasted-container .toasted {
    top: 50px;
    width: 75%;
    clear: both;
    margin: 0 auto;
    margin-top: 10px;
    position: relative;
    max-width: 100%;
    height: auto;
    word-break: normal;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: center;
    box-sizing: inherit;
    /* border-radius: 25px; */
  }
  .toasted.bubble.success {
    background: #4caf50;
    border-radius: 25px;
  }
  .img-profile.bubble.success {
    background: #4caf50;
    width: 75%;
    margin: 0 auto;
    border-radius: 25px;
  }
  .btn-kirim {
    /* border: 1px solid #f7b633; */
    background: #f7b633;
    width: 25%;
    color: #fff;
    /* color: #f7b633; */
    padding: 10px 0;
  }
}
</style>
