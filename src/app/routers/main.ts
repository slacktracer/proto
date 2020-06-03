import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: (): any =>
      import(/* webpackChunkName: "home" */ "src/home/home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: (): any =>
      import(/* webpackChunkName: "about" */ "src/about/about.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
