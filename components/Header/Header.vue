<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand to="/">Bagas Afrizal</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/"> Beranda </b-nav-item>
        <b-nav-item to="/about"> Tentang Saya </b-nav-item>
        <b-nav-item to="/blog"> Hasil Tulisan </b-nav-item>
        <b-nav-item to="/hasil"> Eksperimen Aplikasi </b-nav-item>
        <b-nav-item to="/kontak"> Narahubung </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style scoped>
.bg-info {
  background: #000 !important;
  /* padding: 20px 15px 0 15px; */
}

.navbar-dark .navbar-brand {
  color: #fff;
  font-size: 32px;
}

.navbar-dark .navbar-nav .nav-link {
  color: #fff;
}

.navbar-dark .navbar-nav .nav-link:hover,
.navbar-dark .navbar-nav .nav-link:focus {
  color: orange;
}
</style>
