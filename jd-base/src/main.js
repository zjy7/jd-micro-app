import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/common.less'
import microApp from '@micro-zoe/micro-app'
import { Message } from 'element-ui';
Vue.config.productionTip = false

Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  // eslint-disable-next-line
  if(to.matched.length === 0){
    Message.error('路由错误')
    next()
  }
  next()
})
console.log(microApp)
console.log(microApp.start)
microApp.start()

new Vue({
  render: h => h(App),
  router:router,
}).$mount('#app')
