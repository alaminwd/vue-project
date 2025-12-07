<template>

<section class=" pb-20"> 
    <div class="container">
        <div class="pb-10 text-center">
            <h2 class="text-[36px] font-semibold text-[#000] font-inter leading-12">Explore Product</h2>
        
        </div>
        <div class="flex gap-x-[30px] gap-y-[60px] pb-[118px] flex-wrap">
            <div v-for="product in loadProducts" :key="product.id" class="w-[23%] ">
                <div class="bg-[#FFFFFF] px-10 py-9 flex justify-center relative">
                    <img :src="product.thumbnail" alt="">
                    <span class="bg-[#DB4444] absolute text-[#fff] px-3 py-1 top-3 left-3 rounded-[4px] text-[12px] font-popi leading-[18px]">10%</span>
                </div>
                <div class="pt-4">
                    <h3 class="pb-2 text-[16px] text-[#000] font-medium font-popi leading-6"> <router-link to="/product-details">{{ product.title }}</router-link>
                    
                    </h3>
                    <p class="text-[16px] font-popi font-medium leading-6 space-x-3">
                    <span class="text-[#DB4444]">${{ product.discountPercentage }}</span>
                    <del class="text-[rgba(0,0,0,0.32)]"> ${{ product.price }}</del>
                    </p>
                    <div class="flex pt-2 space-x-2">
                    <p class="space-x-1">
                        <i v-for="star in 5" :key="star" class="fa-regular fa-star text-[#FFAD33] text-[14px] font-medium"></i>
                    </p>
                    <p class="text-[14px] text-[rgba(0,0,0,0.48)] font-popi font-medium">
                        ({{ product.rating }} reviews)
                    </p>
                    </div>
                </div>
            </div>

        </div>
        <div class=" text-center" :class="className1">
            <a @click="loadMore" class=" leading-6 rounded-[4px] font-popi font-medium text-[16px] bg-[#DB4444] text-[#fff] py-4 px-14">View More</a>
        </div>
    </div>
</section>
  
</template>

<script setup>
    import productImage from '../assets/images/product/product-01.webp'
    import {onMounted, ref, computed} from 'vue'

        
    const products = ref([''])
    const length = ref(8)
   
    onMounted(async() =>{
            const response = await fetch('https://dummyjson.com/products?limit=50');
            const data = await response.json();
            // console.log(data);
            const allProducts = data.products;        
            products.value = allProducts.map((item) => item)
    })

    const loadMore = () => {
        if (length.value >= products.value.length) return;
        length.value += 8;
    };


    const loadProducts = computed(()=>{
        return products.value.slice(0, length.value);
    })

</script>