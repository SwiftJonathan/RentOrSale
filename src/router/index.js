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
<<<<<<< HEAD
import Publish from '@/pages/Publish/Publish'
=======
import Personal from '../pages/personal/Personal'
import PersonalInList from '../pages/personalList/PersonalInList'
import PersonalOutList from '../pages/personalList/PersonalOutList'
import Order from '../pages/order/Order'
>>>>>>> 0c8156d17f80fd5a8f8bd211f761f04df42fb002

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
      path: '/rentStuff',
      name: 'RentStuff',
      component: RentStuff
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
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/personalInList',
      name: 'PersonalInList',
      component: PersonalInList
    },
    {
      path: '/personalOutList',
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
