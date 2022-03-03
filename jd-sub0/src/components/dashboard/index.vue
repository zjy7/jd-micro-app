<template>
  <div class='dashboard'>
    <div class='dashboard-top'>
      <el-button type='primary' @click='$router.push("/my-sub0/home/index")'>Go Home Index</el-button>
      <el-button type='primary' @click='$router.push("/my-sub0/home/page")'>Go Home Page</el-button>
      <el-button type='primary' @click='$router.push("/my-sub0/person/index")'>Go Person Index</el-button>
      <el-button type='primary' @click='$router.push("/my-sub0/person/page")'>Go Person Page</el-button>
    </div>
    <div class='dashboard-content'>
      <div class='dashboard-content-left'>
        my sub0 左侧菜单
      </div>
      <div class='dashboard-content-right'>
        <router-view />
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.dashboard{
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