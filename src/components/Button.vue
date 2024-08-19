<template>
  <button
      :class="['btn', variant, { 'is-disabled': disabled }]"
      :disabled="disabled"
      @click="onClick"
  >
    <slot :text="text">{{ text }}</slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    variant: {type: String, default: "btn--light"},
    disabled: {type: Boolean, default: false},
    text: {type: String, default: "Default Text"},
  },
  methods: {
    onClick(event) {
      if (!this.disabled) {
        this.$emit("event-btn-click", event);
      }
    },
  },
};
</script>

<style>
.btn,
.btn:link,
.btn:visited {
  display: inline-block;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 500;
  text-transform: uppercase;
  padding: 1.6rem 3.2rem;
  transition: all 0.4s;
  border: none;
  cursor: pointer;
  background: none;
  color: #F9F8FA;
  box-shadow: 0 0 0 2px #F9F8FA;
}

.btn--light:link,
.btn--light:visited {
  color: #F9F8FA;
  box-shadow: 0 0 0 2px #F9F8FA;
}

.btn--light:hover,
.btn--light:active {;
  background-color: #647656;
}

.btn--dark:link,
.btn--dark:visited {
  color: #1F1B22;
  box-shadow: 0 0 0 2px #1F1B22;
}

.btn--dark:hover,
.btn--dark:active {
  color: #F9F8FA;
  box-shadow: 0 0 0 2px #F9F8FA;
}

/* Disabled */
.is-disabled {
  color: #8F8F8F;
  box-shadow: 0 0 0 2px #8F8F8F;
  cursor: not-allowed;
}
</style>