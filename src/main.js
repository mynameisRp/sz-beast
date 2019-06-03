import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'
import store from './store/index'
import axios from 'axios'
import bscroll from './BScroll/bscroll'

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  bscroll,
  // find,
  render: h => h(App)
}).$mount('#app')
