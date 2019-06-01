<template>
    <div class="newProducts">
        <h2>NEW ARRIVAL</h2>
        <ul>
            <li>
                <!-- <img src="/img/pic1.webp"> -->
            </li>
        </ul>
    </div>
</template>

<script>
import Vuex from "vuex"
export default {
    name:"NewProducts",
    methods: {
        ...Vuex.mapActions({
            newProData: "Home/getNewPro"
        })
    },
    created(){
        this.newProData()
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
}

.newProducts ul li{
    min-height: 2rem;
    background: #000;
    width: 100%;
}

.newProducts ul li img{
    min-width: 2.4rem;
}
</style>
