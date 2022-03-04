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

export default new Router({
  mode: 'hash',
  routes
})
