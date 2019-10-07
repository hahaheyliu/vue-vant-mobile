import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import faskClick from "fastclick";
import 'styles/reset.css';
import 'styles/border.css';
import 'amfe-flexible';
import {Button} from "vant";
Vue.use(Button);

Vue.config.productionTip = false;
faskClick.attach(document.body);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
