import Vue from "vue";

import App from "./app/app.vue";
import router from "./app/router";
import store from "./app/store";

new Vue({
  router,
  store,
  render: (h): any => h(App),
}).$mount("#app");

function stuff(value: number, other: string): string {
  value;
  other;
  return "test";
}

console.log(stuff(2, "34"));
