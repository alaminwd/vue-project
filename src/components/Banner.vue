<template>
  <section class="pb-24">
    <div class="container">
      <div class="flex gap-x-11">
        <div class="w-[20%] border-r border-[#ddd] pt-10">
          <ul class="flex flex-col space-y-4">
            <li v-for="(category, index) in categories" :key="index">
              <a href="#" class="text-[16px] text-[#000000] font-popi leading-6 font-normal">
                {{ category }}
              </a>
            </li>
          </ul>
        </div>
        <div class="w-[80%]">
          <div class="pt-10">
            
          <img :src="banner" alt="" class="w-full">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

import banner from "../assets/images/banner/banner.avif"

const categories = [
  "Woman's Fashion",
  "Men's Fashion",
  "Kids",
  "Shoes",
  "Accessories",
  "Beauty",
  "Electronics",
  "Home & Living",
  "Sports"
];
</script>
