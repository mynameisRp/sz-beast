<template>
    <div>
        <Header/>
        <BannerHeader/>
        <NewProducts/>
    </div>
</template>

<script>
import Header from '@components/home/header';
import BannerHeader from '@components/home/bannerHeader';
import NewProducts from '@components/home/newProducts';
export default {
    name: "Index",
    components:{
        Header,
        BannerHeader,
        NewProducts
    }
}
</script>

<style>

</style>
