<template>
  <div>
    <input
      id="navcheck"
      ref="navcheck"
      v-model="navcheck"
      type="checkbox"
      class="navcheck"
      role="button"
      title="menu"
    />
    <label for="navcheck" aria-hidden="true" title="Menu">
      <div>
        <span class="burger">
          <span class="bar">
            <span class="visuallyhidden">Menu</span>
          </span>
        </span>
      </div>
    </label>
    <nav v-if="showEng" id="menu">
      <a>
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
      </a>
      <nuxt-link to="/">
        <span @click="CloseMenu">
          {{ $t('link_home') }}
        </span>
      </nuxt-link>
      <nuxt-link to="/about">
        <span @click="CloseMenu">
          {{ $t('link_about') }}
        </span>
      </nuxt-link>
      <nuxt-link to="/blog">
        <span @click="CloseMenu">
          {{ $t('link_blog') }}
        </span>
      </nuxt-link>
      <nuxt-link to="/projects">
        <span @click="CloseMenu">
          {{ $t('link_project') }}
        </span>
      </nuxt-link>
      <a href="#">
        <b-dropdown
          size="lg"
          variant="link"
          toggle-class="text-decoration-none"
        >
          <template #button-content>
            <p v-if="$i18n.locale !== 'en'">
              <img
                src="@/assets/img/flag/id.svg"
                alt=""
                srcset=""
                style="width: 35px; height: 25px; margin: 0 5px 0 0"
              />
            </p>
            <p v-if="$i18n.locale !== 'id'">
              <img
                src="@/assets/img/flag/en.svg"
                alt=""
                srcset=""
                style="width: 35px; height: 25px; margin: 0 5px 0 0"
              />
            </p>
          </template>
          <b-dropdown-item class="text-left" @click="languageIDN"
            ><img
              src="@/assets/img/flag/id.svg"
              alt=""
              srcset=""
              style="width: 25%; margin: 0 15px 0 0"
            />Indonesia</b-dropdown-item
          >
          <b-dropdown-item class="text-left" @click="languageENG"
            ><img
              src="@/assets/img/flag/en.svg"
              alt=""
              srcset=""
              style="width: 25%; margin: 0 15px 0 0"
            />English</b-dropdown-item
          >
        </b-dropdown>
      </a>
    </nav>
    <nav v-if="showIdn" id="menu">
      <a>
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
      </a>
      <nuxt-link to="/id/">
        <span @click="CloseMenu">
          {{ $t('link_home') }}
        </span>
      </nuxt-link>
      <nuxt-link to="/id/about">
        <span @click="CloseMenu">
          {{ $t('link_about') }}
        </span>
      </nuxt-link>
      <nuxt-link to="/id/blog">
        <span @click="CloseMenu">
          {{ $t('link_blog') }}
        </span>
      </nuxt-link>
      <nuxt-link to="/id/projects">
        <span @click="CloseMenu">
          {{ $t('link_project') }}
        </span>
      </nuxt-link>
      <a href="#">
        <b-dropdown
          size="lg"
          variant="link"
          toggle-class="text-decoration-none"
        >
          <template #button-content>
            <p v-if="$i18n.locale !== 'en'">
              <img
                src="@/assets/img/flag/id.svg"
                alt=""
                srcset=""
                style="width: 35px; height: 25px; margin: 0 5px 0 0"
              />
            </p>
            <p v-if="$i18n.locale !== 'id'">
              <img
                src="@/assets/img/flag/en.svg"
                alt=""
                srcset=""
                style="width: 35px; height: 25px; margin: 0 5px 0 0"
              />
            </p>
          </template>
          <b-dropdown-item class="text-left" @click="languageIDN"
            ><img
              src="@/assets/img/flag/id.svg"
              alt=""
              srcset=""
              style="width: 25%; margin: 0 15px 0 0"
            />Indonesia</b-dropdown-item
          >
          <b-dropdown-item class="text-left" @click="languageENG"
            ><img
              src="@/assets/img/flag/en.svg"
              alt=""
              srcset=""
              style="width: 25%; margin: 0 15px 0 0"
            />English</b-dropdown-item
          >
        </b-dropdown>
      </a>
    </nav>
    <main>
      <!-- <article class="content">
        <h1>UI with UX improvement with only awesome CSS</h1>
        <p>
          <strong
            >Burger icon, animated nav background and off-trigger area (outside
            nav opened) made width pseudo-elements. No JS at all :)</strong
          >
        </p>
        <p>
          <strong
            >No repaint, no reflow, no JS, but the blur effect may be a little
            laggy, particularly on mobile devices.</strong
          >
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
          asperiores, minima obcaecati ex iusto alias minus excepturi sunt!
          Asperiores quibusdam iure numquam quis dicta at quisquam debitis
          minima perspiciatis modi?
        </p>
        <p>
          Asperiores impedit neque porro, minus cum. Nesciunt blanditiis,
          dolorum explicabo esse voluptates voluptas doloribus, vero voluptate
          veniam impedit nam doloremque unde inventore ipsum iste magnam
          perferendis assumenda in sunt deleniti.
        </p>
        <p>
          Cum quidem eum quos provident placeat aut tempore rem voluptates
          eveniet? Eos impedit aspernatur hic tenetur ipsum tempora
          exercitationem libero voluptas numquam necessitatibus. Error quisquam
          quaerat debitis suscipit velit dolore.
        </p>
        <p>
          Atque, ab libero! Cum quae cumque voluptate culpa accusantium iste
          aliquam illum quos facere quisquam, delectus, magnam neque dicta
          quibusdam libero itaque dolorem, tenetur vel dolores laudantium
          ratione asperiores voluptatibus.
        </p>
        <p>
          Fugiat praesentium omnis maiores atque sed perspiciatis quia
          laboriosam! Eius mollitia iusto quia libero, voluptate laborum labore
          ducimus beatae, quisquam, dicta laboriosam culpa voluptatem impedit
          maxime, a ex pariatur dignissimos.
        </p>
        <p>
          Dolores odio dolore quo? Autem iure dolorem ratione, odit reiciendis.
          Non pariatur voluptates, explicabo vitae, rem molestias in. Voluptates
          expedita iusto blanditiis commodi numquam. Hic atque natus dolore
          cupiditate velit.
        </p>
        <p>
          Ipsam ipsum quos, quibusdam nulla commodi dolorem impedit soluta odio
          natus. Ullam dolor consequatur tenetur similique cupiditate debitis
          natus tempore molestiae quo, inventore in quia earum explicabo eaque
          qui facilis.
        </p>
        <p>
          Iure, natus. Ipsam officia nostrum minima ut blanditiis asperiores
          neque esse itaque reprehenderit, et, porro ea nemo eligendi cum soluta
          fuga similique? Soluta, nam odio praesentium quas officia repellendus
          dicta.
        </p>
        <p>
          Modi voluptates, doloremque aliquam. Magnam numquam fugit aliquam
          veniam officiis iusto et assumenda cupiditate aspernatur voluptas
          expedita quo voluptatibus repudiandae, sapiente molestias, culpa eos
          placeat possimus quae! Aliquid dicta, atque?
        </p>
        <p>
          Laborum magni ipsam iure iste blanditiis saepe. Optio obcaecati
          quaerat soluta, vitae. Asperiores reiciendis minima, quidem iusto
          explicabo culpa quaerat atque! Cum nesciunt nam ducimus mollitia iste
          sapiente sit, eos.
        </p>
      </article> -->
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkMode: true,
      navcheck: '',
      showEng: true,
      showIdn: false
    }
  },
  computed: {
    FlagID() {
      const flagID = require('@/assets/img/flag/id.svg')
      return flagID
    },
    FlagEN() {
      const flagEN = require('@/assets/img/flag/en.svg')
      return flagEN
    }
  },
  created() {},
  methods: {
    getNav() {
      if (this.navcheck === true) {
        console.log('true')
      } else {
        console.log('false')
      }
    },
    toggleSwitch() {
      this.$colorMode.preference =
        this.$colorMode.preference === 'light' ? 'dark' : 'light'
      this.darkMode = !this.darkMode
    },
    languageENG() {
      localStorage.setItem('local', 'en')
      const language = localStorage.getItem('local')
      this.$i18n.locale = language
      // console.log(language)
      this.showIdn = false
      this.showEng = true
    },
    languageIDN() {
      localStorage.setItem('local', 'id')
      const language = localStorage.getItem('local')
      this.$i18n.locale = language
      // console.log(language)
      this.showIdn = true
      this.showEng = false
    },
    CloseMenu() {
      this.navcheck = false
    }
  }
}
</script>

