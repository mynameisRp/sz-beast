import Vue from 'vue'
import Router from 'vue-router'
import findtop from "../components/findtop"
import findcontent from "../views/find/findcontent"
import coverstroy from "../views/find/coverstory"


Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path:"/",
      component:findtop
    },
    {
      path:"/findcontent",
      component:findcontent
    },
    {
      path:"/coverstroy",
      component:coverstroy
    },
  ]
})
