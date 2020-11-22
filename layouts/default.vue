<template>
  <div>
    <Header />
    <main class="main-content">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Header from '../components/Header/Header'
export default {
  components: {
    Header
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: 'Josefin Sans', sans-serif;
}

.main-content {
  background: #000;
  padding-bottom: 175px;
}
</style>
