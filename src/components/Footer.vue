<template>

    <footer class="bg-[#000] pt-20 pb-25">
        <div class="container">
            <div class="flex gap-x-10">
                <div class="w-[20%]">
                    <div class="footer-logo">
                        <img :src="footerlogo" alt="">
                        <h4 class="text-[#fafafa] font-popi leading-7 font-medium pt-6 text-[20px] ">Subscribe</h4>
                        <p class="text-[16px] text-[#fafafa] font-popi leading-6 font-normal pt-6">Get 10% off your first order</p>
                    </div>
                </div>
                <div class="w-[25%]">
                    <div class="footer-support">

                        <h4 class="text-[#fafafa] font-popi leading-7 font-medium text-[20px] ">Support</h4>
                        <p class="text-[16px] text-[#fafafa] font-popi leading-6 font-normal pt-4">111 Bijoy sarani, Dhaka DH 1515, Bangladesh</p>
                        <p class="text-[16px] text-[#fafafa] font-popi leading-6 font-normal pt-4">alamin.wd.bd@gmail.com</p>
                        <p class="text-[16px] text-[#fafafa] font-popi leading-6 font-normal pt-4">+8801311932840</p>
                    </div>
                </div>
                <div class="w-[15%]">
                    <div class="footer-account">

                        <h4 class="text-[#fafafa] font-popi leading-7 font-medium text-[20px] ">Account</h4>
                        <p class="text-[16px] text-[#fafafa] font-popi leading-6 font-normal pt-4"><a href="#">My Account</a></p>
                        <p class="text-[16px] text-[#fafafa] font-popi leading-6 font-normal pt-4"><a href="#">Login / Registation</a></p>
                        <p class="text-[16px] text-[#fafafa] font-popi leading-6 font-normal pt-4"><a href="#">Cart</a></p>
                        <p class="text-[16px] text-[#fafafa] font-popi leading-6 font-normal pt-4"><a href="#">Wishlist</a></p>
                    </div>
                </div>
                <div class="w-[15%]">
                    <div class="footer-quick-link">

                        <h4 class="text-[#fafafa] font-popi leading-7 font-medium text-[20px] ">Quick Links</h4>
                        <p class="text-[16px] text-[#fafafa] font-popi leading-6 font-normal pt-4"><a href="#">Privacy Policy</a></p>
                        <p class="text-[16px] text-[#fafafa] font-popi leading-6 font-normal pt-4"><a href="#">Terms of use</a></p>
                        <p class="text-[16px] text-[#fafafa] font-popi leading-6 font-normal pt-4"><a href="#">FAQ</a></p>
                        <p class="text-[16px] text-[#fafafa] font-popi leading-6 font-normal pt-4"><a href="#">Contact</a></p>
                    </div>
                </div>
               <div class="w-[25%]">
                    <h4 class="text-[#fafafa] font-popi leading-7 font-medium text-[20px]">Download App</h4>
                    <div class="flex pt-6 gap-x-2 items-center">
                        <div class="w-1/2 ">
                            <div>
                                <img class="w-100" :src="scan" alt="">
                            </div>
                        </div>
                        <div class="w-1/2 ">
                             <div class="flex flex-col space-y-[10px]">
                                <a href="#"><img :src="playstore" alt=""></a>
                                <a href="#"><img :src="appstore" alt=""></a>
                            </div>
                        </div>
                    </div>
                    <div class="footer-social-icon space-x-[30px] pt-6">
                        <a href="#"><i class="fab fa-facebook-f text-[18px] text-[#fff]"></i></a>
                        <a href="#"><i class="fab fa-twitter text-[18px] text-[#fff]"></i></a>
                        <a href="#"><i class="fab fa-instagram text-[18px] text-[#fff]"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in text-[18px] text-[#fff]"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <section class="pt-4 pb-6 bg-[#000] border-t-1 border-[#FFFFFF]">
         <div>
            <div class="container">
                <p class="text-center text-[16px] font-normal text-[#ddd] leading-6">&copy; Copyright Rimel 2022. All right reserved</p>
            </div>
        </div>
    </section>

</template>

<script setup>
    import footerlogo from "../assets/images/logo/footer-logo.png"
    import scan from '../assets/images/logo/scan.png'
    import playstore from '../assets/images/logo/Google-Play-Logo.png'
    import appstore from '../assets/images/logo/app-store.png'
</script>