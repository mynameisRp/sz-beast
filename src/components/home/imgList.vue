<template>
    <div class="img-wrap">
        <div class="img-item" v-for="(item, index) in imgList" :key="index">
            <div class="img-text">
                <span class="box" :style="{background: item.data.items[0].textColor}"></span>
                <p class="text">
                    <span v-for="(text, i) in item.data.items" :key="i" :style="{color: text.textColor}">{{text.text}}</span>
                </p>
            </div>
            <img :src=item.data.image.src alt="">
        </div>
        <Logo/>
        <div class="img-item" v-for="(v, k) in imgListBottom">
            <div class="img-text">
                <div v-if="v.data.items[0].text" class="text-bottom">
                    <span class="box"></span>
                    <p class="text">
                        <span v-for="(x, y) in v.data.items"  :key="y" :style="{color: x.textColor}">{{x.text}}</span>
                    </p>
                </div>
            </div>
            <img :src=v.data.image.src>
        </div>
    </div>
    
</template>

<script>
import Vuex from "vuex"
import Logo from "./logo"
export default {
    name: "ImgList",
    created(){
        this.imgListData();
    },
    methods:{
        ...Vuex.mapActions({
            imgListData: "Home/imgListData"
        })
    },
    computed: {
        ...Vuex.mapState({
            imgList: state=>state.Home.imgList,
            imgListBottom: state=>state.Home.imgListBottom
        })
    },
    components: {
        Logo
    }
}
</script>

<style>
.img-wrap .img-item{
    position: relative;
}

.img-wrap .img-item .img-text{
    position: absolute;
    top: .4rem;
    left: 0;
    display: flex;
}

.img-wrap .img-item .img-text .box{
    display: inline-block;
    width: .2rem;
    height: 1.4em;
    background: #fff;
    margin-top: .1rem;
}

.img-wrap .img-item .img-text .text{
    color: #fff;
    display: inline-block;
    font-size: .3rem;
    margin-left: .2rem;
}
.img-wrap .img-item .img-text .text span{
    display: block;
}
.img-wrap .img-item .img-text .text-bottom{
    overflow: hidden;
}
</style>
