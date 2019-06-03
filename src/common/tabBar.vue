<template>
    <div class="footer">
        <ul>
            <router-link v-for="(item, index) in navs" :key="index" :to='item.path' tag="li" @click="changeImg(index,$event)">
                <p>
                    <img :src="item.src">
                </p>
                <span>{{item.title}}</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
import Vuex from 'vuex'
export default {
    name:"tabBar",
    methods: {
        changeImg(index,e){

            // this.navs[index].src = this.navs[index];
            // console.log(this,e)
            this.img=this.navs[index].src;
            this.navs[index].src=this.navs[index].srcH;
        }
    },
    data(){
        return {
            img:'',
            navs: [
                {
                    title: "首页",
                    src: "https://img.thebeastshop.com/app/index/bottombar4.1/index.png@90q.png",
                    srcH: "https://img.thebeastshop.com/app/index/bottombar4.1/index-active.png@90q.png",
                    path: "/index"
                },
                {
                    title: "选购",
                    src: "https://img.thebeastshop.com/app/index/bottombar4.1/category.png@90q.png",
                    srcH: "https://img.thebeastshop.com/app/index/bottombar4.1/category-active.png@90q.png",
                    path: "/choose"
                },
                {
                    title: "发现",
                    src: "https://img.thebeastshop.com/app/index/bottombar4.1/discovery.png@90q.png",
                    srcH: "https://img.thebeastshop.com/app/index/bottombar4.1/discovery-active.png@90q.png",
                    path: "/find"
                },
                {
                    title: "门店",
                    src: "https://img.thebeastshop.com/app/index/bottombar4.1/store.png@90q.png",
                    srcH: "https://img.thebeastshop.com/app/index/bottombar4.1/store-active.png@90q.png",
                    path: "/shop"
                },
                {
                    title: "我的",
                    src: "https://img.thebeastshop.com/app/index/bottombar4.1/my.png@90q.png",
                    srcH: "https://img.thebeastshop.com/app/index/bottombar4.1/my-active.png@90q.png",
                    path: "/mine"
                }
            ]
        }
    },
}
</script>

<style>
.footer{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fff;
    border-top: 1px solid #ccc;
}

.footer ul{
    display: flex;
    justify-content: space-between;
    height: 1.2rem;
}

.footer ul li {
    width: 25%;
    padding: .2rem 0 .3rem 0;
}

.footer ul li img{
    width: .6rem;
    height: .6rem;
    margin-left: .46rem;
}

.footer ul li span{
    display: block;
    text-align: center;
    font-size: .2rem;
    color: #bfbfbf;
}


.footer ul .router-link-active span{
    color: #000;
}
</style>
