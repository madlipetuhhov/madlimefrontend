<template>
  <div class="testimonials">
    <figure class="testimonial">
      <img class="testimonial-img" src="../assets/img/testimonial/testimonial1.png" alt="Portrait of client."/>
      <blockquote>
        <p class="testimonial-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem velit,
          vulputate eu lacus ut, dictum tempor.</p>
        <p class="testimonial-name">&mdash; Mari Maasikas</p>
      </blockquote>
    </figure>


  </div>
</template>

<script>
export default {
  name: "Testimonials"
}
</script>

<style>
.testimonials {
  display: flex;
  justify-content: center;
}

.testimonial {
  display: grid;
  gap: 3.2rem;
  grid-template-columns: 25fr 75fr;
  width: 70%;
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
  color: #9B89A9;
}

</style>