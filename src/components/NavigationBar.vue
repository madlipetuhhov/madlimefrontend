<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-item">
        <router-link to="/portfoolio">Portfoolio</router-link>
      </li>
      <li class="navbar-item">
        <router-link to="/minust">Minust</router-link>
      </li>
      <li class="navbar-item">
        <router-link to="/hind">Info & hind</router-link>
      </li>
      <li class="navbar-item">
        <router-link to="/kontakt">Kontakt</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar"
}
</script>

<style scoped>

</style>