import Vue from 'vue'
import Router from 'vue-router'

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
      name: "Home",
      meta: {
        tabFlag:true
      },  
      component: ()=>import("@/views/home/index")
    },
    {
      path: "/choose",
      name: "Choose",
      meta: {
        tabFlag: true
      },
      component: () => import("@/views/home/index")
    },
    {
      path: "/find",
      name: "Find",
      meta: {
        tabFlag: true
      },
      component: () => import("@/views/home/index")
    },
    {
      path: '/shop',
      name: "Shop",
      meta: {
        tabFlag: true
      },
      component: () => import("@/views/home/index")
    },
    {
      path: "/mine",
      name: "Mime",
      meta: {
        tabFlag: false
      },
      component: () => import("@/views/home/index")
    }
  ]
})
