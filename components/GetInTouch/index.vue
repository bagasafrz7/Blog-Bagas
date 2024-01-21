<template>
  <div>
    <section id="contact" class="contact">
      <h6>{{ $t('title_getintouch') }}</h6>
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
                      formData.message === '' ||
                      loading
                    "
                  >
                    <span v-if="loading"> Loading... </span>
                    <span v-if="!loading">
                      {{ $t('btn_kirim') }}
                    </span>
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

      <!-- Modal2 -->
      <div v-if="showMenu" id="menu" class="popover1">
        <div class="content">
          <div class="nav">
            <ul class="nav_list">
              <div class="nav_list_item">
                <div class="modal_content">
                  <div class="modal_close" title="Close" @click="closeModal">
                    <p class="bx bx-x">x</p>
                  </div>
                  <!-- <img
                    src="@/assets/img/logo/ba3-black.png"
                    alt=""
                    srcset=""
                    class="modal_img"
                  /> -->
                  <p class="assets-succes">🥳</p>
                  <h1 class="modal_title">{{ $t('title_suscces') }}</h1>
                  <p class="modal_description">
                    {{ $t('description_succes') }}
                  </p>
                  <button class="modal_button-link" @click="closeModal">
                    {{ $t('label_close') }}
                  </button>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div v-if="showMenuFailed" id="menu" class="popover1">
        <div class="content">
          <div class="nav">
            <ul class="nav_list">
              <div class="nav_list_item">
                <div class="modal_content">
                  <div class="modal_close" title="Close" @click="closeModal">
                    <p class="bx bx-x">x</p>
                  </div>
                  <!-- <img
                    src="@/assets/img/logo/ba3-black.png"
                    alt=""
                    srcset=""
                    class="modal_img"
                  /> -->
                  <p class="assets-succes">🥺</p>
                  <h1 class="modal_title">{{ $t('title_failed') }}</h1>
                  <p class="modal_description">
                    {{ $t('description_failed') }}
                  </p>
                  <button class="modal_button-link" @click="closeModal">
                    {{ $t('label_close') }}
                  </button>
                </div>
              </div>
            </ul>
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
      showMenuFailed: false,
      titlePage: '',
      formData: {
        name: '',
        email: '',
        message: ''
      }
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
      this.showMenuFailed = false
    },
    async submitData() {
      this.loading = true
      const result = await this.$axios.$post(
        `https://simple-sendemail.vercel.app/api/send-email?name=${this.formData.name}&email=${this.formData.email}&message=${this.formData.message}`
      )
      if (result.status === 200) {
        this.formData = ''
        this.showMenu = true
        this.loading = false
      } else {
        this.formData = ''
        this.showMenuFailed = true
        this.loading = false
      }

      // const res = await this.$axios
      //   .post(
      //     `https://simple-sendemail.vercel.app/api/send-email?name=${this.formData.name}&email=${this.formData.email}&message=${this.formData.message}`)
      // .then((message) =>
      //   this.$swal.fire({
      //     position: 'center',
      //     icon: 'success',
      //     title: 'Success'
      //   })
      // )
      // .catch(
      //   (error) =>
      //     this.$swal.fire({
      //       position: 'center',
      //       icon: 'error',
      //       title: 'Data Gagal Dikirim'
      //     }),
      //   setTimeout(() => {
      //     this.formData = ''
      //   }, 1500)
      // )
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
</style>
