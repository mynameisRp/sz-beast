<template>
    <div id="logo">
        <ul>
            <li v-for="(item, index) in logoList" :key="index">
                <img :src="item.data.image.src">
            </li>
        </ul>
    </div>
</template>

<script>
import Vuex from "vuex"
export default {
  name: "Logo",
  created(){
      this.logoListData()
  },
  computed: {
      ...Vuex.mapState({
          logoList:state=>state.Home.logoList
      })
  },
  methods: {
      ...Vuex.mapActions({
          logoListData: "Home/logoListData"
      })
  }
}
</script>

<style>
#logo{
    min-height: 3rem;
    width: 100%;
    background: #000;
}
</style>
