<template>
  <div class="cta">
    <div class="cta-img-box">
      <img class="cta-img" src="../assets/img/cta/cta1.jpg" alt="Photo of beautiful nature."/>
    </div>
    <div class="cta-content">
      <div class="container">
        <div class="cta-text-btn-box">
          <div class="cta-text-box">
            <p class="cta-text">Fotograafia, mis on inspireeritud loodusest.</p>
          </div>
          <div class="cta-button">
            <Button>Broneeri fotosessioon</Button>
          </div>
        </div>
      </div>
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
.cta {
  position: relative;
}

.cta-content {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 100%;
}

.container {
  position: relative;
}

.cta-text-btn-box {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4.8rem;
}

.cta-text {
  font-size: 2rem;
  font-weight: 500;
  color: #F9F8FA;
}

.cta-img-box {
  width: 100%;
  overflow: hidden;
}

.cta-img {
  width: 100%;
  height: 50rem;
  object-fit: cover;
}

</style>
