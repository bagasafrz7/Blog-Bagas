<template>
  <div class="header-nav">
    <b-container>
      <b-row>
        <nav>
          <input id="nav-toggle" type="checkbox" />
          <div class="logo">
            <!-- <nuxt-link to="/">Bagas<strong>Afrizal</strong></nuxt-link> -->
            <nuxt-link to="/"><h2>B</h2></nuxt-link>
          </div>
          <ul class="links">
            <li><nuxt-link to="/about">Tentang Saya</nuxt-link></li>
            <li><nuxt-link to="/blog">Hasil Tulisan</nuxt-link></li>
            <li><nuxt-link to="/projects">Projects</nuxt-link></li>
            <li><ColorModePicker /></li>
            <!-- <li><nuxt-link to="/kontak">Eksperimen Aplikasi</nuxt-link></li> -->
          </ul>
          <!-- for="nav-toggle" -->
          <label v-b-toggle.sidebar-no-header class="icon-burger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
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
              <!-- <nuxt-link to="/">Bagas<strong>Afrizal</strong></nuxt-link> -->
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
              <!-- <li><nuxt-link to="/kontak">Eksperimen Aplikasi</nuxt-link></li> -->
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
  background: #f7b633;
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
    margin: 15px;
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
/* NAV */

/* .header-nav { */
/* background: rgb(255, 255, 255) !important; */
/* background: #121212; */

/* padding: 20px 15px 0 15px; */
/* } */
/* .bg-info { */
/* background: rgb(255, 255, 255) !important; */
/* background: #121212; */

/* padding: 20px 15px 0 15px; */
/* } */

/* .navbar-dark .navbar-brand {
  color: #fff;
  font-size: 32px;
}

.navbar-dark .navbar-nav .nav-link {
  color: #fff;
}

.navbar-dark .navbar-nav .nav-link:hover,
.navbar-dark .navbar-nav .nav-link:focus {
  color: orange;
} */

@media screen and (max-width: 576px) {
  ul {
    margin: 10px 0;
  }
}
</style>
