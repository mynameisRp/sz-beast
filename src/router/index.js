import Vue from 'vue'
import Router from 'vue-router'
import Index from './home'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: "/",
      redirect: "/index"
    },
    {
      path: "/index",
      component: ()=>import("@/views/home/index")
    }
  ]
})
