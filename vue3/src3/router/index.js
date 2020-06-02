import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login.vue'
import Student from '../components/student.vue'
import Zhuanyefuzeren from '../components/zhuanyefuzeren.vue'
import Renkejiaoshi from '../components/renkejiaoshi.vue'
import Fudaoyuan from '../components/fudaoyuan.vue'
import Kechengfuzeren from '../components/kechengfuzeren.vue'

Vue.use(Router)

export default new Router({
  routes: [ 
    {path:'/',redirect:'/login'},
    {path:'/login',component:Login},
    {path:'/student',component:Student},
    {path:'/zhuanyefuzeren',component:Zhuanyefuzeren} ,
    {path:'/renkejiaoshi',component:Renkejiaoshi} ,
    {path:'/fudaoyuan',component:Fudaoyuan},
    {path:'/kechengfuzeren',component:Kechengfuzeren} 
  ]
})