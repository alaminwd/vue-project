import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Wishlist from '@/pages/Wishlist.vue'
import Cart from '@/pages/Cart.vue'
import Checkout from '@/pages/Checkout.vue'
import Profile from '@/pages/Profile.vue'
import Product_Details from '@/pages/Product_Details.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/wishlist', component: Wishlist },
  { path: '/cart', component: Cart },
  { path: '/checkout', component: Checkout },
  { path: '/profile', component: Profile },
  { path: '/product-details', component: Product_Details },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
