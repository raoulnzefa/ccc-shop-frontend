import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from "axios";
import { host } from "@/config/config";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = host;
axios.defaults.headers.common["Content-Type"] = "multipart/form-data";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
