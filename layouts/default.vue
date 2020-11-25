<template>
  <div>
    <Header />
    <main>
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
</style>
