<template>
  <div class="home">
    <section class="section-hero">
      <div>
        <Hero/>
      </div>
    </section>

    <section class="container section-menu-steps">
      STEPS
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
</style>
