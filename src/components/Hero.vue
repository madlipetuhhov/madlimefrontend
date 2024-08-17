<template>
  <div class="hero">
    <div class="hero-img-box">
      <img class="hero-img" src="../img/hero1.png" alt="Woman posing at sunset."/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero"
}
</script>

<style>
.hero {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 1;
}

.hero-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>