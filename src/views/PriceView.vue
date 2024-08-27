<template>
  <section class="section-price section-first"></section>

  <section class="section-preparation">
    <Accordion :accordionItems="accordionItems"/>
  </section>

  <section class="section-cta">
    <CTA img="cta4.png"
         alt="Photo of beautiful nature."
         text="Loodusest inspireeritud fotograafia."
         btnText="Broneeri fotosessioon"
         btnVariant="btn--light"
         textColor="#F9F8FA"
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
  name: "PriceView",
  components: {Accordion, CTA, Footer},
  data() {
    return {
      accordionItems: [
        {
          title: "Riietus",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n" +
              "          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
        },
        {
          title: "Ehted",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n" +
              "          labore et dolore magna aliqua."
        },
        {
          title: "Muu",
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
.section-preparation{
  padding: 9.6rem 0;
}
</style>