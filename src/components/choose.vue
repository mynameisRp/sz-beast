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
      chooseContent
    }
}
</script>

<style scoped>
     #top{
      margin-top:0.1818rem;
      display: flex;
      justify-content: center
      
    }
    #top img {
      width:0.48rem;
      height:0.48rem;
    }
    #search_input{
      display: flex;
      height:0.68rem;
      border-bottom:0.0533rem solid #000;
      
    }
    #search_input .s_input {
      border:0;
      outline:none;
      width:5.5091rem
    }

  /* 内容区 */
    #content{
      width:100%;
      height:16.1818rem;
      display: flex
      
      /* display: flex;
      flex-direction: row;
      flex-wrap: nowrap */
    }
    #content_left {
      float: left;
      width:2.3rem;
      background-color: #ccc;
      padding:0.3636rem 0.3636rem;
    }
    #content_left ul li {
      font-size: 0.3273rem;
      font-weight: bolder ;
      color:#000;
      height:0.9091rem;
      font-family: Helvetica Neue,Helvetica,sans-serif
    }
    #content_left ul .active {
      font-size: 0.45rem;
      font-weight: 900;

    }
    #content_right {
        width:5.2364rem;
        height:100%;
        background-color: red;
      
    }
</style>