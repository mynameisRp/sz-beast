import Vue from 'vue'
import Vuex from 'vuex'
import findpage from './findpage'
import story from './story'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    findpage,
    story
  }
})
