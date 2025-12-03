<template>

  <Banner></Banner>
  <NewArrival title="New Arrivals" className2="hidden" :items="newArrival"></NewArrival>
  <Categories></Categories>
  <NewArrival title="Best Selling" className1="hidden" :items="bestSelling"></NewArrival>
  <ExploreProduct></ExploreProduct>
  
</template>

<script setup>
  import Nav from '../components/Nav.vue';
  import Banner from '@/components/Banner.vue';
  import Footer from '../components/Footer.vue';
import NewArrival from '@/components/NewArrival.vue';
import Categories from '@/components/Categories.vue';
import ExploreProduct from '@/components/ExploreProduct.vue';


const newArrival = [
  {
    name:"AMD Ryzen 7 7700 Budget Gaming Desktop PC",
    price:55000,
    discountPrice:53500,

  },
  {
    name:"DJI Mini 4K Fly More Combo Drone (Global Version)",
    price:54000,
    discountPrice:52000,

  },
  {
    name:"Mini True Wireless Earbuds",
    price:1299,
    discountPrice:1200,

  },
  {
    name:"Razer Huntsman Mini RGB Gaming Keyboard - Red Switch (Global)",
    price:11200,
    discountPrice:11000,

  },
]

const bestSelling = [
  {
    name:"AMD Ryzen 7 7700 Budget Gaming Desktop PC",
    price:55000,
    discountPrice:53500,

  },
  {
    name:"DJI Mini 4K Fly More Combo Drone (Global Version)",
    price:54000,
    discountPrice:52000,

  },
  {
    name:"Mini True Wireless Earbuds",
    price:1299,
    discountPrice:1200,

  },
  {
    name:"Razer Huntsman Mini RGB Gaming Keyboard - Red Switch (Global)",
    price:11200,
    discountPrice:11000,

  },
]

</script>