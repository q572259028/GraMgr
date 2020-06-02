import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'

import axios from 'axios'
//配置请求根路径


/*
    参数解释:
        1. devUrl  :  开发环境中请求的后台url
        2. propUrl :  生产环境中请求的后台url
*/ 
Vue.prototype.$http=axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
