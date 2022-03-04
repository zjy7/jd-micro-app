import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/common.less'

Vue.config.productionTip = false

Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  console.log('my sub0 app beforeEach')
  console.log(to.path)
  console.log(to.matched)
  next()
})

console.log(store)
new Vue({
  render: h => h(App),
  router:router, 
  store:store,
}).$mount('#app')
