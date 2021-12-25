import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: 'CCC Shop'
    }
  },
  {
    path: '/cart',
    name: 'ShoppingCart',
    component: () => import('../views/ShoppingCart.vue'),
    meta: {
      title: 'CCC Shop - 購物車'
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue'),
    meta: {
      title: 'CCC Shop - 管理員'
    }
  },
  {
    path: '/staff',
    name: 'Staff',
    component: () => import('../views/Staff.vue'),
    meta: {
      title: 'CCC Shop - 賣家'
    }
  },
  {
    path: '/my-order',
    name: 'MyOrder',
    component: () => import('../views/MyOrder.vue'),
    meta: {
      title: 'CCC Shop - 我的訂單'
    }
  },
  {
    path: '/my-account',
    name: 'MyAccount',
    component: () => import('../views/MyAccount.vue'),
    meta: {
      title: 'CCC Shop - 帳號管理'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next()
})

export default router