<style scoped>
input {
  position: fixed;
  opacity: 0;
}
label {
  position: absolute;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
}
label::before {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(10, 38, 57, 0.75);
  content: '';
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}
label .burger {
  position: fixed;
  top: 1.5em;
  left: 1.5em;
  z-index: 3;
  width: 2em;
  height: 2em;
  margin: 0;
  padding: 0;
  transition: opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}
label .burger::before,
label .burger .bar,
label .burger::after {
  position: absolute;
  left: 0;
  display: block;
  width: 100%;
  height: 12%;
  background: var(--bg1);
  content: '';
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}
label .burger .bar {
  top: 44%;
}
label .burger::before {
  top: 0;
  transform-origin: top left;
}
label .burger::after {
  bottom: 0;
  transform-origin: bottom left;
}
input:focus + label .burger,
label:hover .burger {
  opacity: 0.75;
}
nav {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  transform: translate3d(0, 0, 0);
  /* material acceleration */
  transform: translateX(-100%);
  will-change: transform;
  transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}
nav::before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  width: 20em;
  background: #3498db;
  content: '';
  transform: skewX(15deg) translateX(-100%);
  transform-origin: bottom left;
  will-change: transform;
  transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}
@media (min-width: 40em) {
  nav::before {
    width: 50em;
  }
}
@media (max-width: 1024px) {
  nav::before {
    width: 30em;
  }
}
@media (max-width: 768px) {
  nav::before {
    width: 30em;
  }
}
@media (max-width: 576px) {
  nav::before {
    width: 20em;
  }
}
nav a {
  font-family: 'Poppins', sans-serif;
  margin: 0.5em 0;
  padding: 0.2em 2em;
  cursor: pointer;
  font-size: 1.5em;
  color: white !important;
  text-decoration: none;
  font-weight: 500;
  transform: translateX(-100%);
  transition: color 0.15s, transform 0.5s;
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}
nav a:nth-child(1) {
  transition-delay: 0s, 100ms;
}
nav a:nth-child(2) {
  transition-delay: 0s, 150ms;
}
nav a:nth-child(3) {
  transition-delay: 0s, 200ms;
}
nav a:nth-child(4) {
  transition-delay: 0s, 250ms;
}
nav a:nth-child(5) {
  transition-delay: 0s, 300ms;
}
nav a:nth-child(6) {
  transition-delay: 0s, 350ms;
}
nav a:hover {
  color: #f7b633 !important;
}
main {
  overflow: hidden;
}
main .content {
  transform: translate3d(0, 0, 0);
  /* material acceleration */
  will-change: transform, filter;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}
