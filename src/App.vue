<template>
    <nav class="nav">
      <NavigationBar/>
    </nav>
    <router-view/>
</template>

<script>
import {defineComponent} from "vue";
import NavigationBar from "@/components/NavigationBar.vue";

export default defineComponent({
  components: {NavigationBar}
})


</script>

<style>
.nav {
  position: fixed;
  width: 100%;
  z-index: 10;
}
</style>