<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-item">
        <router-link class="navbar-link" to="/portfoolio">Portfoolio</router-link>
      </li>
      <li class="navbar-item">
        <router-link class="navbar-link" to="/minust">Minust</router-link>
      </li>
      <li class="navbar-item">
        <router-link class="navbar-link logo" to="/">MADLI</router-link>
      </li>
      <li class="navbar-item">
        <router-link class="navbar-link" to="/hind">Info & hind</router-link>
      </li>
      <li class="navbar-item">
        <router-link class="navbar-link" to="/kontakt">Kontakt</router-link>
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
.navbar {
  padding: 3.2rem 4.8rem;
  z-index: 10;
}

.navbar-list {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-link:link,
.navbar-link:visited {
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  color: #1F1B22;
  font-weight: 500;
  font-size: 1.8rem;
  transition: all 0.3s;
}

.navbar-link:hover,
.navbar-link:active {
  color: #9B89A9;
}

.navbar-link.logo {
  letter-spacing: 2rem;
  font-size: 6.2rem;
}

.navbar-link.logo:hover,
.navbar-link.logo:active {
  color: #1F1B22;
}

</style>