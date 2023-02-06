import Vue from "vue";
import store from "@/store";
import App from "./App.vue";
import router from "./router";
import VueCarousel from "vue-carousel";
import Spinner from "vue-simple-spinner";

Vue.use(VueCarousel);
Vue.component("vue-simple-spinner", Spinner);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount("#app");
