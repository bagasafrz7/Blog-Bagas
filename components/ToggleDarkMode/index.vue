<template>
  <div>
    <main>
      <input
        v-model="checked"
        class="l"
        type="checkbox"
        :checked="valueCheck"
      />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleDarkMode: false,
      darkMode: true,
      valueCheck: true
    }
  },
  mounted() {
    const dataTheme = localStorage.getItem('nuxt-color-mode')
    if (this.$colorMode.preference === 'dark') {
      this.valueCheck = false
      console.log(dataTheme)
    } else if (this.$colorMode.preference === 'light') {
      console.log(dataTheme)
      this.valueCheck = true
    } else if (this.$colorMode.preference === '') {
      console.log(dataTheme)
      this.valueCheck = false
    }
  }
}
</script>

<style scoped>
:root {
  /* minFontSize + (maxFontSize - minFontSize) * (100vw - minVWidth)/(maxVWidth - minVWidth) */
  font-size: calc(64px + (80 - 64) * (100vw - 320px) / (960 - 320));
}
input {
  font-size: 1em;
  line-height: 1.5;
  display: block;
  margin-bottom: 1.5em;
}
main {
  text-align: right;
}
.l {
  background-color: #bbb;
  border-radius: 0.75em;
  box-shadow: 0.125em 0.125em 0 0.125em rgba(0, 0, 0, 0.3) inset;
  color: #fdea7b;
  display: inline-flex;
  align-items: center;
  margin: auto;
  padding: 0.15em;
  width: 3em;
  height: 1.5em;
  transition: background-color 0.1s 0.3s ease-out, box-shadow 0.1s 0.3s ease-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
}
.l:before,
.l:after {
  content: '';
  display: block;
}
.l:before {
  background-color: #d7d7d7;
  border-radius: 50%;
  width: 1.2em;
  height: 1.2em;
  transition: background-color 0.1s 0.3s ease-out, transform 0.3s ease-out;
  z-index: 1;
}
.l:after {
  background: linear-gradient(transparent 50%, rgba(0, 0, 0, 0.15) 0) 0 50% /
      50% 100%,
    repeating-linear-gradient(90deg, #bbb 0, #bbb, #bbb 20%, #999 20%, #999 40%)
      0 50% / 50% 100%,
    radial-gradient(circle at 50% 50%, #888 25%, transparent 26%);
  background-repeat: no-repeat;
  border: 0.25em solid transparent;
  border-left: 0.4em solid #d8d8d8;
  border-right: 0 solid transparent;
  transition: border-left-color 0.1s 0.3s ease-out, transform 0.3s ease-out;
  transform: translateX(-22.5%);
  transform-origin: 25% 50%;
  width: 1.2em;
  height: 1em;
}
/* Checked */
.l:checked {
  background-color: #bbb;
  box-shadow: 0.125em 0.125em 0 0.125em rgba(0, 0, 0, 0.1) inset;
}
.l:checked:before {
  background-color: currentColor;
  transform: translateX(125%);
}
.l:checked:after {
  border-left-color: currentColor;
  transform: translateX(-2.5%) rotateY(180deg);
}
/* Other States */
.l:focus {
  /* Usually an anti-A11Y practice but set to remove an annoyance just for this demo */
  outline: 0;
}
</style>
