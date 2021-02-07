<template>
  <div class="container">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header
  }

}
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

</style>
