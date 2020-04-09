import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FirstPage from '@/pages/firstPage/FirstPage'
import Login from '@/pages/login/Login'
import StuffList from '@/pages/StuffList/StuffList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/first-page',
      name: 'FirstPage',
      component: FirstPage
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/stuff-list',
      name: 'StuffList',
      component: StuffList
    }
  ]
})
