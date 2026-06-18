<script setup lang="ts">
// Highly structured program arrays for clean layout management
import strength from '../assets/strength.jpg'
import cardio from '../assets/cardio.jpg'
import musclerepair from '../assets/musclerepair.jpg'
const programs = [
  {
    id: 1,
    title: 'Strength & Iron',
    tag: 'Power & Volume',
    description: 'Olympic platforms, premium free weights, and plate-loaded machines engineered to build pure physical mass and absolute strength.',
    image: strength,
  },
  {
    id: 2,
    title: 'Athletic Cardio',
    tag: 'Metabolic Engine',
    description: 'High-intensity skillmills, air bikes, and custom turf tracks designed to push your aerobic capacity and torch fat clean off.',
    image: cardio,
  },
  {
    id: 3,
    title: 'Elite Recovery',
    tag: 'Longevity & Repair',
    description: 'Dedicated post-workout luxury recovery setups, compression therapy, and mobility guidance to optimize muscular repair.',
    image: musclerepair,
  }
]
</script>

<template>
  <section id="classes" class="bg-zinc-950 text-white py-24 border-b border-zinc-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div class="max-w-xl space-y-4">
          <p class="text-orange-500 font-black tracking-widest text-xs uppercase">
            Choose Your Discipline
          </p>
          <h2 class="text-4xl sm:text-5xl font-black uppercase tracking-tight leading-none">
            Elite Training <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Programs</span>
          </h2>
        </div>
        <div>
          <p class="text-zinc-400 font-light max-w-sm text-sm sm:text-base">
            Every program features custom training structures curated by world-class professional coaches.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="program in programs" 
          :key="program.id"
          class="group relative bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden flex flex-col justify-between aspect-[3/4] transition-all duration-500 hover:border-zinc-700 shadow-xl"
        >
          <div class="absolute inset-0 z-0 overflow-hidden">
            <img 
              :src="program.image" 
              :alt="program.title"
              class="w-full h-full object-cover  contrast-115 brightness-[0.65] group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-[0.25] transition-all duration-700"
            />
          </div>

          <div class="relative z-10 p-6 self-start">
            <span class="bg-orange-500 text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-sm">
              {{ program.tag }}
            </span>
          </div>

          <div class="relative z-10 p-6 sm:p-8 space-y-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h3 class="text-2xl font-black uppercase tracking-wide text-white">
              {{ program.title }}
            </h3>
            <p class="text-zinc-400 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {{ program.description }}
            </p>
            
            <div class="pt-2">
              <a 
                href="#membership" 
                class="inline-flex items-center gap-2 text-xs font-black tracking-widest uppercase text-white group-hover:text-orange-500 transition-colors duration-300"
              >
                Join Program
                <svg class="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            </div>
          </div>

          <div class="absolute bottom-0 left-0 w-full h-[3px] bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </div>
      </div>

    </div>
  </section>
</template>