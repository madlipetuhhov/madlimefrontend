<template>
  <section class="section-portfolio section-first">
    <Gallery/>
  </section>

  <section class="section-cta">
    <CTA img="cta3.png"
         alt="Photo of beautiful nature."
         text="Loodusest inspireeritud fotograafia."
         btnText="Tutvu minu looga"
         btnVariant="btn--dark"
         textColor="#1F1B22"
         link="/minust"/>
  </section>

  <div class="section-footer">
    <Footer/>
  </div>
</template>

<script>
import Gallery from "@/components/Gallery.vue";
import Footer from "@/components/Footer.vue";
import CTA from "@/components/CTA.vue";

export default {
  name: "PortfolioView",
  components: {CTA, Footer, Gallery}
}
</script>

<style>

</style>