[id='navcheck']:checked + label::before {
  opacity: 1;
  pointer-events: auto;
}
[id='navcheck']:checked + label .burger::before,
[id='navcheck']:checked + label .burger::after {
  width: 141.42%;
}
[id='navcheck']:checked + label .burger::before {
  transform: rotate(45deg) translateY(-50%);
}
[id='navcheck']:checked + label .burger::after {
  transform: rotate(-45deg) translateY(50%);
}
[id='navcheck']:checked + label .burger .bar {
  transform: scale(0.1);
}
[id='navcheck']:checked ~ nav {
  transform: translateX(0);
}
[id='navcheck']:checked ~ nav::before {
  transform: skewX(15deg) translateX(0);
}
[id='navcheck']:checked ~ nav a {
  transform: translateX(0);
}
[id='navcheck']:checked ~ main .content {
  transform: translateX(3em);
  transform-origin: left center;
  filter: blur(2px);
}
/* helper */
.visuallyhidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
/* misc */
body {
  overflow-x: hidden;
  background: #444;
  color: white;
  font: 1em/1.4 'lato';
}
article {
  width: 80%;
  margin: 0 auto;
  font-size: 1.3em;
}
@media (min-width: 60em) {
  article {
    width: 50%;
  }
}
h1 {
  font: 2.5em/1.4 'roboto condensed';
  font-weight: 700;
}
.dropbtn {
  background-color: transparent;
  color: var(--bg-secondary);
  border: none;
  display: flex;
  flex-direction: row;
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #fff;
  /* min-width: 160px;
	 */
  /* width: 100%;
	 */
  width: 100px;
  left: -40px;
  right: 30px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  color: #000;
}
.dropdown-content a {
  color: #000;
  padding: 10px 15px;
  text-decoration: none;
  display: block;
  font-size: 14px;
}
/* .dropdown-content a:hover {
	 background-color: #ddd;
}
 */
.dropdown:hover .dropdown-content {
  display: block;
  padding: 10px 5px;
}
.dropdown:hover .dropbtn {
  background-color: transparent;
}
.nuxt-link-exact-active.nuxt-link-active {
  color: #f7b633 !important;
}
</style>
