<template>
    <div class="img-banner">
        <ul>
            <li v-for="(item, index) in delayList" :key="index">
                <img :src="item.image.src">
            </li>
        </ul>
    </div>
</template>

<script>
import Vuex from "vuex"
export default {
    name: "Delay",
    created(){
        this.delayData();
    },
    methods: {
        ...Vuex.mapActions({
            delayData: "Home/delayData"
        })
    },
    computed: {
        ...Vuex.mapState({
            delayList: state=>state.Home.delayList
        })
    }
}
</script>

<style>
.img-banner{
    width: 100%;
    overflow: hidden;
}


.img-banner ul{
    display: flex;
}


.img-banner ul li img{
    min-width: 7.48rem;
}
</style>
