<template>
    <section class=" pt-[107px] pb-[240px]">
        <div class="container">
            <div class="flex gap-x-[129px] justify-between items-center"> 
                <div class="w-[60%]">
                    <div class="logimg">
                        <img :src="login" alt="">
                    </div>
                </div>
                <div class="w-[40%]">
                    <h3 class="text-[36px] font-inter leading-[30px] pb-6 text-[#000] font-medium">Create an account</h3>
                    <p class="text-[16px] leading-6 font-popi font-normal text-[#000]">Enter you details below</p>
                    <form action="" class="pt-12">
                        <div class="pb-10">
                            <input type="text" placeholder="Name*" class=" placeholder:text-[16px] placeholder:font-popi placeholder:leading-6 placeholder:text-[rgba(0,0,0,0.4)] placeholder:font-normal outline-0 border-b-1 pb-2 w-full border-[rgba(0,0,0,0.4)]">
                        </div>
                        <div class="pb-10">
                            <input type="email" placeholder="Email or Phone*" class=" placeholder:text-[16px] placeholder:font-popi placeholder:leading-6 placeholder:text-[rgba(0,0,0,0.4)] placeholder:font-normal outline-0 border-b-1 pb-2 w-full border-[rgba(0,0,0,0.4)]">
                        </div>
                        <div class="pb-10">
                            <input type="password" placeholder="Password*" class=" placeholder:text-[16px] placeholder:font-popi placeholder:leading-6 placeholder:text-[rgba(0,0,0,0.4)] placeholder:font-normal outline-0 border-b-1 pb-2 w-full border-[rgba(0,0,0,0.4)]">
                        </div>
                        <div class="pb-10">
                           <button type="submit" class=" w-full py-4 leading-6 font-popi text-[16px] bg-[#DB4444] font-normal text-[#fff] mb-4">Create Account</button>
                           <a href="" class=" w-full flex justify-center items-center text-center space-x-4 py-3 leading-6 font-popi text-[16px] font-normal border-1 text-[#000] border-[rgba(0,0,0,0.4)]"><img :src="googl" alt="" class="w-[30px]"><span>Create Account</span></a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

import login from '@/assets/images/logo/login.jpg'
import googl from '@/assets/images/logo/google.png'

</script>