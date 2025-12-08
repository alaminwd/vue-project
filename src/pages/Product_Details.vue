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
                        <div class="flex space-x-2">
                             <input type="radio" name="color" class="bg-[#DB4444]">
                             <input type="radio" name="color" class="bg-[#DB4444]">
                             <input type="radio" name="color" class="bg-[#DB4444]">
                        </div>
                    </div>
                    <div class="size pt-6 flex gap-x-6 items-center">
                        <div class="text-[20px] text-[#000] font-inter leading-5 font-normal">
                            Size:
                        </div>

                        <div class="flex space-x-2">
                            <div class="relative">
                                <input id="size1" type="radio" name="color" class="radio rounded-[5px]">
                                <label for="size1" class="label">XL</label>
                            </div>
                        </div>
                    </div>
                    <div class="flex pt-6 gap-x-6">
                        <div class="quantity flex items-center w-[150px] ">
                            <i @click="decrement" class="fa-solid flexn justify-center fa-minus py-2 px-2 border-1 border-[rgba(0,0,0,0.26)] rounded-l-sm"></i>
                            <input type="text" readonly class="w-full py-1 text-center border-y-1 border-[rgba(0,0,0,0.26)]" :value="count">
                            <i @click="increment" class="fa-solid fa-plus px-2 py-2 border-1 border-[rgba(0,0,0,0.26)] rounded-r-sm"></i>
                        </div>
                        <button type="submit" class=" px-10 py-3 rounded-[4px] bg-[#DB4444] text-[#fff] text-[16px] font-medium leading-6 font-inter">Placed Order</button>
                        <button type="submit" class=" px-4 py-3 rounded-[4px] border-1 border-[rgba(0,0,0,0.41)] text-[rgba(0,0,0,0.41)] text-[16px] font-medium hover:text-[#fff] hover:border-0 hover:bg-[#DB4444]"><i class="fa-regular fa-heart"></i></button>
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
    .colors input[type="radio"]{
        appearance: none;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        display: grid;
        place-content: center;
        /* border: 1px solid #000; */
    }
    .colors input[type="radio"]::before{
        content: '';
        width: 16px;
        height: 16px;
        border-radius: 50%;
        transform: scale(0);
        transition:  12ms transform ease-in-out;
        background: #000;
        border: 2px solid #fff;
    }
    .colors input[type="radio"]:checked::before{
        transform:  scale(1);
    }

    .size .radio {
        appearance: none;
        width: 35px;
        height: 35px;
        border: 2px solid #ddd;
        cursor: pointer;
}

    .size .label {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        color: #000;
    }

    .size .radio:checked {
        background: #DB4444;
        border-color: transparent;
    }

    .size .radio:checked + .label {
        color: #fff;
    }
    .quantity i:hover{
        background: #DB4444;
        color: #fff;
        border: none;
    }

</style>

<script setup>

    import gallery from '@/assets/images/product/product-01.webp'
    import mainimg from '@/assets/images/product/product-03.webp'
    import { ref } from 'vue'

const count = ref(1)

const increment = () => {
    if (count.value < 10) {
        count.value++
    }
}

const decrement = () => {
    if (count.value > 1) {
        count.value--
    }
}


</script>