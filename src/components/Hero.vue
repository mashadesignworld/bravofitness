<script setup lang="ts">
//Pinia State Management 
import { useGymStore } from '../stores/gymStore'
import { useFitnessModal } from '../composables/useFitnessModal'
import FitnessModal from './FitnessModal.vue'

const { isOpen, openModal, closeModal } = useFitnessModal()

const gymStore = useGymStore()

</script>

<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
    
    <div class="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1800" 
        alt="Bravo Gym Premium Training Facility" 
        class="w-full h-full object-cover object-center scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-zinc-950/40"></div>
    </div>

    <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
      <div class="space-y-6 max-w-3xl mx-auto">
        
        <p class="text-orange-500 font-black tracking-widest text-xs uppercase sm:text-sm">
          Welcome to {{gymStore.gymName}}
        </p>
        
        <h1 class="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-tight">
          {{gymStore.heroFirstLine}} <br class="hidden sm:inline" />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">{{gymStore.heroHighlight}}</span> {{gymStore.heroLastLine}}
        </h1>
        
        <p class="text-zinc-300 text-sm sm:text-base md:text-lg font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
          {{gymStore.heroDescription}}
        </p>
        
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <a 
             :href="gymStore.whatsappLink"
            class="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-black font-black uppercase tracking-widest text-xs px-10 py-4 transition-all duration-300 shadow-xl shadow-orange-500/10"
          >
            Get Started
          </a>
         <button 
        @click="openModal(1)"
        class="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 uppercase tracking-widest transition duration-300 transform hover:scale-105"
      >
        Our 4-Day Fitness Program
      </button>
        </div>

      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden sm:block animate-bounce">
      <a href="#about" class="text-white/40 hover:text-white transition-colors duration-200">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </a>
    </div>
  </section>
  <FitnessModal :isOpen="isOpen" @close="closeModal" />
</template>

<style scoped>
/* Optional sleek camera zoom animation for that top-tier production look */
@keyframes subtle-zoom {
  from { transform: scale(1); }
  to { transform: scale(1.08); }
}
</style>