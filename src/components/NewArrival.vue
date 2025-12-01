<template>

<section class=" pb-20"> 
    <div class="container">
        <div class="pb-10 flex justify-between">
            <h2 class="text-[36px] font-semibold text-[#000] font-inter leading-12">{{ title }}</h2>
        <div :class="className2">
            <a href="#" class=" leading-6 rounded-[4px] font-popi font-medium text-[16px] bg-[#DB4444] text-[#fff] py-4 px-14">View More</a>
        </div>
        </div>
        <div class="flex gap-x-[30px] pb-[118px]">
            <div v-for="product in items" :key="product" class="w-1/4 ">
                <div class="bg-[#FFFFFF] px-10 py-9 flex justify-center relative">
                    <img :src="productImage" alt="">
                    <span class="bg-[#DB4444] absolute text-[#fff] px-3 py-1 top-3 left-3 rounded-[4px] text-[12px] font-popi leading-[18px]">10%</span>
                </div>
                <div class="pt-4" >
                    <h3 class="pb-2 text-[16px] text-[#000] font-medium font-popi leading-6">{{ product.name }} </h3>
                    <p class="text-[16px] font-popi font-medium leading-6 space-x-3">
                        <span class="text-[#DB4444]">TK{{ product.price }}</span>
                        <del class="text-[rgba(0,0,0,0.32)]">Tk{{ product.discountPrice }}</del></p>
                        <div class="flex pt-2 space-x-2">
                            <p class="space-x-1"><i v-for="star in 5" class="fa-regular fa-star text-[#FFAD33] text-[14px] font-medium"></i></p>
                            <p class="text-[14px] text-[rgba(0,0,0,0.48)] font-popi font-medium">(14 reviews)</p>
                        </div>
                </div>
            </div>
        </div>
        <div class=" text-center" :class="className1">
            <a href="#" class=" leading-6 rounded-[4px] font-popi font-medium text-[16px] bg-[#DB4444] text-[#fff] py-4 px-14">View More</a>
        </div>
    </div>
</section>
  
</template>

<script setup>
    import productImage from '../assets/images/product/product-01.webp'

    defineProps({
        title:String,
        items:Array,
        className1:String,
        className2:String,
    })

</script>