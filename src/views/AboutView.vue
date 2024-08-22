<template>
  <section class="section-about">
    <div class="container grid grid--2-cols">
      <section class="about-text-box">
        <p class="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est
          laborum.</p>
        <p class="about-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est
          laborum.</p>
      </section>
      <img class="about-img" src="../assets/img/other/contactpic.jpg" alt="Photo of photographer Madli."/></div>
  </section>

  <section class="section-instagram">
    <InstagramFeed/>
  </section>

  <section class="section-cta">
    <CTA img="cta2.png"
         alt="Photo of beautiful nature."
         text="Loodusest inspireeritud fotograafia."
         btnText="Tutvu loominguga"
         btnVariant="btn--dark"
         textColor="#1F1B22"
         link="/portfoolio"/>
  </section>

  <div class="section-footer">
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import CTA from "@/components/CTA.vue";
import InstagramFeed from "@/components/InstagramFeed.vue";

export default {
  name: "AboutView",
  components: {InstagramFeed, CTA, Footer}
}
</script>

<style>
.section-about {
  padding: 12.8rem 0;
}

.about-text-box {
  font-size: 1.8rem;
  line-height: 1.5;
}

.about-text{
  margin-bottom: 2.4rem;
}

.about-img{
  width: 100%;
}

</style>