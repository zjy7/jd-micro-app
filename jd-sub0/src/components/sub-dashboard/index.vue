<template>
  <div class='sub-dashboard'>
    <router-view></router-view>
  </div>
</template>
<style lang="less" scoped>
.sub-dashboard{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  &-top{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  &-content{
    width: 100%;
    height: calc(100% - 100px);
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    &-left{
      width: 200px;
      height: 100%;
      background-color: #f5f5f5;
    }
    &-right{
      width: calc(100% - 200px);
      height: 100%;
      background-color: #fff;
    }
  }
}
</style>