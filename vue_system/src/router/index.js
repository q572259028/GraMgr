import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login.vue'
import Student from '../components/student.vue'
import Zhuanyefuzeren from '../components/zhuanyefuzeren.vue'

import Renkejiaoshi from '../components/renkejiaoshi.vue'
import Fudaoyuan from '../components/fudaoyuan.vue'
import Kechengfuzeren from '../components/kechengfuzeren.vue'
import Checkgra from '../components/student/checkgra.vue'
import Welcome from '../components/welcome.vue'
import Modify from '../components/renkejiaoshi/modify.vue'
import Setjuzhen from '../components/zhuanyefuzeren/setjuzhen.vue'
import Chaxunjuzhen from '../components/zhuanyefuzeren/chaxunjuzhen.vue'
import Yitongguo from '../components/kechengfuzeren/yitongguo.vue'
import Weitongguo from '../components/kechengfuzeren/weitongguo.vue'
import Daishenhe from '../components/kechengfuzeren/daishenhe.vue'
import Nianjibaobiao from '../components/zhuanyefuzeren/nianjibaobiao.vue'
import Banjibaobiao from '../components/zhuanyefuzeren/banjibaobiao.vue'
import Kechengbaobiao from '../components/zhuanyefuzeren/kechengbaobiao.vue'
import Xijiechaxun from '../components/student/xijiechaxun.vue'
import Zhibiaodianchaxun from '../components/student/zhibiaodianchaxun.vue'
import Kechengpingjiaxize from '../components/student/kechengpingjiaxize.vue'
import Chaxunkecheng from '../components/renkejiaoshi/chaxunkecheng.vue'
import Fdyclass from '../components/fudaoyuan/fdyclass.vue'
import Shangchuan from '../components/renkejiaoshi/shangchuan.vue'
import Fupersonal from '../components/fudaoyuan/fpersonal.vue'
import Shouye from '../components/zhuanyefuzeren/shouye.vue'
import Shouye1 from '../components/renkejiaoshi/shouye1.vue'
import Shouye2 from '../components/fudaoyuan/shouye2.vue'
Vue.use(Router)

export default new Router({
  routes: [ 
    {path:'/',redirect:'/login'},
    {path:'/login',component:Login},
    {path:'/student',component:Student,redirect:'/welcome',
     children:[{path:'/welcome',component:Welcome},
       {
       path:'/checkgra',component:Checkgra,
     }, {path:'/gg34',component:Xijiechaxun},{path:'/zhibiaodianchaxun',component:Zhibiaodianchaxun},{path:'/kechengpingjiaxize',component:Kechengpingjiaxize}]
  },
    {path:'/zhuanyefuzeren',component:Zhuanyefuzeren,redirect:'/shouye',
  children:[{path:'/shouye',component:Shouye},{path:'/setjuzhen',component:Setjuzhen},{path:'/chaxunjuzhen',component:Chaxunjuzhen},
  {path:'/nianjibaobiao',component:Nianjibaobiao},
  {path:'/banjibaobiao',component:Banjibaobiao},{path:'/kechengbaobiao',component:Kechengbaobiao}]
} ,
    {path:'/renkejiaoshi',component:Renkejiaoshi,redirect:'/shouye1',
    children:[{path:'/shouye1',component:Shouye1},{
      path:'/modify',component:Modify
    },{
      path:'/chabiaozhun',component:Chaxunkecheng
    },{
      path:'/shangchuanchengji',component:Shangchuan
    }]
 } ,
    {path:'/fudaoyuan',component:Fudaoyuan, redirect:'/shouye2',children:[{path:'/shouye2',component:Shouye2},{
      path:'/fdyclass',component:Fdyclass
    },{
      path:'/fdynianji',component:Nianjibaobiao
    },{
      path:'/fupersonal',component:Fupersonal
    }]},
    {path:'/kechengfuzeren',component:Kechengfuzeren, children:[{
      path:'/yitongguo',component:Yitongguo
    },{path:'/weitongguo',component:Weitongguo},{path:'/daishenhe',component:Daishenhe}]} 
  ]
})