import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import vuetify from './plugins/vuetify'
import axios from "axios";
import { host } from "@/config/config";

/*import VueRouter from 'vue-router'*/

/*import AreaExample from './components/AreaExample'*/
/*import BarExample from './charts/BarExample'
import ColumnExample from './charts/ColumnExample'
import ScatterExample from './charts/ScatterExample'
import MixedExample from './charts/MixedExample'
import DonutExample from './charts/DonutExample'
import RadialBarExample from './charts/RadialBarExample'
import BubbleExample from './charts/BubbleExample'
import HeatmapExample from './charts/HeatmapExample'
import LineExample from './charts/LineExample'*/
import VueApexCharts from '../dist/vue-apexcharts';

Vue.component('apexchart', VueApexCharts)

/*Vue.use(VueRouter)*/
/*const routes = [
  { path: '/area', component: AreaExample },
  { path: '/bar', component: BarExample },
  { path: '/column', component: ColumnExample },
  { path: '/mixed', component: MixedExample },
  { path: '/scatter', component: ScatterExample },
  { path: '/donut', component: DonutExample },
  { path: '/radialbar', component: RadialBarExample },
  { path: '/bubble', component: BubbleExample },
  { path: '/heatmap', component: HeatmapExample },
  { path: '/line', component: LineExample }
]*/

/*const routerForCharts = new VueRouter({
  routes: routes
})*/

axios.defaults.withCredentials = true;
axios.defaults.baseURL = host;
axios.defaults.headers.common["Content-Type"] = "multipart/form-data";

Vue.config.productionTip = false

new Vue({
  /*routerForCharts,*/
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
