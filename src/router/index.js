import Vue from 'vue'
import Router from 'vue-router'
import Choose from './choose/index'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [Choose]
})
