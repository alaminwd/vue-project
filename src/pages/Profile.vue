<template>
  <section class="pb-[140px]">
    <div class="container mx-auto px-4 lg:px-0">

      <!-- Welcome -->
      <div class="flex justify-center sm:justify-end py-8 sm:py-12">
        <p class="text-sm sm:text-base text-black font-normal">
          Welcome!
          <span class="text-[#DB4444] font-medium"> Md. Al Amin</span>
        </p>
      </div>

      <!-- Layout -->
      <div class="flex flex-col lg:flex-row gap-8">

        <!-- Sidebar -->
        <aside class="w-full lg:w-1/4">
          <ul
            class="flex flex-row lg:flex-col justify-between lg:justify-start
                   bg-white shadow-soft rounded-md p-4 space-y-0 lg:space-y-3"
          >
            <li>
              <a class="font-medium text-sm sm:text-base hover:text-[#DB4444]" href="#">
                My Account
              </a>
            </li>
            <li>
              <a class="font-medium text-sm sm:text-base hover:text-[#DB4444]" href="#">
                My Orders
              </a>
            </li>
            <li>
              <a class="font-medium text-sm sm:text-base hover:text-[#DB4444]" href="#">
                My Wishlist
              </a>
            </li>
          </ul>
        </aside>

        <!-- Content -->
        <main class="w-full lg:w-3/4 bg-white shadow-soft rounded-md p-6 sm:p-10">
          <h3 class="text-lg sm:text-xl font-medium text-[#DB4444] mb-6">
            Edit Your Profile
          </h3>

          <form class="space-y-8">

            <!-- Personal Info -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div class="flex flex-col">
                <label class="text-sm text-black/50 mb-2">
                  First Name <span class="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  class="bg-[#F5F5F5] py-2.5 px-4 rounded-md
                         focus:outline-none focus:ring-2 focus:ring-[#DB4444]/40"
                />
              </div>

              <div class="flex flex-col">
                <label class="text-sm text-black/50 mb-2">
                  Last Name <span class="text-red-400">*</span>
                </label>
                <input class="bg-[#F5F5F5] py-2.5 px-4 rounded-md focus:ring-2 focus:ring-[#DB4444]/40" />
              </div>

              <div class="flex flex-col">
                <label class="text-sm text-black/50 mb-2">
                  Email Address <span class="text-red-400">*</span>
                </label>
                <input type="email" class="bg-[#F5F5F5] py-2.5 px-4 rounded-md focus:ring-2 focus:ring-[#DB4444]/40" />
              </div>

              <div class="flex flex-col">
                <label class="text-sm text-black/50 mb-2">
                  Address <span class="text-red-400">*</span>
                </label>
                <input class="bg-[#F5F5F5] py-2.5 px-4 rounded-md focus:ring-2 focus:ring-[#DB4444]/40" />
              </div>

            </div>

            <!-- Password -->
            <div>
              <h4 class="text-base sm:text-lg font-medium text-[#DB4444] mb-6">
                Password Change
              </h4>

              <div class="space-y-6">
                <input type="password" placeholder="Current Password"
                  class="w-full bg-[#F5F5F5] py-2.5 px-4 rounded-md focus:ring-2 focus:ring-[#DB4444]/40" />
                <input type="password" placeholder="New Password"
                  class="w-full bg-[#F5F5F5] py-2.5 px-4 rounded-md focus:ring-2 focus:ring-[#DB4444]/40" />
                <input type="password" placeholder="Confirm Password"
                  class="w-full bg-[#F5F5F5] py-2.5 px-4 rounded-md focus:ring-2 focus:ring-[#DB4444]/40" />
              </div>
            </div>

            <!-- Submit -->
            <div class="flex justify-end">
              <button
                class="bg-[#DB4444] hover:bg-red-600 transition
                       text-white text-sm sm:text-base font-medium
                       px-8 py-3 rounded-md"
              >
                Save Changes
              </button>
            </div>

          </form>
        </main>
      </div>
    </div>
  </section>
</template>

<script setup></script>
