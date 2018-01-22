import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home', //个人主页
      name: 'home',
      component: resolve => require(['@/components/home'], resolve)
    }
  ]
})