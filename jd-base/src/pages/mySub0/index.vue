<template>
  <div class='my-sub0'>
    <!-- <h1>红色边框内为子应用my-sub0</h1> -->
    <!-- 
      name(必传)：应用名称
      url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
      baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page`
     -->
    <micro-app 
      name='my-sub0' 
      url='http://localhost:8030/' 
      baseroute='/my-sub0'
      :data="sub0Data"
      @datachange='handleDataChange'
      >
    </micro-app>
  </div>
</template>
<script>
import _ from 'lodash'
export default {
  data(){
    return {
      sub0: {
        data: {
          name: 'my-sub0-test-name',
        }
      }
    }
  },
  computed: {
    sub0Data(){
      return _.cloneDeep(this.$store.state.sub0Data)
    }
  },
  methods: {
    handleDataChange(data){
      console.log('my-sub0 handleDataChange', data.detail.data)
      this.$store.commit('setSub0Data', _.cloneDeep(data.detail.data))
    }
  },
  created(){
    console.log('base application my-sub0 created')
  }
}
</script>
<style lang="less" scoped>
.my-sub0{
  box-sizing: border-box;
  border: 1px solid red;
  width: 100%;
  height: 100%;
  micro-app{
    width: 100%;
    height: 100%;
  }
}
</style>
