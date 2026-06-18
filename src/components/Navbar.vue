<script setup lang="ts">
import { ref } from 'vue'
import bravoimg from '../assets/bravo.png'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
} 

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Classes', href: '#classes' },
  { name: 'Schedules', href: '#schedules' },
  { name: 'Pricing', href: '#pricing' },
]
</script>

<template>
  <nav class="absolute top-0 left-0 w-full z-50 bg-zinc-950/40 backdrop-blur-md border-b border-white/10 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-24"> <div class="flex-shrink-0 flex items-center gap-3">
          <img class="h-14 w-auto object-contain rounded-sm" :src="bravoimg" alt="Bravo Gym Logo" />
        </div>

        <div class="hidden md:flex items-center space-x-10 font-bold tracking-widest text-xs uppercase">
          <a 
            v-for="link in navLinks" 
            :key="link.name" 
            :href="link.href"
            class="text-zinc-200 hover:text-orange-500 transition-colors duration-200"
          >
            {{ link.name }}
          </a>
        </div>

        <div class="hidden md:block">
          <a 
            href="#membership" 
            class="border-2 border-white hover:border-orange-500 hover:bg-orange-500 hover:text-black text-white font-black uppercase tracking-widest text-xs px-6 py-3 transition-all duration-300"
          >
            Join Now
          </a>
        </div>

        <div class="md:hidden flex items-center">
          <button @click="toggleMobileMenu" type="button" class="text-zinc-200 hover:text-white focus:outline-none">
            <svg v-if="!isMobileMenuOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div v-show="isMobileMenuOpen" class="md:hidden bg-zinc-950/95 backdrop-blur-lg border-b border-white/10">
      <div class="px-4 pt-4 pb-6 space-y-2 text-center">
        <a 
          v-for="link in navLinks" 
          :key="link.name" 
          :href="link.href"
          @click="isMobileMenuOpen = false"
          class="block text-zinc-200 hover:text-orange-500 py-3 text-sm font-bold uppercase tracking-wider"
        >
          {{ link.name }}
        </a>
        <div class="pt-4">
          <a 
            href="#membership" 
            @click="isMobileMenuOpen = false"
            class="block w-full border border-white text-white font-bold uppercase tracking-wider text-sm py-3"
          >
            Join Now
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>