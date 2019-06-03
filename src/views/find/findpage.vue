<template>
  <div id="findpage">
    <Findtop/>
    <Findcontent/>
    
  </div>
</template>

<script>
import Findtop from './findtop'
import Findcontent from './findcontent'
export default {
    name:'findpage',
    components:{
        Findtop,
        Findcontent
      }
   
}
</script>

<style scoped>
  #findpage{
    font-size:24px;
  }
</style>
