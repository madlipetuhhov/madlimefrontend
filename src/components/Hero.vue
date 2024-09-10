<template>
  <div class="hero" id="hero">
    <div class="hero-slides">
      <figure class="hero-slide" :key="currentSlide">
        <img class="hero-img" :src="slides[currentSlide].img" :alt="slides[currentSlide].alt" />
      </figure>
    </div>

    <div class="container">
      <button class="icon caret--left hero-btn" @click="prevSlide">
        <PhCaretLeft :size="32"/>
      </button>
      <button class="icon caret--right hero-btn" @click="nextSlide">
        <PhCaretRight :size="32"/>
      </button>
    </div>

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
        this.autoRotationInterval = setInterval(this.nextSlide, 8000)
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
}

.hero-slides {
  display: flex;
  transition: transform 3s ease-in-out;
  width: 100%;
  height: 100%;
}

.hero-slide {
  flex: 0 0 100%;
  height: 100%;
}


.hero-img {
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