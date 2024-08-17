<template>
  <nav class="navbar-nav">
    <ul class="navbar-list">
      <li class="navbar-link">
        <router-link to="/portfoolio">Portfoolio</router-link>
      </li>
      <li class="navbar-link">
        <router-link to="/minust">Minust</router-link>
      </li>
      <li class="navbar-logo">
        <router-link to="/">MADLI</router-link>
      </li>
      <li class="navbar-link">
        <router-link to="/hind">Info & hind</router-link>
      </li>
      <li class="navbar-link">
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

<style>
.navbar-list{
  list-style: none;
  display: flex;
  align-items: center;
  gap: 4.8rem;
}

</style>