import Vue from 'vue'
import Router from 'vue-router'
import Choose from './choose/index'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      redirect: "/index"
    },
    {
      path: "/index",
      name: "Index",
      meta: {
        tabBarFlag: true
      },
      component: ()=>import("@views/home/index")
    },
    Choose
  ]
})
