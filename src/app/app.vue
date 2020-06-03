<template>
  <div id="app">
    <main-navbar></main-navbar>
    <router-view class="mt-5" />
  </div>
</template>

<script>
import mainNavbar from "src/main-navbar/main-navbar.vue";

export default {
  name: "app",
  components: { mainNavbar },
};
</script>
