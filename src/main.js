import Vue from 'vue'
/*import Vuex from 'vuex'
import storeConfig from './vuex/store'*/

import VueRouter from 'vue-router'
import RouterConfig from './router/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import  'animate.css/animate.min.css'
import './assets/keke-icon/iconfont.css'//引入自定义的icon
import Vcharts from 't-charts' //全局引入
import App from './App'
import httpUrl from './assets/js/http.js';
import axios from './assets/js/axios.js';
import apiUrl from './assets/js/api.js';

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(Vcharts);

Vue.prototype.$http = axios;
Vue.prototype.httpUrl = httpUrl;
Vue.prototype.apiUrl = apiUrl;
//Vue.use(Vuex);

const router = new VueRouter(RouterConfig);
new Vue({
  el:"#app",
  components: { App },
  template: '<App/>',
  router,
})
