import Dashboard from '@/components/dashboard/index'
import mySub0 from '@/pages/mySub0/index.vue'
const routerRoutes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: '首页',
    component: Dashboard,
    redirect: '/home/index',
    meta: {
      menuName: '首页',
    },
    children: [
      {
        path: 'index',
        name: '首页index',
        component: () => import('@/pages/home/index'),
        meta: {
          menuName: '首页index',
        }
      },
      {
        path: 'page',
        name: '首页page',
        component: () => import('@/pages/home/page'),
        meta: {
          menuName: '首页page',
        }
      }
    ]
  }, 
  {
    path: '/person',
    name: 'person',
    component: Dashboard,
    meta: {
      menuName: 'person',
    },
    children: [
      {
        path: 'index',
        name: 'personIndex',
        component: () => import('@/pages/person/index'),
        meta: {
          menuName: 'personIndex',
        }
      },
      {
        path: 'page',
        name: 'personPage',
        component: () => import('@/pages/person/page'),
        meta: {
          menuName: 'personPage',
        }
      },      
    ]
  },
  {
    // 👇 非严格匹配，/my-page/* 都指向 MyPage 页面
    path: '/my-sub0', // vue-router@4.x path的写法为：'/my-page/:page*'
    name: 'my-sub0',
    component: Dashboard,
    redirect: '/my-sub0/home',
    children:[
      {
        component: mySub0,
        path: 'home',
        name: 'Sub0page',
        meta: {
          menuName: '首页page',
        }
      }
    ]

  }
]

export default routerRoutes
 