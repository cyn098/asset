import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: '首页',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  {
    path: '/goods',
    component: Layout,
    redirect: '/goods/buyList',
    name: 'Goods',
    meta: { title: '物品管理', icon: 'example' },
    children: [
      {
        path: 'buyList',
        name: 'BuyList',
        component: () => import('@/pages/goods/buyList'),
        meta: { title: '采购清单', icon: 'table' }
      },
      {
        path: 'goodsRequest',
        name: 'GoodsRequest',
        component: () => import('@/pages/goods/goodsRequest'),
        meta: { title: '物品申请', icon: 'table' }
      },
      {
        path: 'typeManage',
        name: 'TypeManage',
        component: () => import('@/pages/goods/typeManage'),
        meta: { title: '类型管理', icon: '类型' }
      },
      {
        path: 'inventory',
        name: 'Inventory',
        component: () => import('@/pages/goods/inventory'),
        meta: { title: '库存物品', icon: '库存' }
      }
    ]
  },

  {
    path: '/checkManange',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/pages/checkManage/index.vue'),
        meta: { title: '审核管理', icon: 'form' }
      }
    ]
  },

  {
    path: '/goodsTotal',
    component: Layout,
    redirect: '/goods/borrw',
    name: 'GoodsTotal',
    meta: { title: '物品统计', icon: 'example' },
    children: [
      {
        path: 'borrow',
        name: 'Boorow',
        component: () => import('@/pages/goodsTotal/borrow'),
        meta: { title: '借用管理', icon: 'table' }
      },
      {
        path: 'recipient',
        name: 'Recipient',
        component: () => import('@/pages/goodsTotal/recipient'),
        meta: { title: '领用管理', icon: 'table' }
      },
    ] 
  },
  {
    path: '/logoManange',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'LogoManage',
        component: () => import('@/pages/logoManage/index.vue'),
        meta: { title: '日志管理', icon: 'form' }
      }
    ]
  },

 
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
