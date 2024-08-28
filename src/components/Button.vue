<template>
  <component
      :is="link ? 'RouterLink' : 'a'"
      :class="['btn', variant, { 'is-disabled': disabled }]"
      :disabled="disabled && !link"
      :href="isExternalLink ? link : undefined"
      :to="!isExternalLink ? link : undefined"
      :target="isExternalLink ? '_blank' : undefined"
      v-bind="$attrs"
      @click="handleClick"
  >
    <slot :text="text">{{ text }}</slot>
  </component>
</template>

<script>
import {RouterLink} from "vue-router";

export default {
  name: 'Button',
  components: {RouterLink},
  props: {
    variant: {type: String, default: 'btn--light'},
    disabled: {type: Boolean, default: false},
    text: {type: String, default: 'Button'},
    link: {type: String, default: ''},
  },
  computed: {
    isExternalLink() {
      return this.link && /^http/.test(this.link)
    }
  },
  methods: {
    handleClick(event) {
      if (!this.disabled && !this.link) {
        this.$emit('event-btn-click', event)
      }
    }
  },
};
</script>

<style>
.btn,
.btn:link,
.btn:visited {
  display: inline-block;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 400;
  text-transform: uppercase;
  padding: 1.6rem 3.2rem;
  transition: all 0.4s;
  border: none;
  cursor: pointer;
  background: none;
  color: #F9F8FA;
}

.btn--light,
.btn--light:link,
.btn--light:visited {
  color: #F9F8FA;
  box-shadow: 0 0 0 2px #F9F8FA;
}

.btn--light:hover,
.btn--light:active {;
  background-color: #647656;
}

.btn--medium,
.btn--medium:link,
.btn--medium:visited {
  color: #9B89A9;
  box-shadow: 0 0 0 2px #9B89A9;
}

.btn--medium:hover,
.btn--medium:active {
  background-color: #1F1B22;
}

.btn--dark,
.btn--dark:link,
.btn--dark:visited {
  color: #1F1B22;
  box-shadow: 0 0 0 2px #1F1B22;
}

.btn--dark:hover,
.btn--dark:active {
  background-color: #9B89A9;
}

/* Disabled */
.is-disabled {
  color: #9A9A9A;
  box-shadow: 0 0 0 2px #9A9A9A;
  cursor: not-allowed;
}
</style>