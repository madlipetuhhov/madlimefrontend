<template>
  <div class="cta">
    <div class="container cta-text-box">
      <p class="cta-text">Fotograafia, mis on inspireeritud loodusest.</p>
    </div>
    <div class="container cta-button">
      <Button/>
    </div>
    <div class="cta-img-box">
      <img class="cta-img" src="../assets/img/cta/cta1.png" alt="Photo of beautiful nature."/>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "CTA",
  components: {Button}
}
</script>

<style>

</style>
