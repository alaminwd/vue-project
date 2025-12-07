<template>
    
    <section class="pt-[109px] pb-[58px]">
        <div class="container">
            <div class="flex gap-x-16">
                <div class=" w-[60%]">
                    <div class="flex gap-x-6">
                        <div class="w-[25%] flex flex-col gap-y-4 justify-center items-center">
                            <div class="bg-[#f5f5f5] py-3 px-6 rounded-[4px]">
                                <img :src="gallery" alt="">
                            </div>
                            <div class="bg-[#f5f5f5] py-3 px-6 rounded-[4px">
                                <img :src="gallery" alt="">
                            </div>
                            <div class="bg-[#f5f5f5] py-3 px-6 rounded-[4px">
                                <img :src="gallery" alt="">
                            </div>
                        </div>
                        <div class="w-[70%]">
                            <div class="bg-[#f5f5f5] px-5 flex justify-center items-center">
                                <img :src="mainimg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" w-[40%]">
                    <h2 class="text-[24px] font-semibold font-inter text-[#000000] leading-6">Havic HV G-12 Gamepad</h2>
                    <div class="flex pt-2 items-center space-x-2 py-4">
                        <p class=" space-x-1"><i v-for="(star, index) in 5" :key="index" class="fa-regular fa-star text-[#FFAD33] font-medium text-[14px]"></i>
                        </p>
                        <p class="text-[14px] font-medium font-inter text-[rgba(0,0,0,0.38)] leading-6">(150 review)</p>
                    </div>
                    <h3 class="text-[24px] font-inter font-medium leading-6 pb-6 text-[#000000]">$150.0</h3>
                    <p class="text-[14px] font-normal font-popi text-[#000] pb-6 pr-23">Playstation 5 controller skin High Quality vinly with air channel for easy dubble free install & mess free removal pressure</p>
                    <hr>
                    <div class="colors pt-6 flex gap-x-6 items-center">
                        <div class="text-[20px] text-[#000] font-inter leading-5 font-normal">Colors:</div>
                        <div>
                             <input type="radio" name="color" class="accent-red-500"></input>
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
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: grid;
        place-content: center;
        border: 1px solid #000;
    }
    input[type="radio"]::before{
        content: '';
        width: 14px;
        height: 14px;
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

    import gallery from '@/assets/images/product/product-01.webp'
    import mainimg from '@/assets/images/product/product-03.webp'

</script>