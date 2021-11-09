<template>
  <main>
    <h1>{{ $t('greeting') }}</h1>

    <nuxt-link v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')">
      English
    </nuxt-link>

    <nuxt-link v-if="$i18n.locale !== 'id'" :to="switchLocalePath('id')">
      Indonesia
    </nuxt-link>

    <button class="btn btn-primary" @click="showModal">Show Modal</button>
    <button class="btn btn-primary" @click="showModal1">Show Modal 1</button>

    <button v-if="!darkMode" @click="toggleSwitch">
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11.9998" cy="11.9998" r="5.75375" fill="currentColor" />
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
          <circle cx="12" cy="22.2881" r="1.71143" fill="currentColor" />
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
          <circle cx="12" cy="1.71143" r="1.71143" fill="currentColor" />
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

    <!-- Modal -->
    <div v-if="NewModal" class="modal_container show-modal">
      <div class="modal_content">
        <div class="modal_close" title="Close" @click="closeModal">
          <p class="bx bx-x">x</p>
        </div>
        <img
          src="@/assets/img/logo/ba3-black.png"
          alt=""
          srcset=""
          class="modal_img"
        />
        <h1 class="modal_title">Success</h1>
        <p class="modal_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
          perspiciatis.
        </p>
        <button class="modal_button-link" @click="closeModal">Close</button>
      </div>
    </div>
    <!-- Modal -->

    <!-- Modal2 -->
    <div v-if="showMenu" id="menu" class="popover1">
      <div class="content">
        <a class="close" @click="CloseMenu"></a>
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
                <h1 class="modal_title">Yeay, Data Berhasil Dikirim</h1>
                <p class="modal_description">
                  Data yang kamu kirim akan segera dibalas, Terima Kasih!
                </p>
                <button class="modal_button-link" @click="closeModal">
                  Tutup
                </button>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
    <!-- Modal2 -->
  </main>
</template>

<script>
export default {
  data() {
    return {
      NewModal: false,
      showMenu: false,
      darkMode: true
    }
  },
  mounted() {
    // this.showModal()
  },
  methods: {
    toggleSwitch() {
      this.$colorMode.preference =
        this.$colorMode.preference === 'light' ? 'dark' : 'light'
      this.darkMode = !this.darkMode
    },
    showModal() {
      this.NewModal = true
    },
    showModal1() {
      this.showMenu = true
    },
    closeModal() {
      this.NewModal = false
      this.showMenu = false
    },
    CloseMenu() {
      this.showMenu = false
    }
  }
}
</script>

<style scoped>
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
  transform: scale(1) translateY(0);
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
  animation: 0.5s fadeIn ease forwards 0.5s;
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
@media screen and (max-width: 576px) {
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
    animation: 2s slideUp ease forwards 0.5s;
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
