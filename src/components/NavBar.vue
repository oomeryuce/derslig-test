<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <nav class="bg-gray-800">
    <div class="w-full px-2 sm:px-6 lg:px-20 2xl:px-80">
      <div class="relative flex h-16 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex flex-shrink-0 items-center">
            <RouterLink to="/" class="text-white block text-2xl font-bold">
              BiletX
            </RouterLink>
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <RouterLink
                to="/"
                class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Events
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div id="mobile-menu" class="sm:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <RouterLink
          to="/"
          class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Home
        </RouterLink>
      </div>
    </div>
  </nav>
</template>
