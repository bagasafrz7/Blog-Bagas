<template>
  <div>
    <section id="contact" class="contact">
      <h6>Get In Touch</h6>
      <hr class="lines-contact" />
      <div class="social-media">
        <div class="row">
          <div class="col-md-4">
            <div class="title">
              <p class="contact-me mb-2">{{ $t('label_social_media') }}</p>
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
                      <input v-model="formData.email" type="email" required />
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
                    class="btn btn-kirim btn-sm"
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
    </section>
  </div>
</template>

<script src="https://smtpjs.com/v3/smtp.js"></script>

<script>
export default {
  data() {
    return {
      loading: false,
      loadingTime: 0,
      maxLoadingTime: 3,
      showMenu: false,
      titlePage: '',
      formData: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  mounted() {
    if (this.$i18n.locale === 'id') {
      this.titlePage = 'Tentang Bagas Afrizal'
    } else {
      this.titlePage = 'About Bagas Afrizal'
    }
    this.startLoading()
  },
  head() {
    return {
      title: this.titlePage,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tentang Bagas Afrizal'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'Bagas Afrizal,Tentang Bagas Afrizal, Bagas, Afrizal, Frontend Developer, Pemuda Indonesia, bagasafrizal.com'
        }
      ]
    }
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
    closeModal() {
      this.showMenu = false
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
      // this.$toasted.success('Yeay, Data Berhasil Dikirim 🥳', {
      //   theme: 'bubble',
      //   position: 'top-center',
      //   duration: 5000,
      //   progressBar: true
      // })
      this.showMenu = true

      Email.send({
        Host: 'ftp.bagasafrizal.com',
        Username: 'bagp1952',
        Password: 'F4TWDFyEz4BN83',
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

/* .hero-about {
  margin: 50px 0 0 0;
} */

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
}

hr {
  background: #777777;
  margin: 50px 0;
}

.detail-sosmed {
  margin: 25px 0;
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
  /* border: 1px solid #F45027; */
  background: #f45027;
  width: 15%;
  color: #fff;
  /* color: #F45027; */
  padding: 10px 0;
  font-family: 'Poppins', sans-serif;
}

.button-send {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-family: 'Poppins', sans-serif;
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
  font-family: 'Poppins', sans-serif;
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
  font-family: 'Poppins', sans-serif;
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
  font-family: 'Poppins', sans-serif;
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
  font-family: 'Poppins', sans-serif;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #f45027;
  font-size: 12px;
}

.login-box .user-box textarea:focus ~ label,
.login-box .user-box textarea:valid ~ label {
  top: -20px;
  left: 0;
  color: #f45027;
  font-size: 12px;
}

.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #f45027;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin: 10px 0;
  letter-spacing: 4px;
}

.modal_container {
  /* background: #b4b4cbcc;
  padding: 150px;
  display: flex;
  justify-content: center;
  align-items: center; */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1060;
  display: block;
  width: 100%;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.875rem;
  word-wrap: break-word;
  background-color: #00000069;
  background-clip: padding-box;
  border: 1px solid #00000069;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  /* border-radius: 0.3rem; */
}
.modal_content {
  width: 380px;
  height: auto;
  background: #fff;
  text-align: center;
  padding: 3rem 2rem 2rem;
  border-radius: 1rem 1rem;
  transition: all 0.3s;
  /* transform: translateY(10%); */
  transform: translateY(200px);
  opacity: 0;
  animation: 0.5s slideUp ease forwards 0.5s;
  position: relative;
}
img.modal_img {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  margin-bottom: 0.75rem;
}
.modal_close {
  background-color: #000;
  border-radius: 0.25rem;
  color: #fff;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
  width: 5%;
  height: auto;
}
.modal_title {
  font-family: 'Poppins', sans-serif;
  color: hsl(240deg 8% 15%);
  font-weight: 500;
  font-size: 24px;
}
.modal_description {
  color: #525260;
  margin-bottom: 1.5rem;
  font-family: 'Poppins', sans-serif;
}
.modal_button-link {
  display: block;
  margin: 1rem auto 0;
  background-color: transparent;
  color: hsl(240deg 16% 18%);
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
}
.popover1 {
  box-shadow: 0px 6px 8px rgb(19 19 19 / 70%);
  /* position: fixed;
  top: 0;
  left: 0;
  z-index: 1060;
  display: block;
  max-width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.875rem;
  word-wrap: break-word;
  background-color: #191919;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem; */
}

.popover1:target {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1060;
  display: block;
  width: 100%;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.875rem;
  word-wrap: break-word;
  background-color: #00000069;
  background-clip: padding-box;
  border: 1px solid #00000069;
  border-radius: 0.3rem;
}

.popover1 .content {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: #00000069;
  -webkit-animation: 1s grow-data-v-81a679f4 ease forwards;
  animation: 1s grow-data-v-81a679f4 ease forwards;
  text-align: center;
  position: fixed;
  top: 0;
}

.nav_list {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav_list a {
  text-decoration: none;
  font-size: 32px;
  color: #fff;
}

.nav_list_item {
  height: 100%;
  overflow: hidden;
  /* transform: translateY(200px); */
  opacity: 0;
  animation: 0.5s slideUp ease forwards 0.5s;
  position: relative;
}

.nav_list li {
  padding: 15px 0;
  text-transform: uppercase;
  transform: translateY(200px);
  opacity: 0;
  animation: 2s slideUp ease forwards 0.5s;
  position: relative;
}

p.assets-succes {
  font-size: 72px;
}

@keyframes grow {
  100% {
    height: 100%;
    width: 100%;
  }
}

@keyframes fadeIn {
  100% {
    opacity: 1;
  }
}

@keyframes slideUp {
  100% {
    transform: translateY(0);
    opacity: 1;
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
    /* border: 1px solid #F45027; */
    background: #f45027;
    width: 25%;
    color: #fff;
    /* color: #F45027; */
    padding: 10px 0;
  }
  .modal_container {
    display: flex;
    justify-content: center;
    align-items: end;
    /* border-radius: 0.3rem; */
  }
  .nav_list_item {
    height: auto;
    overflow: hidden;
    transform: translateY(200px);
    opacity: 0;
    animation: 0.5s slideUp ease forwards 0.5s;
    position: absolute;
    bottom: 0;
  }
  .modal_content {
    width: 100%;
    height: auto;
    background: #fff;
    /* transform: translateY(10%); */
    transform: scale(1) translateY(0);
    position: relative;
    text-align: center;
    padding: 3rem 2rem 2rem;
    border-radius: 1rem 1rem 0 0;
    transition: all 0.3s;
    animation: 0.5s slideUp ease forwards 0.5s;
  }
  @keyframes grow {
    100% {
      height: 100%;
      width: 100%;
    }
  }

  @keyframes fadeIn {
    100% {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
}
</style>
