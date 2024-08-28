<template>
<!--  todo: smooth transition-->
  <div class="hero" id="hero">
    <figure class="hero-slide" v-for="(hero, index) in slides"
            :key="index" v-show="index === currentSlide">
      <img class="hero-img" :src="hero.img" :alt="hero.alt"/>
    </figure>

    <button class="caret caret--left hero-btn" @click="prevSlide">
      <PhCaretLeft :size="32" weight="light" class="caret-icon"/>
    </button>
    <button class="caret caret--right hero-btn" @click="nextSlide">
      <PhCaretRight :size="32" weight="light" class="caret-icon"/>
    </button>

    <div class="pagination hero-pagination">
      <span
          v-for="(hero, index) in slides"
          :key="index"
          class="pagination-dot"
          :class="{ active: index === currentSlide }"
          @click="goToSlide(index)"
      ></span>
    </div>
  </div>

</template>

<script>
import {PhCaretLeft, PhCaretRight} from "@phosphor-icons/vue";

export default {
  name: "Hero",
  components: {PhCaretRight, PhCaretLeft},
  data() {
    return {
      currentSlide: 0,
      autoRotationInterval: null,
      slides: [
        {
          img: require("../assets/img/hero/hero1.png"),
          alt: "Hero photo."
        },
        {
          img: require("../assets/img/hero/hero2.png"),
          alt: "Hero photo."
        },
        {
          img: require("../assets/img/hero/hero3.png"),
          alt: "Hero photo."
        },
      ],
    }
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length
    },
    prevSlide() {
      this.currentSlide =
          (this.currentSlide - 1 + this.slides.length) % this.slides.length
    },
    startAutoRotate() {
      if (!this.autoRotationInterval) {
        this.autoRotationInterval = setInterval(this.nextSlide, 5000)
      }
    },
    stopAutoRotate() {
      clearInterval(this.autoRotationInterval)
      this.autoRotationInterval = null
    },
    getHeroInfo() {
      return this.slides
    },
    goToSlide(index) {
      this.currentSlide = index;
    },
  },
  mounted() {
    this.startAutoRotate()
  },
  beforeUnmount() {
    this.stopAutoRotate()
  }
}
</script>

<style>
.hero {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 1;
}

.hero-slide{
  transition: transform 1s ease;
}

.hero-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-pagination {
  position: absolute;
  bottom: 3.2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.hero .caret--left {
  left: 4rem;
}

.hero .caret--right {
  right: 4rem;
}

</style>