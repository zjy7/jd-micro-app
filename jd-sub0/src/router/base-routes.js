import Dashboard from '@/components/dashboard/index'
import SubDashboard from '@/components/sub-dashboard/index'
const routerRoutes = [
  {
    path: '/',
    redirect: '/my-sub0'
  },
  {
    path: '/my-sub0',
    redirect: '/my-sub0/home',
    component: SubDashboard,
    children:[
      {
        path: 'home',
        name: '首页',
        component: Dashboard,
        redirect: '/my-sub0/home/index',
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
        path: 'person',
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
      }
    ]
  }
]

export default routerRoutes
 