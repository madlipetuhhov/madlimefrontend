<template>
  <div class="home">
    <section class="section-hero">
      <div>
        <Hero ref="heroRef"/>
      </div>
    </section>

    <section class="section-menu">
      <div class="container grid grid--3-cols">
        <div class="menu-box">
          <a class="menu-no" href="/portfoolio">1</a>
          <a class="heading-secondary menu-link" href="/portfoolio">Tutvu loominguga</a>
        </div>
        <div class="menu-box">
          <a class="menu-no" href="/hind">2</a>
          <a class="heading-secondary  menu-link" href="/hind">Vaata hindasid</a>
        </div>
        <div class="menu-box">
          <a class="menu-no" href="/kontakt">3</a>
          <a class="heading-secondary  menu-link" href="/kontakt">Võta ühendust</a>
        </div>
      </div>
    </section>

    <section class="section-gallery">
        <GalleryHome/>
    </section>

    <section class="section-testimonials">
        <h2 class="subheading heading-center">Head sõnad klientidelt</h2>
        <Testimonials ref="testimonialsRef"/>
    </section>

    <section class="section-cta">
      <CTA img="cta1.png"
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
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Testimonials from "@/components/Testimonials.vue";
import CTA from "@/components/CTA.vue";
import Footer from "@/components/Footer.vue";
import GalleryHome from "@/components/GalleryHome.vue";

export default {
  name: 'HomeView',
  components: {GalleryHome, Footer, CTA, Testimonials, Hero},
  data() {
    return {
      testimonialsInfo: [],
      heroInfo: []
    }
  },
  methods: {
    getTestimonialsInfoFromComponent() {
      this.testimonialsInfo = this.$refs.testimonialsRef.getTestimonialsInfo()
    },

    getHeroSlidesInfoFromComponent() {
      this.heroInfo = this.$refs.heroRef.getHeroInfo()
    },
  },
  mounted() {
    this.getTestimonialsInfoFromComponent()
    this.$refs.testimonialsRef.startAutoRotate()
    this.getHeroSlidesInfoFromComponent()
    this.$refs.heroRef.startAutoRotate()
  }
}
</script>

<style>
.section-hero {
  z-index: 1;
  width: 100vw;
  overflow-x: hidden;
}

.section-menu {
  padding: 9.6rem 0 0 0;
}

.menu-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.menu-link:link,
.menu-link:visited,
.menu-no:link,
.menu-no:visited {
  display: inline-block;
  text-decoration: none;
  transition: all 0.4s;
}

.menu-no:link,
.menu-no:visited {
  color: #D1D6CC;
  font-weight: 700;
  font-size: 6.2rem;
  margin-bottom: 1.2rem;
}

.menu-box:hover .menu-no,
.menu-box:hover .menu-link,
.menu-box:active .menu-no,
.menu-box:active .menu-link {
  color: #647656;
}

.section-gallery {
  padding: 9.6rem 0;
}

.section-testimonials {
  padding: 9.6rem 0;
}

</style>
