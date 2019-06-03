<template>
    <div id = "app">
        <div v-for="(item, index) in list" :key="index">
            <img :src='item.image.src' />
            <span>{{item.title}}</span>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'
import axios from 'axios'
import {get} from '../store/choose/get'
export default {
    computed: {
        ...Vuex.mapState({
            routerIndex:state=>state.choose.routerIndex,
            listArr:state=>state.choose.chooseList
        })
    },
    created(){
        
        console.log(this.routerIndex)
        this.list = JSON.parse(localStorage.getItem('666'))[this.routerIndex].data.subCategory 
        
    },
    computed: {
        ...Vuex.mapState({
            routerIndex:state=>state.choose.routerIndex
        })
    },
   data(){
       return{
           list:[],
           index:-1
       }
   },
   watch:{
       "routerIndex"(){
           this.list = JSON.parse(localStorage.getItem('666'))[this.routerIndex].data.subCategory
       }
   }
}
</script>


<style scoped>
    #app div {
        display:inline-block;
        padding-left:0.06rem;
        position:relative
    }
    #app div img {
        width:2.45rem;
        height:3.4545rem
    }
    span {
        position:absolute;
        top:0.1818rem;
        left:0.1818rem;
        color:#fff;
        font-family: Helvetica Neue,Helvetica,sans-serif;
        font-size:0.2909rem
    }
</style>


