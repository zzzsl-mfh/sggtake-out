//路由器对象模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Msite from '../pages/Msite/Msite.vue'
import Login from '../pages/Login/Login.vue'

//声明使用插件
Vue.use(VueRouter)
export default new VueRouter({
  //所有的路由
  routes:[
    {
      path:'/search',
      component: Search,
	  meta:{
		  showFooter:true
	  }
    },
    {
      path:'/login',
      component:  Login
    },
    {
      path:'/profile',
      component: Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/order',
      component: Order,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/msite',
      component: Msite,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/',
      redirect:'/msite',
    }
  ]
})
