<template>
    
<section class="pt-20"> 
        <div class="container">
            <div class="pb-10 flex justify-between">
                <h2 class="text-[24px] font-medium text-[#000] font-inter leading-10">wishlist (4)</h2>
           
            </div>
            <div class="flex gap-x-[30px] pb-[118px]">
                <div v-for="product in 4" :key="product" class="w-1/4 ">
                    <div class=" px-10 py-9 flex justify-center relative">
                        <img :src="image" alt="">
                        <span class="bg-[#DB4444] absolute text-[#fff] px-3 py-1 top-3 left-3 rounded-[4px] text-[12px] font-popi leading-[18px]">10%</span>
                        <i class="fa-regular fa-trash-can w-[34px] h-[34px] bg-[#F5F5F5] rounded-[50%] !leading-[34px] text-center absolute top-3 right-3 "></i>
                    </div>
                    <div class="pt-4" >
                        <h3 class="pb-2 text-[16px] text-[#000] font-medium font-popi leading-6">'Mini Handheld Stabilizer Tripod with Mobile Holder For Phone Video Vlog Go Pro Stand'</h3>
                        <p class="text-[16px] font-popi font-medium leading-6 space-x-3">
                            <span class="text-[#DB4444]">৳ 540</span>
                            <del class="text-[rgba(0,0,0,0.32)]">৳ 640</del></p>
                            <div class="flex pt-2 space-x-2">
                                <p class="space-x-1"><i v-for="star in 5" class="fa-regular fa-star text-[#FFAD33] text-[14px] font-medium"></i></p>
                                <p class="text-[14px] text-[rgba(0,0,0,0.48)] font-popi font-medium">(14 reviews)</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
    import image from '@/assets/images/product/product-02.webp';
</script>