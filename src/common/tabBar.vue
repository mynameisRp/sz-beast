<template>
    <div class="footer">
        <ul>
            <li v-for="(item, index) in navs" :key="index">
                <p>
                    <img :src="item.src">
                </p>
                <span>{{item.title}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import Vuex from 'vuex'
export default {
    name:"tabBar",
    data(){
        return {
            navs: [
                {
                    title: "首页",
                    src: "https://img.thebeastshop.com/app/index/bottombar4.1/index.png@90q.png"
                },
                {
                    title: "选购",
                    src: "https://img.thebeastshop.com/app/index/bottombar4.1/category.png@90q.png"
                },
                {
                    title: "发现",
                    src: "https://img.thebeastshop.com/app/index/bottombar4.1/discovery.png@90q.png"
                },
                {
                    title: "门店",
                    src: "https://img.thebeastshop.com/app/index/bottombar4.1/store.png@90q.png"
                },
                {
                    title: "我的",
                    src: "https://img.thebeastshop.com/app/index/bottombar4.1/my.png@90q.png"
                }
            ]
        }
    }
}
</script>

<style>
.footer{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fff;
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
</style>
