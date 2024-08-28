<template>
  <div :class="{'navbar-container': true, 'navbar-hidden': isHidden, 'navbar-visible': !isHidden, 'navbar-background': showBackground}">
    <nav class="container navbar">
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
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      isHidden: false,
      showBackground: false,
      lastScrollTop: 0,
      heroHeight: 0,
      isHome: false
    }
  },
  methods: {
    handleScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const hero = document.getElementById('hero')

      if (this.isHome && hero) {
        // is hero and homeview
        this.heroHeight = hero.offsetHeight
        this.showBackground = scrollTop > this.heroHeight
      } else{
        this.showBackground = true
      }

      if (scrollTop > this.lastScrollTop) {
        // scrolling down
        this.isHidden = true
        this.showBackground = true
      } else {
        // scrolling up
        this.isHidden = false
        this.showBackground = scrollTop > this.heroHeight
      }

      this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
    }
  },
  mounted() {
    this.isHome = this.$route.path === '/';
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>

<style>
.navbar-container {
  transition: all 0.3s ease;
  padding: 3.2rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
}

.navbar-hidden {
  top: -15rem;
}

.navbar-visible {
  top: 0;
}

.navbar-background {
  background: rgba(255, 255, 255, 0.7);
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
  font-size: 2rem;
  transition: all 0.4s;
}

.navbar-link:hover,
.navbar-link:active {
  color: #7C6E87;
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