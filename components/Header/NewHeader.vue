<template>
  <div class="container">
    <h1>
      <p @click="ClickMenu">Clck Me</p>
    </h1>

    <div v-if="showMenu" id="menu" class="popover">
      <div class="content">
        <a class="close" @click="CloseMenu"></a>
        <div class="nav">
          <ul class="nav_list">
            <div class="nav_list_item">
              <li>
                <nuxt-link to="/about">
                  {{ $t('link_about') }}
                </nuxt-link>
              </li>
            </div>
            <div class="nav_list_item">
              <li>
                <nuxt-link to="/blog"> {{ $t('link_blog') }} </nuxt-link>
              </li>
            </div>
            <div class="nav_list_item">
              <li>
                <nuxt-link to="/projects"> {{ $t('link_project') }} </nuxt-link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    ClickMenu() {
      this.showMenu = true
    },
    CloseMenu() {
      this.showMenu = false
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-behavior: smooth;
  background: #131313;
  font-family: 'Helvetica Neue', sans-serif;
}

h1 a {
  font-size: 80px;
  color: #f7b633;
  text-decoration: none;
  text-transform: uppercase;
}

.popover {
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

.popover:target {
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
  background-color: #191919;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
}

.popover .content {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: #191919;
  -webkit-animation: 1s grow-data-v-81a679f4 ease forwards;
  animation: 1s grow-data-v-81a679f4 ease forwards;
  text-align: center;
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
}

.nav_list li {
  padding: 15px 0;
  text-transform: uppercase;
  transform: translateY(200px);
  opacity: 0;
  animation: 2s slideUp ease forwards 0.5s;
  position: relative;
}

.nav_list li::before {
  content: '';
  position: absolute;
  height: 2px;
  width: 0px;
  left: 0;
  bottom: 10px;
  background: #f7b633;
  transition: all 0.5s ease;
}

.nav_list li:hover:before {
  width: 100%;
}

.popover p {
  padding: 50px;
  opacity: 0;
  animation: 1s fadeIn ease forwards 1s;
}

.popover .close::after {
  right: 0;
  top: 0;
  width: 50px;
  height: 50px;
  position: absolute;
  display: flex;
  z-index: 1;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  background-color: #f7b633;
  color: #fff;
  content: 'X';
  cursor: pointer;
  opacity: 0;
  animation: 1s fadeIn ease forwards 0.5s;
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
</style>
