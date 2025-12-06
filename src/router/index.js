import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Wishlist from '@/pages/Wishlist.vue'
import Cart from '@/pages/Cart.vue'
import Checkout from '@/pages/Checkout.vue'
import Profile from '@/pages/Profile.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/wishlist', component: Wishlist },
  { path: '/cart', component: Cart },
  { path: '/checkout', component: Checkout },
  { path: '/profile', component: Profile },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
