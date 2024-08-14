<template>
  <nav>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>