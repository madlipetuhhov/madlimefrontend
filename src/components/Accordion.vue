<template>
  <div class="accordion">
    <div class="accordion-item" v-for="(item, index) in accordionItems" :key="index">
      <div class="" @click="openSection(index)">
        <h3 class="heading-tertiary">{{ item.title }}</h3>
      </div>
      <div v-show="activeIndex === index" class="accordion-content">
        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  props: {
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
  padding: 10px;
  background-color: #f7f7f7;
  cursor: pointer;
  border-bottom: 1px solid #ccc;
}
.accordion-content {
  padding: 10px;
  background-color: #fff;
}
</style>
