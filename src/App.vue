<template>
  <div id="app">
    <!-- <router-view /> -->
    <Index/>
    <TabBar/>
  </div>
</template>

<script>
import TabBar from "@/common/tabBar"
import Index from "@/views/home/index"
export default {
  name:"App",
  components: {
    TabBar,
    Index
  },
  created(){}
}
</script>


<style>

</style>
