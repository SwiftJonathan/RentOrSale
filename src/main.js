// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Ionic from '@ionic/vue'
import store from './store/index.js'
import mutations from './store//mutations'

Vue.config.productionTip = false;
// Vue.use(Ionic);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  mutations,
  components: { App },
  template: '<App/>'
})
