<template>

   <header class="bg-[#000] py-4">
        <div class="container">
            <div class="flex">
                <div class="w-[70%] text-right">
                    <p class="text-[#FFFFFF] text-[14px] leading-5 font-normal font-popi">Summer Sale All Swim Suits And Free Express Delivery-OFF 50% <a href="#" class="font-semibold leading-5 pl-2 underline">ShopNow</a> </p>
                </div>
                <div class="w-[30%] text-end">
                    <select name="" id="" class="text-[#FFFFFF] text-[14px] leading-5 font-normal font-popi">
                        <option class="bg-[#000] text-[#FFFFFF] leading-5 font-normal font-popi" value="">English</option>
                        <option class="bg-[#000] text-[#FFFFFF] leading-5 font-normal font-popi"  value="">Bangla</option>
                    </select>
                </div>
            </div>
        </div>

   </header>
 <nav class="pt-10 pb-4 border-b-1 border-[rgba(0,0,0,0.32)]">
    <div class="container">
      <div class="flex items-center"> <!-- Add items-center here -->
        
        <!-- Logo -->
        <div class="w-[10%]">
          <div class="nav-logo">
            <img :src="Logo" alt="">
          </div>
        </div>

        <!-- Menu -->
        <div class="w-[50%]">
          <ul class="flex  justify-center space-x-12"> <!-- items-center not needed here anymore -->
            <li><a href="#" class="text-[#000] text-[16px] leading-5 font-normal font-popi hover:border-b-1 pb-1 hover:border-[rgba(0,0,0,0.5)]">Home</a></li>
            <li><a href="#" class="text-[#000] text-[16px] leading-5 font-normal font-popi hover:border-b-1 pb-1 hover:border-[rgba(0,0,0,0.5)]">About</a></li>
            <li><a href="#" class="text-[#000] text-[16px] leading-5 font-normal font-popi hover:border-b-1 pb-1 hover:border-[rgba(0,0,0,0.5)]">Contact</a></li>
            <li><a href="#" class="text-[#000] text-[16px] leading-5 font-normal font-popi hover:border-b-1 pb-1 hover:border-[rgba(0,0,0,0.5)]">Sign Up</a></li>
          </ul>
        </div>

        <!-- Empty columns -->
        <div class="w-[25%]">
            <form action="" class="relative">
                <input type="text" class="w-full bg-[#F5F5F5] py-[10px] px-5 outline-0 rounded-[4px]" placeholder="What are you looking for ?">
                <button type="submit" class="absolute top-[50%] -translate-[50%] right-2"><i class="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div>
       <div class="w-[15%]">
            <div class="nav-icon flex space-x-4 pl-6">
                <i class="fa-regular fa-heart text-[18px] text-[#000] text-[18px] text-[#000] hover:bg-[#DB4444] w-[32px] h-[32px] rounded-full text-center !leading-8 hover:text-[#fff]"></i>
                <p class=" relative">
                    
                <i class="fa-solid fa-cart-shopping text-[#000] text-[16px] w-[32px] h-[32px] text-center !leading-8"></i>
                <span class=" bg-[#DB4444] text-[#FFFFFF] text-[12px] text w-[16px] h-[16px] rounded-full text-center !leading-4 inline-block font-popi absolute">2</span>
                </p>
                <i class="fa-regular fa-user text-[18px] text-[#000] hover:bg-[#DB4444] w-[32px] h-[32px] rounded-full text-center !leading-8 hover:text-[#fff]"></i>                
            </div>
        </div>
      </div>
    </div>
</nav>


</template>

<script setup>

    import Logo from "../assets/images/logo/Meta-Logo.png"

</script>