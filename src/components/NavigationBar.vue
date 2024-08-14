<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="navbar-item">
        <router-link to="/about">About</router-link>
      </li>
      <li class="navbar-item">
        <router-link to="/contact">Contact</router-link>
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