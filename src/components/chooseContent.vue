<template>
    <div>
        <div id = "content">
            <div id = "content_left">
                <ul>
                    <router-link 
                    v-for="(item, index) in list" :key="index" tag="li" to="/choose/more"
                   @click.native="getRouteIndex(index)"
                    >{{item.data.title}}</router-link>
                    
                </ul>
            </div>
            <div id = "content_right">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import  Vuex from 'vuex'
import Bus from '../untils/bus'
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
        ...Vuex.mapMutations({
           getRouteIndex:'choose/getRouteIndex'
        })
           
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
}
</script>


<style  scpoed>
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