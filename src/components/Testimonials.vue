<template>
  <!--  todo: smooth transition or moving to an other-->
  <div class="container testimonials">
    <figure class="testimonial" v-for="(testimonial, index) in testimonials"
            :key="index" v-show="index === currentTestimonial">
      <img class="testimonial-img" :src="testimonial.img" :alt="testimonial.alt"/>
      <blockquote>
        <p class="testimonial-text">{{ testimonial.text }}</p>
        <p class="testimonial-name">&mdash; {{ testimonial.name }}</p>
      </blockquote>
    </figure>

    <div class="container">
      <button class="icon caret--left" @click="prevTestimonial">
        <PhCaretLeft :size="32"/>
      </button>
      <button class="icon caret--right" @click="nextTestimonial">
        <PhCaretRight :size="32"/>
      </button>
    </div>

    <div class="pagination">
      <span
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="pagination-dot"
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
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem velit, vulputate eu lacus ut.",
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
    goToTestimonial(index) {
      this.currentTestimonial = index;
    },
    getTestimonialsInfo() {
      return this.testimonials
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
  align-items: center;
  flex-direction: column;
  position: relative;
}

.testimonial {
  display: grid;
  gap: 3.2rem;
  grid-template-columns: 25fr 75fr;
  max-width: 70rem;
  margin-left: 3.2rem;
  margin-right: 3.2rem;
  padding: 4.8rem;
  background-color: #F5F3F6;
}

.testimonial-img {
  width: 9.6rem;
  justify-self: left;
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