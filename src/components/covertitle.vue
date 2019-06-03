<template>
    <div id="covertitle">
        <ul class="nav-list">
            <li style="margin-left:.3rem;">全部
                <span class="line"></span>
            </li>
            <li>BEAST HOME</li>
            <li>BEAST FLORAL</li>
            <li>LITTLE B</li>
            <li>T-B-H</li>
            <li>NAKED BEAST</li>
        </ul>
       
    </div>
     
</template>

<script>
export default {
    name:"covertitle"
}
</script>

<style scoped>
    #covertitle{
        clear:both;
        height:.7rem;
       width:100%;
        position:fixed;
        overflow:hidden;
    }
    .nav-list{
        clear:both;
         height:.7rem;
          border-bottom:.01rem solid #e1e1e1;
         width:max-content;
         
         
    }
    .nav-list>li{
        color: #000;
        font-weight: 700;
        font-size:.27rem;
        float:left;
        margin-left:.8rem;
    }
</style>