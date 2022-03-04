import Vue from 'vue'
import Router from 'vue-router'
import BaseRoutes from './base-routes'
Vue.use(Router)

const routes = BaseRoutes
// console.log(routes)
const routerPush = Router.prototype.push

Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}



const router = new Router({
  // 👇 设置基础路由，子应用可以通过window.__MICRO_APP_BASE_ROUTE__获取基座下发的baseroute，如果没有设置baseroute属性，则此值默认为空字符串
  base: window.__MICRO_APP_BASE_ROUTE__ || '/',
  mode: 'hash',
  routes,
})

export default router