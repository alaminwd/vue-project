<template>

    <section class="pt-[180px] pb-[107px]">
        <div class="container">
           <div class="flex gap-[150px]">
            <div class=" w-[40%]">
                <h2 class="text-[36px] text-[#000] font-medium leading-[30px] font-inter">Billing Details</h2>

                <form action="" class=" pt-12">
                    <div class=" flex flex-col pb-8">
                        <label for="" class=" text-[16px] text-[rgba(0,0,0,0.4)] leading-6 pb-2 font-normal font-popi pb-2">Full Name<span class="text-[rgba(219,68,68,0.4)]">*</span></label>
                        <input type="text" class=" bg-[#F5F5F5F5] py-4 px-4 rounded-[4px]">
                    </div>
                    <div class=" flex flex-col pb-8">
                        <label for="" class=" text-[16px] text-[rgba(0,0,0,0.4)] leading-6 pb-2 font-normal font-popi pb-2">Company Name</label>
                        <input type="text" class=" bg-[#F5F5F5F5] py-4 px-4 rounded-[4px]">
                    </div>
                    <div class=" flex flex-col pb-8">
                        <label for="" class=" text-[16px] text-[rgba(0,0,0,0.4)] leading-6 pb-2 font-normal font-popi pb-2">Street Address <span class="text-[rgba(219,68,68,0.4)]">*</span></label>
                        <input type="text" class=" bg-[#F5F5F5F5] py-4 px-4 rounded-[4px]">
                    </div>
                    <div class=" flex flex-col pb-8">
                        <label for="" class=" text-[16px] text-[rgba(0,0,0,0.4)] leading-6 pb-2 font-normal font-popi pb-2">Appartment Floor (optional)</label>
                        <input type="text" class=" bg-[#F5F5F5F5] py-4 px-4 rounded-[4px]">
                    </div>
                     <div class=" flex flex-col pb-8">
                        <label for="" class=" text-[16px] text-[rgba(0,0,0,0.4)] leading-6 pb-2 font-normal font-popi pb-2">City/Town <span class="text-[rgba(219,68,68,0.4)]">*</span></label>
                        <input type="text" class=" bg-[#F5F5F5F5] py-4 px-4 rounded-[4px]">
                    </div> 
                     <div class=" flex flex-col pb-8">
                        <label for="" class=" text-[16px] text-[rgba(0,0,0,0.4)] leading-6 pb-2 font-normal font-popi pb-2">Phone Number <span class="text-[rgba(219,68,68,0.4)]">*</span></label>
                        <input type="text" class=" bg-[#F5F5F5F5] py-4 px-4 rounded-[4px]">
                    </div> 
                     <div class=" flex flex-col pb-8">
                        <label for="" class=" text-[16px] text-[rgba(0,0,0,0.4)] leading-6 pb-2 font-normal font-popi pb-2">Email Address <span class="text-[rgba(219,68,68,0.4)]">*</span></label>
                        <input type="email" class=" bg-[#F5F5F5F5] py-4 px-4 rounded-[4px]">
                    </div> 
                </form>
            </div>
                <div class=" w-[60%]">
                    <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">

                        <!-- Cart Items -->
                        <div class="space-y-6">
                            <div
                            v-for="(cart, index) in carts"
                            :key="index"
                            class="flex items-center justify-between bg-gray-50 rounded-lg p-4"
                            >
                            <div class="flex items-center gap-4">
                                <img :src="cart.img" class="w-20 rounded-md border" alt="">
                                <div class="space-y-1">
                                <p class="text-sm font-medium text-gray-800">{{ cart.name }}</p>
                                <p class="text-xs text-gray-500">Qty: 1</p>
                                </div>
                            </div>
                            <span class="text-sm font-semibold text-gray-900">
                                ${{ cart.price }}
                            </span>
                            </div>
                        </div>

                        <!-- Price Summary -->
                        <div class="mt-8 border-t pt-6 space-y-4">
                            <div class="flex justify-between text-gray-600 text-sm">
                            <span>Subtotal</span>
                            <span class="font-medium">$343</span>
                            </div>
                            <div class="flex justify-between text-gray-600 text-sm">
                            <span>Shipping</span>
                            <span class="font-medium">Free</span>
                            </div>
                            <div class="flex justify-between text-lg font-semibold text-gray-900 pt-4 border-t">
                            <span>Total</span>
                            <span>$343</span>
                            </div>
                        </div>

                        <!-- Payment Method -->
                        <div class="mt-8">
                            <h3 class="text-sm font-semibold text-gray-900 mb-4">
                            Payment Method
                            </h3>

                            <label class="flex items-center justify-between border rounded-lg p-4 cursor-pointer hover:border-red-500">
                            <div class="flex items-center gap-3">
                                <input type="radio" name="payment_method" class="accent-red-500">
                                <span class="text-sm font-medium text-gray-700">Stripe Payment</span>
                            </div>
                            </label>

                            <label class="flex items-center justify-between border rounded-lg p-4 mt-3 cursor-pointer hover:border-red-500">
                            <div class="flex items-center gap-3">
                                <input type="radio" name="payment_method" class="accent-red-500">
                                <span class="text-sm font-medium text-gray-700">Cash on Delivery</span>
                            </div>
                            </label>
                        </div>

                        <!-- Coupon -->
                        <div class="mt-8 flex gap-4">
                            <input
                            type="text"
                            placeholder="Enter coupon code"
                            class="flex-1 px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                            >
                            <button
                            class="px-8 py-3 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-black transition"
                            >
                            Apply
                            </button>
                        </div>

                        <!-- Place Order -->
                        <div class="mt-10">
                            <button
                            class="w-full py-4 rounded-xl bg-red-500 text-white text-base font-semibold hover:bg-red-600 transition"
                            >
                            Place Order
                            </button>
                        </div>

                        </div>

                </div>
           </div>
        </div>
    </section>
    
</template>
<style scoped>
    .field input:focus {
        outline: none!important;
    }
    input[type="radio"]{
        appearance: none;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: grid;
        place-content: center;
        border: 1px solid #000;
    }
    input[type="radio"]::before{
        content: '';
        width: 17px;
        height: 17px;
        border-radius: 50%;
        transform: scale(0);
        transition:  12ms transform ease-in-out;
        background: #000;
        border: 2px solid #fff;
    }
    input[type="radio"]:checked::before{
        transform:  scale(1);
    }
</style>

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




</script>