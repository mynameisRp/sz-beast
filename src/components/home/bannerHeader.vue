<template>
    <div class="banners">
        <ul>
            <li v-for="(item,index) in headerBanner" :key="index">
                <img :src="item.image.src">
            </li>
        </ul>
        <div class="banner-index">
            <span class="index">1</span><span class="cont">/ 5</span>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'
export default {
    name:"BannerHeader",
    created(){
        this.headerbannerList();
    },
    methods: {
        ...Vuex.mapActions({
            headerbannerList: "Home/headerBannerList"
        })
    },
    computed: {
        ...Vuex.mapState({
            headerBanner:state=>state.Home.headerBanner
        })
    }
}
</script>

<style>
.banners{
    position: relative;  
    width: 100%;
}

 .banners ul{
   display: flex;
}



.banners ul li img{
   min-width: 7.48rem;
}

.banner-index{
    position: absolute;
    font-size: .26rem;
    font-weight: 600;
    color: #fff;
    bottom: .3rem;
    right: .4rem;
    z-index: 9;
}

.banners .banner-index .index{
    font-size: .5rem;
    margin-right: .06rem;
}

.banners .banner-index .cont{
    margin-left: .06rem;
}
</style>
