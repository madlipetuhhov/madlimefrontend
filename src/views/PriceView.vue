<template>
  <section class="section-price section-first">
    <h1 class="heading-primary preparation-heading">Pildistan & hinnad</h1>
    <div class="container grid grid--3-cols">

      <div class="price-img-box">
        <img class="price-img" src="../assets/img/price/portrait.png" alt="Photo example of portrait photo - woman siting at the beach."/>
      </div>
      <div class="price-text-box">

        <h3 class="heading-tertiary">Portree</h3>
        <p class="price-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
      </div>
    </div>

  </section>

  <section class="section-experience">
    <h2 class="subheading preparation-heading">Kogemus</h2>
    <div class="container grid grid--4-cols">

    </div>

  </section>

  <section class="section-preparation">
    <h2 class="subheading preparation-heading">Fotosessiooniks valmistumine</h2>
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
.price-text-box{
  grid-column: span 2;
}

.price-text {
  font-size: 1.6rem;
  line-height: 1.5;
}

.price-img-box {
  grid-column: span 1;
  justify-self: left;
}

.price-img {
  width: 24rem;
  height: 24rem;
  object-fit: cover;
}

.section-experience {
  padding: 9.6rem 0;
}

.section-preparation {
  padding: 9.6rem 0;
}

.preparation-heading {
  text-align: center;
}
</style>