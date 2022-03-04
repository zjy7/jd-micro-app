<template>
  <div class="homeIndex">
    sub0 home index
    <el-date-picker
      v-model="myTime"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
    <br>
    $store.state.sub0Data.name is : {{ $store.state.sub0Data.name }}
    <br>
    <el-input v-model="str" style='width: 200px;' placeholder="请输入新的name值"></el-input>
    <el-button @click='clickBtn'>提交</el-button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      myTime: null,
      str: null
    }
  },
  methods:{
    clickBtn(){
      this.$store.commit('setSub0Data', {name: this.str})
      window.microApp && window.microApp.dispatch({ name: this.str })
    }
  },
  created(){
    console.log('sub0 home index created')

    console.log(document)
    this.$nextTick(() => {
      console.log(document.querySelectorAll('micro-app')) // []
    })
    
  },
  mounted(){
    console.log('sub0 home index mounted')
    console.log(document.querySelectorAll('micro-app')) // []
  }
}
</script>