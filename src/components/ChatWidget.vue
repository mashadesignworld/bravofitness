<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

// Custom configuration parameters
const whatsappNumber = "254700000000" // Replace with Bravo Gym's real phone number
const defaultMessage = "Hey Bravo Gym! 🏋️ I'm looking at your 4-Day Fitness Split and want to learn more about joining. Can I get some details?"

// Generate the fully structured WhatsApp link
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`
</script>

<template>
  <div class="fixed bottom-6 right-6 z-50 font-sans antialiased">
    
    <!-- Dynamic Popup Message Panel -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-4 opacity-0 scale-95"
      enter-to-class="translate-y-0 opacity-100 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100 scale-100"
      leave-to-class="translate-y-4 opacity-0 scale-95"
    >
      <div v-if="isOpen" class="mb-4 w-80 bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden">
        
        <!-- Premium Brand Header Box -->
        <div class="bg-gradient-to-r from-red-600 to-red-700 p-4 text-white relative">
          <div class="flex items-center space-x-3">
            <div class="relative">
              <!-- Avatar Placeholder -->
              <div class="w-10 h-10 rounded-full bg-black/20 border border-white/20 flex items-center justify-center font-black text-sm tracking-tighter">
                B⚡
              </div>
              <!-- Green Active Dot Indicator -->
              <span class="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-red-600"></span>
            </div>
            <div>
              <h4 class="font-bold text-sm tracking-wide uppercase">Bravo Concierge</h4>
              <p class="text-[11px] text-red-100">Typically replies within minutes</p>
            </div>
          </div>
          <!-- Close Trigger X -->
          <button @click="isOpen = false" class="absolute top-4 right-4 text-white/70 hover:text-white transition text-lg">&times;</button>
        </div>

        <!-- Chat Main Context Area -->
        <div class="p-4 bg-zinc-900/40">
          <div class="bg-zinc-900 border border-zinc-800/60 p-3 rounded-xl rounded-tl-none max-w-[85%] text-xs text-zinc-300 leading-relaxed">
            Hey there! 👋 Ready to smash your goals at Bravo Gym? Let us know what questions you have about our membership tiers or programs!
          </div>
        </div>

        <!-- Conversion Navigation Link Wrapper -->
        <div class="p-4 pt-0 bg-zinc-900/40">
          <a 
            :href="whatsappLink"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center space-x-2 w-full bg-[#25D366] hover:bg-[#20ba56] text-black text-xs font-black uppercase tracking-wider py-3 rounded-xl transition shadow-lg shadow-green-950/20"
          >
            <!-- Customized Inline SVG WhatsApp Logo Icon -->
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.93 0c3.166.001 6.141 1.233 8.378 3.469 2.237 2.236 3.467 5.214 3.466 8.382-.003 6.582-5.338 11.93-11.87 11.93-2.01-.001-3.987-.51-5.742-1.48L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.335 0 9.676-4.321 9.678-9.63 0-2.572-1.002-4.992-2.822-6.813-.001 0-.001-.001-.002-.002C16.349 2.342 13.93 1.34 11.357 1.34 6.024 1.34 1.682 5.661 1.68 10.97c0 1.59.425 3.133 1.232 4.496l-.995 3.636 3.73-.978z"/>
            </svg>
            <span>Start WhatsApp Chat</span>
          </a>
        </div>

      </div>
    </Transition>

    <!-- Master Launcher Button Switch -->
    <button 
      @click="isOpen = !isOpen"
      :class="[
        'flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition duration-300 transform hover:scale-110 active:scale-95 border z-50 relative',
        isOpen 
          ? 'bg-zinc-900 border-zinc-800 text-red-500' 
          : 'bg-red-600 border-red-500 text-white shadow-red-950/50'
      ]"
    >
      <span v-if="isOpen" class="text-xl font-bold">&times;</span>
      <!-- Message Chat Bubble Custom Icon Design Layout -->
      <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
      </svg>
    </button>

  </div>
</template>