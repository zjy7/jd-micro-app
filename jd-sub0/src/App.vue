<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods:{
    dataListener(data){
      console.log('dataListener')
      console.log(data)
      this.$store.commit('setSub0Data',data)
    }
  },
  created () {
    if(window.microApp){
      const data = window.microApp.getData()
      this.$store.commit('setSub0Data',data)
    }
    /** 绑定数据监听事件 */
	  window.microApp && window.microApp.addDataListener(this.dataListener)
  }, 
  destroyed () {
	  /** 移除数据监听事件 */
	  window.microApp && window.microApp.removeDataListener(this.dataListener)
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
