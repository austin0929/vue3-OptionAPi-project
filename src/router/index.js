import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: '前台',
      component: () => import('../views/user/HomeView.vue'),
      children: [
        {
          path: '',
          name: '首頁',
          component: () => import('../views/user/IndexView.vue')
        },
        {
          path: 'about',
          name: '關於我們',
          component: () => import('../views/user/AboutView.vue')
        },
        {
          path: 'products',
          name: '產品列表',
          component: () => import('../views/user/ProductsView.vue')
        },
        {
          path: 'product/:id',
          name: '單一產品',
          component: () => import('../views/user/ProductView.vue')
        },
        {
          path: 'cart',
          name: '購物車',
          component: () => import('../views/user/CartView.vue')
        },
        {
          path: 'checkout',
          name: '查看訂單',
          component: () => import('../views/user/CheckoutView.vue')
        },
        {
          path: 'order/:id',
          name: '訂單',
          component: () => import('../views/user/OrderView.vue')
        },
        {
          path: 'bookmark',
          name: '書籤',
          component: () => import('../views/user/BookmarkView.vue')
        },
        {
          path: 'blogs',
          name: '部落格',
          component: () => import('../views/user/BlogsView.vue')
        },
        {
          path: 'blog/:id',
          name: '單一部落格',
          component: () => import('../views/user/BlogView.vue')
        }
      ]
    },
    {
      path: '/login',
      name: '登入',
      component: () => import('../views/admin/LoginView.vue')
    },
    {
      path: '/admin',
      name: '後台',
      component: () => import('../views/admin/AdminView.vue'),
      children: [
        {
          path: 'products',
          component: () => import('../views/admin/AdminProducts.vue')
        },
        {
          path: 'orders',
          component: () => import('../views/admin/AdminOrders.vue')
        },
        {
          path: 'coupons',
          component: () => import('../views/admin/AdminCoupons.vue')
        },
        {
          path: 'article',
          component: () => import('../views/admin/AdminArticle.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('@/views/NotFound.vue')
    }
  ]
})

export default router
