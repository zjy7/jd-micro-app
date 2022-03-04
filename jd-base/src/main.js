import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/common.less'
import microApp from '@micro-zoe/micro-app'
import { Message } from 'element-ui';
import store from './store/'

Vue.config.productionTip = false

Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  console.log("base app beforeEach")
  console.log(to.path)
  console.log(to.matched)
  // eslint-disable-next-line
  if(to.matched.length === 0){
    console.log('base 路由未找到：' + to.path)
    if(to.path.startsWith('/my-sub0/home') && to.path !== '/my-sub0/home'){
      next('/my-sub0/home')
    }
  }
  next()
})
console.log(microApp)
console.log(microApp.start)
microApp.start()

new Vue({
  render: h => h(App),
  router:router,
  store:store,
}).$mount('#app')
