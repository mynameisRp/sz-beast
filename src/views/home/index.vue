<template>
    <div id="home">
        <Header/>
        <BannerHeader/>
        <NewProducts/>
        <Delay/>
        <ImgList/>
    </div>
</template>

<script>
import Header from '@components/home/header';
import BannerHeader from '@components/home/bannerHeader';
import NewProducts from '@components/home/newProducts';
import Delay from '@components/home/delay';
import ImgList from "@components/home/imgList";
export default {
    name: "Index",
    components:{
        Header,
        BannerHeader,
        NewProducts,
        Delay,
        ImgList
    }
}
</script>

<style>
#home{
    padding-bottom: 1.2rem;
}
</style>
