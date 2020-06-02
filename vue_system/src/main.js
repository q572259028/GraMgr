import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import echarts from 'echarts'

//配置请求根路径

import axios from 'axios';
import VueAxios from 'vue-axios'
import XLSX from 'xlsx'
Vue.prototype.$http = axios;
Vue.use(VueAxios,axios)
/*
    参数解释:
        1. devUrl  :  开发环境中请求的后台url
        2. propUrl :  生产环境中请求的后台url
*/ 


Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
