<template>
    <div class="header">
        <div class="search">
            <img :src="search">
        </div>
        <div class="cart">
            <img :src="cart">
            <i class="cartNum">2</i>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    data(){
        return{
            search: "https://img.thebeastshop.com/images/menu-tab/menu-search.png",
            cart: "https://img.thebeastshop.com/app/4.0/icon/icon-cart-sm.png"
        }
    }
}
</script>

<style>
    .header{
    width: 100%;
    position: relative;
    z-index: 6;
}

.header .search {
    position: absolute;
    top: .42rem;
    left: .42rem;
}

.header .search img {
    width: .42rem;
}

.header .cart img {
    width: .32rem;
}

.header .cart {
    position: absolute;
    top: .42rem;
    right: .42rem;
}

.header .cart .cartNum{
    display: block;
    width: .26rem;
    height: .26rem;
    background: #000;
    color: #f00;
    border-radius: 50%;
    font-weight: 700;
    padding: .01rem .04rem;
    position: absolute;
    top: -.14rem;
    right: -.16rem;
}
</style>
