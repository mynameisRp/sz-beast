<template>
  <div id="app">
    <!-- <router-view /> -->
    <Index/>
    <TabBar v-if="this.$route.meta"/>
  </div>
</template>

<script>
import TabBar from "@common/tabBar"
import Index from "@/views/home"
import Vuex from "vuex"
export default {
  name:"App",
  components: {
    TabBar,
    Index
  },
  data(){
    return {
      tabBar: this.$route.meta
    }
  }
}
</script>


<style scoped>




</style>
