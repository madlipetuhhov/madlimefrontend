<template>
  <!--  todo: smooth transition or moving to an other-->
  <div class="testimonials">
    <figure class="testimonial" v-for="(testimonial, index) in testimonials"
            :key="index" v-show="index === currentTestimonial">
      <img class="testimonial-img" :src="testimonial.img" :alt="testimonial.alt"/>
      <blockquote>
        <p class="testimonial-text">{{ testimonial.text }}</p>
        <p class="testimonial-name">&mdash; {{ testimonial.name }}</p>
      </blockquote>
    </figure>

    <button class="btn btn--left" @click="prevTestimonial">
      <PhCaretLeft :size="32" weight="light" class="btn-icon"/>
    </button>
    <button class="btn btn--right" @click="nextTestimonial">
      <PhCaretRight :size="32" weight="light" class="btn-icon"/>
    </button>

    <div class="pagination">
      <span
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="dot"
          :class="{ active: index === currentTestimonial }"
          @click="goToTestimonial(index)"
      ></span>
    </div>
  </div>
</template>

<script>
import {PhCaretLeft, PhCaretRight} from "@phosphor-icons/vue";

export default {
  name: "Testimonials",
  components: {PhCaretRight, PhCaretLeft},
  data() {
    return {
      currentTestimonial: 0,
      autoRotationInterval: null,
      testimonials: [
        {
          img: require("../assets/img/testimonial/testimonial2.png"),
          alt: "Portrait of client.",
          text: "Test. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem velit, vulputate eu lacus ut, dictum tempor.",
          name: "Mari Maasikas",
        },
        {
          img: require("../assets/img/testimonial/testimonial1.png"),
          alt: "Portrait of client.",
          text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
          name: "Liina Lill",
        },
        {
          img: require("../assets/img/testimonial/testimonial3.png"),
          alt: "Portrait of client.",
          text: "Aliquam tincidunt mauris eu risus. Vivamus egestas tristique nunc.",
          name: "Mai Kuu",
        },
      ],
    }
  },
  methods: {
    nextTestimonial() {
      this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length
    },
    prevTestimonial() {
      this.currentTestimonial =
          (this.currentTestimonial - 1 + this.testimonials.length) % this.testimonials.length
    },
    startAutoRotate() {
      if (!this.autoRotationInterval) {
        this.autoRotationInterval = setInterval(this.nextTestimonial, 5000)
      }
    },
    stopAutoRotate() {
      clearInterval(this.autoRotationInterval)
      this.autoRotationInterval = null
    },
    getTestimonialsInfo() {
      return this.testimonials
    },
    goToTestimonial(index) {
      this.currentTestimonial = index;
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
.testimonials {
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
}

.testimonial {
  display: grid;
  gap: 3.2rem;
  grid-template-columns: 25fr 75fr;
  margin-left: 3.2rem;
  margin-right: 3.2rem;
}

.testimonial-img {
  width: 9.6rem;
  justify-self: right;
}

.testimonial-text {
  font-size: 1.8rem;
  line-height: 1.6;
  margin-bottom: 1.6rem;
}

.testimonial-name {
  font-size: 1.6rem;
}

</style>