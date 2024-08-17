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
<!--   todo: numbrid ka klikatavaks-->
        <p class="menu-nr">01</p>
        <a class="menu-link" href="/portfoolio">Tutvu minu loominguga</a>
      </div>
      <div class="menu-box">
        <p class="menu-nr">02</p>
        <a class="menu-link" href="/hind">Vaata hindasid</a>
      </div>
      <div class="menu-box">
        <p class="menu-nr">03</p>
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

.menu-box{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.menu-nr {
  font-size: 6.2rem;
  font-weight: 700;
  color: #D7D0DD;
  margin-bottom: 1.2rem;
}

.menu-link:link,
.menu-link:visited {
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  color: #1F1B22;
  font-weight: 500;
  font-size: 1.6rem;
  transition: all 0.3s;
}

.menu-link:hover,
.menu-link:active {
  color: #6D6076;
}

</style>
