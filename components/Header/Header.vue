<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Bagas</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="m-auto">
        <b-nav-item to="/"> Home </b-nav-item>
        <b-nav-item to="/about"> Tentang </b-nav-item>
        <b-nav-item to="/kontak"> Kontak </b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav>
        <b-nav-item to="/"> IG </b-nav-item>
        <b-nav-item to="/about"> TW </b-nav-item>
        <b-nav-item to="/about"> GIT </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style scoped>
.bg-info {
  background: #000 !important;
  padding: 20px 15px 0 15px;
}

.navbar-dark .navbar-brand {
  color: #fff;
  font-size: 32px;
}
</style>
