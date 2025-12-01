<template>

<section class=" pb-20"> 
    <div class="container">
        <div class="pb-10">
            <h2 class="text-[36px] font-semibold text-[#000] font-inter leading-12">Top Category</h2>
        </div>
        <div class="flex pb-[130px] gap-x-5">
            <div v-for="category in 6" :key="category" class=" w-1/6">
                <div class=" border-1 border-[rgba(0,0,0,0.4)] py-6 rounded-[4px] text-center">
                    <i class="fa-solid fa-laptop"></i>
                    <h3  class=" text-[16px] font-normal leading-6 font-popi text-[#000]">Electronics</h3>
                </div>
            </div>
        </div>
    </div>
</section>
  
</template>

<script setup>
    import product from '../assets/images/product/product-01.webp'
</script>