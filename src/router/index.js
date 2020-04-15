import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FirstPage from '@/pages/firstPage/FirstPage'
import Login from '@/pages/login/Login'
import StuffList from '@/pages/StuffList/StuffList'
import Register from '@/pages/register/Register'
import StuffMessage from '@/pages/stuffMessage/StuffMessage'
import BuyStuff from '@/pages/buyStuff/BuyStuff'
import RentStuff from '@/pages/buyStuff/RentStuff'
import MyAddressEdit from '@/components/MyAddressEdit'
import MyAddressList from '@/components/MyAddressList'
import Publish from '@/pages/Publish/Publish'
import Personal from '../pages/personal/Personal'
import PersonalInList from '../pages/personalList/PersonalInList'
import PersonalOutList from '../pages/personalList/PersonalOutList'
import Order from '../pages/order/Order'

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
      path: '/publish',
      name: 'Publish',
      component: Publish
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
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/stuff-message',
      name: 'StuffMessage',
      component: StuffMessage
    },
    {
      path: '/buy-stuff',
      name: 'BuyStuff',
      component: BuyStuff
    },
    {
      path: '/rent-stuff',
      name: 'RentStuff',
      component: RentStuff
    },
    {
      path: '/my-address-edit',
      name: 'MyAddressEdit',
      component: MyAddressEdit
    },
    {
      path: '/my-address-list',
      name: 'MyAddressList',
      component: MyAddressList
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/personal-in-list',
      name: 'PersonalInList',
      component: PersonalInList
    },
    {
      path: '/personal-out-list',
      name: 'PersonalOutList',
      component: PersonalOutList
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    }
  ]
})
