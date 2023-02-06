import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Landing from "../views/Landing.vue";
import ServerResponce from "../views/ServerResponce.vue";
import Callback from "@/components/Callback.vue";
import { requireAuth } from "@/utils/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/home",
    name: "Home",
    beforeEnter: requireAuth,
    component: Home,
  },
  {
    path: "/server",
    name: "ServerResponce",
    beforeEnter: requireAuth,
    component: ServerResponce,
  },
  {
    path: "/callback",
    component: Callback,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

// Router progress bar
router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});
router.afterEach((to, from) => {
  NProgress.done();
});

export default router;
