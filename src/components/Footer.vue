<template>
  <footer class="footer">
    <div class="container">
    <ul class="footer-list">
      <li class="footer-item">
        <router-link class="footer-link" to="/portfoolio">Portfoolio</router-link>
      </li>
      <li class="footer-item">
        <router-link class="footer-link" to="/minust">Minust</router-link>
      </li>
      <li class="footer-item">
        <router-link class="footer-link" to="/kontakt">Kontakt</router-link>
      </li>
      <li class="footer-item">
        <router-link class="footer-link footer-logo" to="/">MADLI</router-link>
      </li>
      <li class="footer-item">
        <router-link class="footer-link" to="/hind">Info & hind</router-link>
      </li>
      <li class="footer-item">
        <router-link class="footer-link" to="/tingimused">Tingimused</router-link>
      </li>
      <li class="footer-item">
        <a class="footer-link" href="https://www.instagram.com/madli.me/">
          <PhInstagramLogo :size="28"/>
        </a>
      </li>
    </ul>
    </div>
  </footer>
</template>

<script>
import {PhInstagramLogo} from "@phosphor-icons/vue";

export default {
  name: "Footer",
  components: {PhInstagramLogo}
}
</script>

<style>
.footer-list {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-link:link,
.footer-link:visited {
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  color: #1F1B22;
  font-size: 1.4rem;
  transition: all 0.4s;
}

.footer-link:hover,
.footer-link:active {
  color: #6D6076;
}

.footer-link.footer-logo {
  letter-spacing: 1.2rem;
  font-size: 3rem;
}

.footer-link.footer-logo:hover,
.footer-link.footer-logo:active {
  color: #1F1B22;
}
</style>