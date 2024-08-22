<template>
  <div class="cta">
    <div class="cta-img-box">
      <img class="cta-img" :src="require(`@/assets/img/cta/${img}`)" :alt="alt"/>
    </div>
    <div class="container cta-content">
      <div class="cta-text-btn-box">
        <div class="cta-text-box">
          <p class="cta-text" :style="{ color: textColor }">{{ text }}</p>
        </div>
        <div class="cta-btn">
          <Button :link="link" :variant="btnVariant">{{ btnText }}</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "CTA",
  components: {Button},
  props: {
    img: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: "CTA image",
    },
    text: {
      type: String,
      required: true,
    },
    textColor: {
      type: String,
      default: "#F9F8FA",
    },
    btnText: {
      type: String,
      required: true,
    },
    btnVariant: {
      type: String,
      default: "btn--light"
    },
    link: {
      type: String,
      required: true,
    }
  },
}
</script>

<style>
.cta {
  position: relative;
}

.cta-img-box {
  width: 100%;
  overflow: hidden;
}

.cta-img {
  width: 100%;
  height: 50rem;
  object-fit: cover;
}

.cta-content {
  position: absolute;
  top: 50%;
  right: 0;
  left:0;
  transform: translateY(-50%);
  width: 100%;
}

.cta-text-btn-box {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4.8rem;
  max-width: 120rem;
  padding-right: 3.2rem;
}

.cta-text {
  font-size: 2rem;
  font-weight: 400;
}

.cta-btn {
  text-decoration: none;
}


</style>
