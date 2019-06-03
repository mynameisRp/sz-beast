import Vue from 'vue'
import Vuex from 'vuex'
import Home from './home'
import choose from './choose/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    Home,
    choose
  }
})
