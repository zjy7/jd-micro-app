<template>
  <div class="homeIndex">
    sub0 home index
    <el-date-picker
      v-model="myTime"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>
</template>
<script>
export default {
  data(){
    return {
      myTime: null
    }
  },
  created(){
    console.log('sub0 home index created')

    console.log(document)

    console.log(document.querySelectorAll('micro-app')[0])
    
  },
}
</script>