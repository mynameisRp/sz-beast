<template>
    <div class="newProducts">
        <h2>NEW ARRIVAL</h2>
        <ul>
            <li v-for="(item, index) in newProImgList" :key="index">
                <img :src=item.featureImage>
            </li>
        </ul>
    </div>
</template>

<script>
import Vuex from "vuex"
export default {
    name:"NewProducts",
    created(){
        this.newProList();
    },
    methods: {
        ...Vuex.mapActions({
            newProList: "Home/newProList"
        })
    },
    computed:{
        ...Vuex.mapState({
            newProImgList: state=>state.Home.newProImgList
        })
    }
}
</script>

<style scoped>
.newProducts{
    width: 100%;
    overflow: hidden;
}

.newProducts h2{
    text-align: center;
    font-size: .6rem;
    color: #000;
    font-weight: 600;
    margin: .6rem  0 .6rem;
}

.newProducts ul{
    display: flex;
    margin-bottom: .6rem;
    width: max-content;
    justify-content: space-around;
}

.newProducts ul li{
    min-height: 2rem;
    width: 100%;
}

.newProducts ul li img{
    height: 3rem;
    width: 3rem;
}
</style>
