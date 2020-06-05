<template>
  <div id="app">
    <main-navbar />
    <router-view class="mt-5" />
  </div>
</template>

<script>
import Vue from "vue";

import mainNavbar from "src/main-navbar/main-navbar.vue";

export default Vue.extend({
  name: "App",
  components: { mainNavbar },
});
</script>
