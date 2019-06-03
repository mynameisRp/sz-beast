<template>
    <div>
         
        <div id="app">
          <chooseTop/>
          <chooseContent/>
          
        </div>
    </div>
</template>
<script>
import Vuex from 'vuex'
import axios from 'axios'
import {get} from '../store/choose/get'
import chooseTop from './chooseTop'
import chooseContent from './chooseContent'
import chooseMore from './chooseMore'

export default {
    created(){
       this.getChooseIndex()
       
    },

    mounted() {
      console.log(this.list)
    }, 
  
    methods: {
        ...Vuex.mapActions({
            getChooseIndex:'choose/getChooseIndex',
            
        }),
        
    },
    computed: {
      ...Vuex.mapState({
        list:state=>state.choose.chooseList
      })
    },
    data(){
      return {
          chooseList:{},
          b:123
      }
    },
    components:{
      chooseTop,
      chooseContent,
      chooseMore
    }
}
</script>

<style scoped>
    
</style>