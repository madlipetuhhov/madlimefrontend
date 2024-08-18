<template>
  <div class="testimonials">
    <figure class="testimonial" v-for="(testimonial, index) in testimonials"
            :key="index" v-show="index === currentTestimonial">
      <img class="testimonial-img" :src="testimonial.img" :alt="testimonial.alt"/>
      <blockquote>
        <p class="testimonial-text">{{ testimonial.text }}</p>
        <p class="testimonial-name">&mdash; {{ testimonial.name }}</p>
      </blockquote>
    </figure>

    <button class="btn btn--left" @click="previousTestimonial">
      <PhCaretLeft :size="32" weight="light" class="btn-icon"/>
    </button>
    <button class="btn btn--right" @click="nextTestimonial">
      <PhCaretRight :size="32" weight="light" class="btn-icon"/>
    </button>

    <div class="testimonial-pagination">
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
      autoRotateInterval: null,
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
    previousTestimonial() {
      this.currentTestimonial =
          (this.currentTestimonial - 1 + this.testimonials.length) % this.testimonials.length
    },
    startAutoRotate() {
      if (!this.autoRotateInterval) {
        this.autoRotateInterval = setInterval(this.nextTestimonial, 5000)
      }
    },
    stopAutoRotate() {
      clearInterval(this.autoRotateInterval)
      this.autoRotateInterval = null
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

.testimonial-pagination {
  display: flex;
  justify-content: center;
  margin-top: 2.4rem;
}

.dot {
  width: 1rem;
  height: 1rem;
  margin: 0 0.8rem;
  background-color: #9B89A9;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dot.active {
  background-color: #1F1B22
}

.btn {
  cursor: pointer;
  position: absolute;
  background: transparent none;
  border: none;
  outline: none;
}

.btn:hover {
  color: #9B89A9;
}

.btn--left {
  left: 1rem;
  top: 50%;
  transform: translate(-50%, -50%);
}

.btn--right {
  right: 1rem;
  top: 50%;
  transform: translate(50%, -50%);
}

.btn-icon {
  stroke: #1F1B22;
}

</style>