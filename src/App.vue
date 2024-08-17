<template>
  <div class="header">
    <nav class="nav">
      <NavigationBar/>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import NavigationBar from "@/components/NavigationBar.vue";

export default defineComponent({
  components: {NavigationBar}
})


</script>

<style>
.header {
  position: relative;
}

.nav {
  position: fixed;
  width: 100%;
  z-index: 10;
}
</style>