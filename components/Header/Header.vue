<template>
  <div class="header-nav">
    <b-container>
      <b-row>
        <nav>
          <input id="nav-toggle" type="checkbox" />
          <div class="logo">
            <div v-if="$colorMode.preference === 'light'">
              <nuxt-link to="/">
                <img src="@/assets/img/logo/ba3-black.png" alt="" srcset="" />
              </nuxt-link>
            </div>
            <div v-else-if="$colorMode.preference === 'dark'">
              <nuxt-link to="/">
                <img src="@/assets/img/logo/ba3-white.png" alt="" srcset="" />
              </nuxt-link>
            </div>
          </div>
          <ul class="links">
            <li><nuxt-link to="/about">Tentang Saya</nuxt-link></li>
            <li><nuxt-link to="/blog">Hasil Tulisan</nuxt-link></li>
            <li><nuxt-link to="/projects">Projects</nuxt-link></li>
            <li><ColorModePicker /></li>
          </ul>
          <!-- v-b-toggle.sidebar-no-header -->
          <label class="icon-burger">
            <input id="active" type="checkbox" />

            <label for="active" class="menu-btn">
              <fa :icon="['fas', 'bars']" class="building" />
            </label>
            <div class="wrapper">
              <ul>
                <li><a @click="linkAbout">Tentang Saya</a></li>
                <li><a @click="linkHasil">Hasil Tulisan</a></li>
                <li><a @click="linkProject">Projects</a></li>
                <li><ColorModePicker /></li>
              </ul>
            </div>
          </label>
        </nav>
      </b-row>
    </b-container>
    <b-sidebar
      id="sidebar-no-header"
      aria-labelledby="sidebar-no-header-title"
      shadow
      right
      class="custom-sidebar"
      bg-variant="light"
    >
      <template #default="{ hide }">
        <div class="p-3">
          <nav>
            <div class="logo">
              <nuxt-link to="/"><h2>B</h2></nuxt-link>
            </div>
            <ul class="sidebar-links">
              <li>
                <nuxt-link to="/about" @click="hide">Tentang Saya</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/blog" @click="hide">Hasil Tulisan</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/projects" @click="hide">Projects</nuxt-link>
              </li>
              <li @click="hide"><ColorModePicker /></li>
            </ul>
          </nav>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
import ColorModePicker from '@/components/ColorModePicker'
export default {
  components: {
    ColorModePicker
  },
  methods: {
    linkAbout() {
      this.$router.push('/about')
    },
    linkProject() {
      this.$router.push('/projects')
    },
    linkHasil() {
      this.$router.push('/blog')
    }
  }
}
</script>

<style scoped>
nav {
  width: 100%;
  padding: 20px 0;
}
/* NAV */
nav .logo {
  float: left;
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 24px;
  /* color: var(--color-logo); */
}

nav .logo img {
  width: 50px;
  height: 50px;
}

.logo h2 {
  background: var(--bg-logo);
  width: 50px;
  height: 50px;
  text-align: center;
  padding: 10px 0;
  border-radius: 50px;
  transition: ease-in-out 0.5s;
  color: var(--color-logo);
}

.logo h2:hover {
  background: #f7b633;
  color: #fff;
}

nav .logo a {
  color: #f7b633;
  text-decoration: none;
}

nav .logo a:hover {
  text-decoration: none;
}

.nuxt-link-exact-active.nuxt-link-active {
  color: #f7b633;
}
nav .links {
  float: right;
  padding: 0;
  margin: 0;
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
nav .links li {
  list-style: none;
}
nav .links a {
  display: block;
  padding: 1em 0;
  font-size: 16px;
  font-weight: bold;
  color: var(--bg-secondary);
  text-decoration: none;
}
#nav-toggle {
  position: absolute;
  top: -100px;
}
nav .icon-burger {
  display: none;
  position: absolute;
  right: 5%;
  top: 4%;
  /* background: #f7b633; */
}
nav .icon-burger .line {
  width: 30px;
  height: 5px;
  background-color: #fff;
  margin: 5px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
}
@media screen and (max-width: 1024px) {
  nav .links a {
    font-size: 16px;
    text-align: center;
  }
}

@media screen and (max-width: 768px) {
  nav .logo {
    float: none;
    width: auto;
    justify-content: center;
  }
  .header-nav {
    padding: 15px 0;
  }
  nav .links {
    float: none;
    position: fixed;
    z-index: 9;
    left: 0;
    right: 0;
    top: 100px;
    bottom: 100%;
    width: auto;
    height: auto;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.9);
    overflow: hidden;
    box-sizing: border-box;
    transition: all 0.5s ease-in-out;
  }
  ul,
  li {
    list-style: none;
  }
  ul li a {
    color: #000;
  }
  nav .links a {
    font-size: 20px;
    color: #fff;
  }
  nav :checked ~ .links {
    bottom: 0;
  }
  nav .icon-burger {
    display: block;
    margin: 10px;
  }
  nav :checked ~ .icon-burger .line:nth-child(1) {
    transform: translateY(10px) rotate(225deg);
  }
  nav :checked ~ .icon-burger .line:nth-child(3) {
    transform: translateY(-10px) rotate(-225deg);
  }
  nav :checked ~ .icon-burger .line:nth-child(2) {
    opacity: 0;
  }
}

.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  clip-path: circle(25px at calc(100% - 45px) 45px);
  transition: all 0.3s ease-in-out;
}
#active:checked ~ .wrapper {
  background: #000;
  clip-path: circle(75%);
  z-index: 8;
}
.menu-btn {
  position: absolute;
  z-index: 9;
  right: 20px;
  height: 50px;
  width: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 50%;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  background: #000;
  transition: all 0.3s ease-in-out;
}
.wrapper ul {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  text-align: center;
}
.wrapper ul li {
  margin: 15px 0;
}
.wrapper ul li a {
  color: none;
  text-decoration: none;
  font-size: 30px;
  font-weight: 500;
  /* padding: 5px 30px; */
  color: #fff;
  border-radius: 50px;
  background: #000;
  position: relative;
  line-height: 50px;
  transition: all 0.3s ease;
}
.wrapper ul li a:after {
  position: absolute;
  content: '';
  background: #fff;
  background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
  /*background: linear-gradient(375deg, #1cc7d0, #2ede98);*/
  width: 104%;
  height: 110%;
  left: -2%;
  top: -5%; /* if the font is 'Oswald'*/
  border-radius: 50px;
  transform: scaleY(0);
  z-index: -1;
  animation: rotate 1.5s linear infinite;
  transition: transform 0.3s ease;
}
.wrapper ul li a:hover:after {
  transform: scaleY(1);
}
.wrapper ul li a:hover {
  color: #fff;
}
input[type='checkbox'] {
  display: none;
}
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  text-align: center;
  width: 100%;
  color: #202020;
}
.content .title {
  font-size: 40px;
  font-weight: 700;
}
.content p {
  font-size: 35px;
  font-weight: 600;
}

@keyframes rotate {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}

@media screen and (max-width: 576px) {
  ul {
    margin: 10px 0;
  }
}
</style>
