<template>
    <div id="findtop">
        <div>     
            <ul class="myheader">
            
                <router-link to="Findcontent" tag="li">随便晒单</router-link>
                <router-link to="Coverstory" tag="li">封面故事</router-link> 

            </ul>  
            <div class="carts-icon"><i></i> 
                <div class="fix-num">
                    <div class="cart-num">购物车</div>
                    <div class="triangle-right">
                    </div>
                </div>
            </div>
               
        </div> 
     <Findcontent v-if="flag"/>
     <Coverstory v-if="flag"/>
     <router-view></router-view>
    </div>
  
</template>

<script>
import Vuex from 'vuex'
import Findcontent from "../views/find/findcontent"
import Coverstory from "../views/find/coverstory"
export default{
    name:"findtop",
    data(){
        return {
            flag:'true'
        }
    },
    components:{
        Findcontent,
        Coverstory
    },
    methods: {
        ...Vuex.mapActions({
            togglechange:"../store/findpage/togglechange"
        })
    }
}
</script>

<style scoped>
    #findtop{ 
       
        
       
         
    }   
    .myheader{ 
        position: fixed; 
        top: 0;
        left: 0; 
        width: 7.5rem;
        height:.88rem; 
        display:flex;
        padding:0 2.08rem;  
    }
    .myheader>li{   
        flex:1; 
        font-weight:900;
        height:.88rem;
        font-size:.34rem;
        text-align: center;
        margin-top:.3rem;
    }   
    .carts-icon{
        width:.36rem;
        height:.36rem;
        position:absolute;
        left:6rem;
        top:.05rem;
    }
    .router-link-active{
        color:#dd4f14;
    }
</style>