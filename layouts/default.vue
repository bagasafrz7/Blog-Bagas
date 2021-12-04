<template>
  <div>
    <!-- <Header /> -->
    <ModernHeader />
    <main class="main-content">
      <Nuxt />
    </main>
  </div>
</template>

<script>
// import Header from '../components/Header/Header'
import ModernHeader from '../components/Header/ModernHeader'
export default {
  components: {
    // Header,
    ModernHeader
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
  margin: 50px 0;
}
</style>
