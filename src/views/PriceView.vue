<template>
  <section class="section-price section-first">
    <h1 class="heading-primary preparation-heading">Pildistan & hinnad</h1>
    <div class="grid grid--2-cols">

      <!--01 Portree-->
      <div class="price-img-box">
        <img class="price-img" src="../assets/img/price/portrait.png"
             alt="Photo example of portrait photo - woman siting at the beach."/>
      </div>
      <div class="price-text-box">
        <h3 class="heading-tertiary price-heading">Portree</h3>
        <p class="price-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
      </div>

      <!--02 Paarid-->
      <div class="price-text-box">
        <h3 class="heading-tertiary price-heading">Paarid</h3>
        <p class="price-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
      </div>
      <div class="price-img-box">
        <img class="price-img" src="../assets/img/price/couple.png"
             alt="Photo example of portrait photo - woman siting at the beach."/>
      </div>

      <!--03 Lapseootus-->
      <div class="price-img-box">
        <img class="price-img" src="../assets/img/price/pregnancy.png"
             alt="Photo example of portrait photo - woman siting at the beach."/>
      </div>
      <div class="price-text-box">
        <h3 class="heading-tertiary price-heading">Lapseootus</h3>
        <p class="price-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
      </div>

      <!--04 Pered-->
      <div class="price-text-box">
        <h3 class="heading-tertiary price-heading">Pered</h3>
        <p class="price-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
      </div>
      <div class="price-img-box">
        <img class="price-img" src="../assets/img/price/family.png"
             alt="Photo example of portrait photo - woman siting at the beach."/>
      </div>

      <!--05 Loodus-->
      <div class="price-img-box">
        <img class="price-img" src="../assets/img/price/nature.png"
             alt="Photo example of portrait photo - woman siting at the beach."/>
      </div>
      <div class="price-text-box">
        <h3 class="heading-tertiary price-heading">Loodus</h3>
        <p class="price-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
      </div>
    </div>
  </section>

  <section class="section-experience">
    <h2 class="subheading preparation-heading">Kogemus</h2>
    <div class="container grid grid--4-cols">
      <div class="experience">
        <div class="experience-no">01</div>
        <h3 class="heading-tertiary experience-heading">Saada oma soovid</h3>
        <p class="experience-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt
          ut labore et dolore magna aliqua.</p>
      </div>
      <div class="experience">
        <div class="experience-no">02</div>
        <h3 class="heading-tertiary experience-heading">Planeerimine & moodboard</h3>
        <p class="experience-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt
          ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt
          ut labore et dolore magna aliqua.</p>
      </div>
      <div class="experience">
        <div class="experience-no">03</div>
        <h3 class="heading-tertiary experience-heading">Fotosessioon</h3>
        <p class="experience-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt
          ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet. </p>
      </div>
      <div class="experience">
        <div class="experience-no">04</div>
        <h3 class="heading-tertiary experience-heading">Fotode valik & kättesaamine</h3>
        <p class="experience-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt
          ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt
          ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  </section>

  <section class="section-conditions-btn">
    <Button class="conditions-btn" text="Tutvu üldtingimustega" link="/tingimused" variant="btn--dark"/>
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
import Button from "@/components/Button.vue";

export default {
  name: "PriceView",
  components: {Button, Accordion, CTA, Footer},
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
.section-price {
  max-width: 66rem;
  padding: 0 3.2rem;
  margin: 0 auto;
}

.price-text-box {
  max-width: 32rem;
}

.price-heading {
  margin-bottom: 2.4rem;
}

.price-text {
  font-size: 1.6rem;
  line-height: 1.5;
}

.price-img-box {
  justify-self: left;
}

.price-img {
  width: 32rem;
  height: 32rem;
  object-fit: cover;
}

.section-experience {
  padding: 9.6rem 0;
}

.experience-no{

}

.experience-heading {
  margin-bottom: 2.4rem;
}

.experience-text {
  font-size: 1.6rem;
  line-height: 1.5;
}

.section-conditions-btn {
  padding: 9.6rem 0;
  background-color: #F9F8FA;
  display: flex;
  justify-content: center;
}

.section-preparation {
  padding: 9.6rem 0;
}

.preparation-heading {
  text-align: center;
}
</style>