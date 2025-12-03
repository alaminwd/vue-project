<template>

    <section class="pt-[180px] pb-[107px]">
        <div class="container">
            <div class="flex px-10 py-6 mb-8 shadow-so shadow-soft items-center font-popi text-[16px] font-normal leading-6">
                <div class=" w-[20%] ">Product</div>
                <div class=" w-[30%] ">Price</div>
                <div class=" w-[30%] ">Quantity</div>
                <div class=" w-[20%] ">Subtotal</div>
            </div>
            <div v-for="cart, index in carts" :key="index" class="flex px-10 py-6 mb-8 shadow-so shadow-soft items-center font-popi text-[16px]">
                <div class=" w-[20%] ">
                    <div class=" flex items-center space-x-1">
                        <img :src="cart.img" class="w-20 h-20 object-cover " alt="">
                        <span>{{ cart.name }}</span>
                    </div>
                </div>
                <div class=" w-[30%] flex justify-center ">
                    <p>${{ cart.price }}</p>
                </div>
                <div class=" w-[30%] flex justify-center ">
                    <div class=" border-1 border-[#ddd] rounded-[4px] px-3 py-1.5 w-[72px] h-[44px] flex" >
                        <input type="text" class=" w-full" :value="cart.count">
                        <div class=" h-full flex flex-col items-center">
                            <i @click="increment(index)" class="fa-solid fa-chevron-up text-[8px] !leading-4"></i>
                            <i @click="dicrement(index)" class="fa-solid fa-chevron-down text-[8px] !leading-4"></i>
                        </div>
                    </div>
                </div>
                <div class=" w-[20%] ">${{cart.price* cart.count }}</div>
            </div>
             <div class=" flex justify-between">
                <a href="" class=" text-[16px] font-popi text-[#000] font-medium leading-6 border-1 border-[#F5F5F5] rounded-[4px] px-12 py-4">Return to Shop</a>    
                <button type="submit" class=" text-[16px] font-popi text-[#000] font-medium leading-6 border-1 border-[#F5F5F5] rounded-[4px] px-12 py-4">Update Cart</button>    
            </div>
            <div class="flex justify-end pt-[100px]">
                <div class="border-1 border-[#ddd] rounded-[4px] px-6 py-8 w-[40%]">
                    <h3 class="text-[20px] font-popi text-[#000] font-medium leading-7">Cart Total</h3>
                    <div class="flex justify-between pt-6 border-b-1 border-[#000] mb-3 pb-3 text-[16px] font-popi text-[#000] font-normal leading-4">
                        <span>Subtotal</span>
                        <span>$343</span>
                    </div>
                    <div class="flex justify-between pt-6 border-b-1 border-[#000] mb-3 pb-3 text-[16px] font-popi text-[#000] font-normal leading-4">
                        <span>Shipping</span>
                        <span>Fee</span>
                    </div>
                    <div class="flex justify-between pt-6 mb-4 pb-4">
                        <span>Total</span>
                        <span>$000 </span>
                    </div>
                    <div class="flex justify-center mt-4">
                        <button class="text-[16px] font-popi text-[#000] font-medium bg-[#DB4444] text-[#fff] leading-4 rounded-[4px] px-12 py-4" type="submit">Procced to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
</template>


<script setup>

    import { ref } from 'vue';

    import cartProduct from '@/assets/images/product/product-02.webp'


    const carts = ref([
    {
        id:1,
        name:'video making set',
        price:650,
        img:cartProduct,
        count:1,
    },
    {
        id:2,
        name:'K9 Wireless Microphone',
        price:745,
        img:cartProduct,
        count:1,
    },
]);


const increment = (index) =>{
    carts.value[index].count++
}

const dicrement = (index) =>{
    carts.value[index].count--

}


</script>