<template>
  <section class="container section-price section-first">
    <h1 class="heading-primary preparation-heading">Pildistan & hinnad</h1>

  </section>

  <section class="container section-experience">
    <h2 class="subheading preparation-heading">Kogemus</h2>

  </section>

  <section class="section-preparation">
    <h2 class="container subheading preparation-heading">Fotosessiooniks valmistumine</h2>
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
.section-experience{
  padding: 9.6rem 0;
}

.section-preparation {
  padding: 9.6rem 0;
}

.preparation-heading{
  text-align: center;
}
</style>