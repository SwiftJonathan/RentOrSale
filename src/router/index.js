import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FirstPage from '@/pages/firstPage/FirstPage'
import Login from '@/pages/login/Login'
import Register from '@/pages/register/Register'
import StuffMessage from '@/pages/stuffMessage/StuffMessage'
import BuyStuff from '@/pages/buyStuff/BuyStuff'
import MyAddressEdit from '@/components/MyAddressEdit'
import MyAddressList from '@/components/MyAddressList'

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
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/stuffMessage',
      name: 'StuffMessage',
      component: StuffMessage
    },
    {
      path: '/buyStuff',
      name: 'BuyStuff',
      component: BuyStuff
    },
    {
      path: '/myAddressEdit',
      name: 'MyAddressEdit',
      component: MyAddressEdit
    },
    {
      path: '/myAddressList',
      name: 'MyAddressList',
      component: MyAddressList
    }
  ]
})
