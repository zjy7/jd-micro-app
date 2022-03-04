<template>
  <div class="homeIndex">
    base home index
    <el-date-picker
      v-model="myTime"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
    <br>
    $store.state.sub0Data.name is : {{ $store.state.sub0Data.name }}
  </div>
</template>
<script>
export default {
  data(){
    return {
      myTime: null
    }
  }
}
</script>