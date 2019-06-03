<template>
    <div>
        <div id = "content">
            <div id = "content_left">
                <ul>
                    
                    <li v-for="(item, index) in list" :key="index" :ref='index'
                   @click="getRouteindex(index,$event)"><span>{{item.data.title}}</span></li>
                </ul>
            </div>
            <div id = "content_right">
                <chooseMore/>
            </div>
        </div>
    </div>
</template>
<script>
import  Vuex from 'vuex'
<<<<<<< Updated upstream
import Bus from '../untils/bus'
=======
import chooseMore from './chooseMore'
>>>>>>> Stashed changes
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
        ,
        getRouteindex(index,e){
          var parent = e.target.parentNode ;
          this.getRouteIndex(index)
        }
           
    },
    computed: {
      ...Vuex.mapState({
        list:state=>state.choose.chooseList,
        routerIndex:state=>state.choose.routerIndex
      })
    },
    data(){
      return {
          chooseList:{},
          b:123
      }
    },
    components:{
      chooseMore
    },
    watch:{
        'routerIndex'(newV,old){
          console.log(this.$refs[this.routerIndex])
          this.$refs[this.routerIndex][0].className = 'active',
          this.$refs[old][0].className = ''
        }
    }
}
</script>


<style  scpoed>
     #content{
      width:100%;
      height:11.3rem;
      display: flex;
      padding-top:0.1818rem
      /* display: flex;
      flex-direction: row;
      flex-wrap: nowrap */
    }
    #content_left {
      float: left;
      width:2.5rem;
      background-color: #fff;
      padding:0.1818rem 0.3636rem;
      height:12rem;
      
    }
    #content_left ul li {
      margin-top:0.1818rem;
      font-size: 0.3273rem;
      font-weight: bolder ;
      color:#000;
      height:0.7rem;
      font-family: Helvetica Neue,Helvetica,sans-serif
    }
    #content_left ul .active {
      font-size: 0.4rem;
      font-weight: 900;
      border-bottom:0.0545rem solid #000;
      display:inline-block
    }
    #content_right {
        width:5.2364rem;
        height:100%;
        background-color: #fff;
        overflow:auto
      
    }
</style>