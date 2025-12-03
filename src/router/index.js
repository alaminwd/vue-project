import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Wishlist from '@/pages/Wishlist.vue'
import Cart from '@/pages/Cart.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/wishlist', component: Wishlist },
  { path: '/cart', component: Cart },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
