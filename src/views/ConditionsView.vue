<template>
  <section class="section-conditions section-first">
    <h1 class="heading-center heading-primary">Tingimused</h1>
    <Accordion :accordionItems="accordionItems" variant="accordion--green"/>
  </section>

  <section class="section-cta">
    <CTA img="cta6.png"
         alt="Photo of beautiful nature."
         text="Loodusest inspireeritud fotograafia."
         btnText="Broneeri fotosessioon"
         btnVariant="btn--dark"
         textColor="#1F1B22"
         link="/kontakt"/>
  </section>

  <section class="section-footer">
    <Footer/>
  </section>
</template>

<script>
import Footer from "@/components/Footer.vue";
import CTA from "@/components/CTA.vue";
import Accordion from "@/components/Accordion.vue";

export default {
  name: "ConditionsView",
  components: {Accordion, CTA, Footer},
  data() {
    return {
      accordionItems: [
        {
          title: "Pildistamise aeg",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n" +
              "          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
        },
        {
          title: "Fotode kasutamine",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n" +
              "          labore et dolore magna aliqua."
        },
        {
          title: "Maksmine",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n" +
              "          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n" +
              "          labore et dolore magna aliqua."
        },
      ]
    }
  },
}
</script>

<style>

</style>