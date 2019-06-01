<template>
    <div>
        
        <div id = "top">
            <div id = "search_input">
                <img src="../../public/下载.png" alt="">
                <input type="text" class="s_input">
            </div>
            <div>
                <img src="../../public/icon-cart-sm.png" alt="">
            </div>
        </div>
    </div>
</template>




<style scope >
        #top{
      margin-top:0.1818rem;
      display: flex;
      justify-content: center
      
    }
    #top img {
      width:0.48rem;
      height:0.48rem;
    }
    #search_input{
      display: flex;
      height:0.68rem;
      border-bottom:0.0533rem solid #000;
      
    }
    #search_input .s_input {
      border:0;
      outline:none;
      width:5.5091rem
    }
</style>