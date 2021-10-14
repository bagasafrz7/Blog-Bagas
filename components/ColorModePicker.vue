<template>
  <div>
    <!-- <div v-if="$colorMode.preference === 'light'">
      <a @click="$colorMode.preference = 'dark'">
        <fa :icon="['far', 'moon']" class="moon" />
      </a>
    </div>
    <div v-else-if="$colorMode.preference === 'dark'">
      <a @click="$colorMode.preference = 'light'">
        <fa :icon="['far', 'sun']" class="sun" />
      </a>
    </div> -->
    <div>
      <a @click="toggle">
        <div v-if="showSun">
          <fa :icon="['far', 'sun']" class="sun" />
        </div>
        <div v-if="showMoon">
          <fa :icon="['far', 'moon']" class="moon" />
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSun: true,
      showMoon: false
      //   colors: ['light', 'dark']
    }
  },
  created() {
    // const dataTheme = localStorage.getItem('nuxt-color-mode')
    // console.log(dataTheme)
    // if (dataTheme === 'light') {
    //   this.showSun = true
    //   this.showMoon = false
    //   console.log(dataTheme)
    //   this.toggle()
    // } else if (dataTheme === 'dark') {
    //   this.showSun = false
    //   this.showMoon = true
    //   console.log(dataTheme)
    //   this.toggle()
    // }
    // this.toggle()
    // console.log(this.$colorMode)
  },
  methods: {
    toggle() {
      this.$colorMode.preference =
        this.$colorMode.value === 'light' ? 'dark' : 'light'
      const dataTheme = localStorage.getItem('nuxt-color-mode')
      if (dataTheme === 'light') {
        this.showSun = true
        this.showMoon = false
        // console.log(dataTheme)
      } else if (dataTheme === 'dark') {
        this.showSun = false
        this.showMoon = true
        // console.log(dataTheme)
      }
      // console.log(dataTheme)
    }
  }
}
</script>

<style scoped>
.sun {
  /* color: var(--color-icon-header); */
  color: #f7b633;
  font-size: 20px;
}
.moon {
  /* color: var(--color-icon-header); */
  color: #f7b633;
  font-size: 20px;
}
</style>
