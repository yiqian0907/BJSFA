import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VeeValidate from "vee-validate";
import { Loadmore, Picker, Popup } from "mint-ui";

import "./lib/hotcss";

import "mint-ui/lib/style.css";
import "./lib/common.scss";

Vue.config.productionTip = false;
Vue.use(VeeValidate);
Vue.component(Loadmore.name, Loadmore);
Vue.component(Picker.name, Picker);
Vue.component(Popup.name, Popup);

router.beforeEach((to, from, next) => {
  if (to.path != "/") {
    if (!store.state.loginUser) {
      next("/");
    } else {
      next();
    }
  }
  next();
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
