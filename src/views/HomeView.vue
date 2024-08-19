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
          <a class="menu-nr" href="/portfoolio">01</a>
          <a class="menu-link" href="/portfoolio">Tutvu loominguga</a>
        </div>
        <div class="menu-box">
          <a class="menu-nr" href="/hind">02</a>
          <a class="menu-link" href="/hind">Vaata hindasid</a>
        </div>
        <div class="menu-box">
          <a class="menu-nr" href="/kontakt">03</a>
          <a class="menu-link" href="/kontakt">Võta ühendust</a>
        </div>
      </div>
    </section>

    <section class="section-gallery">
      <div class="home-gallery">
        <Gallery/>
      </div>
    </section>

    <section class="section-testimonials">
      <div class="container">
        <span class="subheading testimonial-heading">Head sõnad klientidelt</span>
        <Testimonials ref="testimonialsRef"/>
      </div>
    </section>

    <section class="section-cta">
      <div>
        <CTA/>
      </div>
    </section>

  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Gallery from "@/components/Gallery.vue";
import Testimonials from "@/components/Testimonials.vue";
import CTA from "@/components/CTA.vue";

export default {
  name: 'HomeView',
  components: {CTA, Testimonials, Gallery, Hero},
  data() {
    return {
      testimonialsInfo: [],
      heroInfo:[]
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
}

.section-menu {
  padding: 9.6rem 0;
}

.menu-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.menu-link:link,
.menu-link:visited,
.menu-nr:link,
.menu-nr:visited {
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.4s;
}

.menu-link:link,
.menu-link:visited {
  color: #1F1B22;
  font-weight: 500;
  font-size: 1.8rem;
}

.menu-nr:link,
.menu-nr:visited {
  color: #E1DCE5;
  font-weight: 700;
  font-size: 6.2rem;
  margin-bottom: 1.2rem;
}

.menu-link:hover,
.menu-link:active,
.menu-nr:hover,
.menu-nr:active {
  color: #6D6076;
}

.section-gallery {
  padding: 9.6rem 0;
}

.section-testimonials {
  padding: 9.6rem 0;
  //background-color: #F9F8FA;
}

.testimonial-heading {
  text-align: center;
}

.section-cta {
  padding: 9.6rem 0;
}


</style>
