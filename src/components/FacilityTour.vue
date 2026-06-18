<script setup lang="ts">
import gymequipment from "../assets/gymequipment.jpg"
// Ready for your custom setup
</script>

<template>
  <section id="about" class="bg-white text-zinc-900 py-24 lg:py-32 border-b border-zinc-100 relative overflow-hidden">
    <!-- Clean light background branding element -->
    <div class="absolute right-0 bottom-0 text-[16rem] font-black text-zinc-100 select-none tracking-tighter leading-none translate-y-12 translate-x-6 uppercase pointer-events-none">
      Bravo
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <!-- Left Column: High-Impact Editorial Copy -->
        <div class="lg:col-span-6 space-y-8">
          
          <!-- Small Label Accent -->
          <div class="flex items-center gap-3 group cursor-pointer">
            <span class="inline-flex items-center justify-center bg-orange-500 text-black rounded-full p-2 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span class="text-xs font-black tracking-widest uppercase text-zinc-500 group-hover:text-orange-500 transition-colors duration-300">
              Take The Tour
            </span>
          </div>

          <!-- Main Heavy Header (Adjusted for white bg) -->
          <h2 class="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-none text-zinc-950">
            Discover Our <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-zinc-800">
              World Class
            </span> <br />
            Facilities & Services
          </h2>

          <!-- Descriptive Subtext -->
          <div class="space-y-4 max-w-xl">
            <p class="text-lg font-bold text-zinc-800 tracking-wide">
              BRAVO clubs are Africa’s best-equipped gyms.
            </p>
            <p class="text-zinc-600 font-light leading-relaxed text-base sm:text-lg">
              We provide cutting-edge strength conditioning spaces, custom-engineered athletic cardio zones, and elite recovery lounges designed to give you an unparalleled training ecosystem. Every detail is curated to optimize human performance.
            </p>
          </div>

          <!-- CTA link -->
          <div class="pt-2">
            <a 
              href="#membership" 
              class="inline-flex items-center gap-4 text-xs font-black tracking-widest uppercase text-zinc-900 hover:text-orange-600 transition-colors duration-300 group"
            >
              Explore Memberships
              <svg class="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300 text-orange-500" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Right Column: Immersive Media Window -->
        <div class="lg:col-span-6 relative">
          <!-- Subtle border accent using standard light grey -->
          <div class="absolute -inset-4 border border-zinc-200 rounded-lg pointer-events-none scale-95 group-hover:scale-100 transition-transform duration-700"></div>
          
          <div class="relative aspect-video sm:aspect-[16/10] bg-zinc-100 rounded-sm overflow-hidden border border-zinc-200 shadow-xl group">
            <img 
             :src="gymequipment" 
              alt="World class training gym floor" 
              class="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
            />

            <!-- Floating Label -->
            <div class="absolute bottom-4 left-4 z-20 bg-zinc-950/90 backdrop-blur-md px-4 py-2 border border-white/10 rounded-sm">
              <p class="text-[10px] font-black uppercase tracking-widest text-orange-400">Premium Zone</p>
              <p class="text-xs font-bold text-white uppercase">Olympic Lifting Platforms</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>