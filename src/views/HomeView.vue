<template>
  <div class="home">
    <section class="section-hero">
      <div>
        <Hero/>
      </div>
    </section>

    <section class="section-menu">
      <div class="container grid grid--3-cols">
        <div class="menu-box">
          <a class="menu-nr" href="/portfoolio">01</a>
          <a class="menu-link" href="/portfoolio">Tutvu minu loominguga</a>
        </div>
        <div class="menu-box">
          <a class="menu-nr" href="/hind">02</a>
          <a class="menu-link" href="/hind">Vaata hindasid</a>
        </div>
        <div class="menu-box">
          <a class="menu-nr" href="/kontakt">03</a>
          <a class="menu-link" href="/kontakt">Võta minuga ühendust</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";

export default {
  name: 'HomeView',
  components: {Hero},
}
</script>

<style>
.section-hero {
  z-index: 1;
}

.section-menu {
  padding: 9.6rem 0;
}

.menu-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.menu-link:link,
.menu-link:visited,
.menu-nr:link,
.menu-nr:visited {
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s;
}

.menu-link:link,
.menu-link:visited {
  color: #1F1B22;
  font-weight: 500;
  font-size: 1.6rem;
}

.menu-nr:link,
.menu-nr:visited {
  color: #E1DCE5;
  font-weight: 700;
  font-size: 6.2rem;
  margin-bottom: 1.2rem;
}

.menu-link:hover,
.menu-link:active,
.menu-nr:hover,
.menu-nr:active {
  color: #6D6076;
}


</style>
