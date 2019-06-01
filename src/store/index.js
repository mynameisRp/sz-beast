import Vue from 'vue'
import Vuex from 'vuex'
import choose from './choose/index'
Vue.use(Vuex)

export default new Vuex.Store({
      modules:{
        choose
      }
})
