import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/common.less'

Vue.config.productionTip = false

Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  console.log(111)
  console.log(to.path)
  console.log(to.matched)
  next()
})


new Vue({
  render: h => h(App),
  router:router,
}).$mount('#app')
