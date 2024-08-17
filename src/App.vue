<template>
  <header class="header">
    <nav>
      <NavigationBar/>
    </nav>
    <router-view/>
  </header>
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
  height: 9.6rem;
  padding: 3.2rem 4.8rem;
}

</style>