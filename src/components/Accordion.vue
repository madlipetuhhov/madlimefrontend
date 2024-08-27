<template>
  <component class="accordion">
    <div class="container">
      <div class="accordion-item" v-for="(item, index) in accordionItems" :key="index">
        <div :class="['accordion-header', variant]" @click="openSection(index)">
          <h3 class="heading-tertiary">{{ item.title }}</h3>
          <button v-if="activeIndex !== index" class="caret caret--down">
            <PhCaretDown :size="32" weight="light" class="caret-icon"/>
          </button>
          <button v-if="activeIndex === index" class="caret caret--up">
            <PhCaretUp :size="32" weight="light" class="caret-icon"/>
          </button>
        </div>
        <div v-show="activeIndex === index" class="accordion-text">
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
  </component>
</template>

<script>
import {PhCaretDown, PhCaretUp} from "@phosphor-icons/vue";

export default {
  name: "Accordion",
  components: {PhCaretUp, PhCaretDown},
  props: {
    variant: {type: String, default: 'accordion--lilac'},
    accordionItems: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeIndex: null,
    };
  },
  methods: {
    openSection(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
};
</script>

<style>
.accordion-item {
  margin-bottom: 10px;
}

.accordion-header {
  position: relative;
  padding: 1.6rem;
}

.accordion-text {
  font-size: 1.8rem;
  line-height: 1.5;
  padding: 1.6rem 6.4rem 1.6rem 1.6rem;
}

.caret--down, .caret--up {
  top: 50%;
  right: 1.6rem;
  transform: translateY(-50%);
}

.accordion--lilac{
  background-color: #F5F3F6;
}

.accordion--green{
  background-color: #F0F1EE;
}

</style>
