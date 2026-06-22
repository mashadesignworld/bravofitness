<script setup lang="ts">
import { ref } from 'vue'



const emailInput = ref('')
const newsletterStatus = ref('')
const isSubmitting = ref(false)

const handleNewsletterSubmit = async () => {
  if (!emailInput.value) {
    newsletterStatus.value = "Please enter a valid email address."
    return
  }
  
  isSubmitting.value = true
  newsletterStatus.value = ""

  try {
    // Portfolio tip: Mocking a newsletter API call to simulate network delays
    await new Promise((resolve) => setTimeout(resolve, 1200))
    newsletterStatus.value = "Welcome to the inner circle. Check your inbox!"
    emailInput.value = ""
  } catch (err) {
    newsletterStatus.value = "Something went wrong. Try again."
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <footer class="bg-gradient-to-b from-[#e6e8ed] to-[#d8dadf] border-t border-zinc-300 text-zinc-700 font-sans antialiased relative overflow-hidden">
    
    <div class="h-[2px] w-full bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-60"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 pb-12 border-b border-zinc-300">
        
        <div class="space-y-4 bg-zinc-950 p-6 rounded-2xl shadow-xl border border-zinc-900">
          <div class="text-2xl font-black tracking-tighter text-white uppercase flex items-center space-x-3">
            <img 
              src="../assets/bravo.png" 
              alt="bravo.png" 
              class="h-9 w-auto object-contain filter drop-shadow-[0_2px_4px_rgba(255,255,255,0.1)]"
            />
            <span>Bravo<span class="text-red-500">Fitness</span></span>
          </div>
          <p class="text-xs text-zinc-400 leading-relaxed max-w-sm">
            We build elite performance spaces designed for the relentless. Elite equipment, world-class split training, and an unyielding community framework.
          </p>
          <div class="flex space-x-4 pt-2">
            <a href="#" class="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-red-500 transition duration-300">
              <span class="text-xs font-bold">IG</span>
            </a>
            <a href="#" class="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-red-500 transition duration-300">
              <span class="text-xs font-bold">YT</span>
            </a>
            <a href="#" class="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-red-500 transition duration-300">
              <span class="text-xs font-bold">FB</span>
            </a>
          </div>
        </div>

        <div class="lg:col-span-2 space-y-4 lg:pl-12 self-center">
          <h4 class="text-sm font-black uppercase tracking-widest text-zinc-900">Join the Inner Circle</h4>
          <p class="text-xs text-zinc-600">Get priority access to customized seasonal workout plans, athlete advice, and local community events.</p>
          
          <form @submit.prevent="handleNewsletterSubmit" class="flex flex-col sm:flex-row gap-3 max-w-xl">
            <input 
              v-model="emailInput"
              type="email" 
              required
              placeholder="Enter your email address"
              class="flex-1 bg-white border border-zinc-300 rounded-xl px-4 py-3.5 text-sm text-zinc-900 focus:outline-none focus:border-red-600 placeholder-zinc-400 transition shadow-inner"
            />
            <button 
              type="submit"
              :disabled="isSubmitting"
              class="bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-xl transition duration-300 whitespace-nowrap shadow-md shadow-red-900/10"
            >
              {{ isSubmitting ? 'Submitting...' : 'Subscribe' }}
            </button>
          </form>
          <p v-if="newsletterStatus" class="text-xs font-semibold text-red-600 tracking-wide mt-1 animate-pulse">{{ newsletterStatus }}</p>
        </div>

      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-zinc-300 text-sm">
        
        <div class="space-y-4">
          <h5 class="font-bold text-zinc-900 uppercase text-xs tracking-wider">Explore</h5>
          <ul class="space-y-2.5 text-zinc-600 font-medium">
            <li><a href="#home" class="hover:text-red-600 transition">Home Deck</a></li>
            <li><a href="#about" class="hover:text-red-600 transition">Our Environment</a></li>
            <li><a href="#programs" class="hover:text-red-600 transition">Training Splits</a></li>
            <li><a href="#pricing" class="hover:text-red-600 transition">Membership Tiers</a></li>
          </ul>
        </div>

        <div class="space-y-4">
          <h5 class="font-bold text-zinc-900 uppercase text-xs tracking-wider">Amenities</h5>
          <ul class="space-y-2.5 text-zinc-600 font-medium">
            <li><a href="#" class="hover:text-red-600 transition">Free Weight Arena</a></li>
            <li><a href="#" class="hover:text-red-600 transition">Cardio Training Zone</a></li>
            <li><a href="#" class="hover:text-red-600 transition">Sauna & Recovery</a></li>
            <li><a href="#" class="hover:text-red-600 transition">Private Lockers</a></li>
          </ul>
        </div>

        <div class="space-y-4 col-span-2 sm:col-span-1">
          <h5 class="font-bold text-zinc-900 uppercase text-xs tracking-wider">Operating Hours</h5>
          <ul class="space-y-2 text-xs text-zinc-600 font-medium">
            <li class="flex justify-between border-b border-zinc-300 pb-1">
              <span>Weekdays:</span>
              <span class="text-zinc-900 font-mono font-bold">05:00 AM - 10:00 PM</span>
            </li>
            <li class="flex justify-between border-b border-zinc-300 pb-1">
              <span>Saturdays:</span>
              <span class="text-zinc-900 font-mono font-bold">06:00 AM - 08:00 PM</span>
            </li>
            <li class="flex justify-between">
              <span>Sundays / Holidays:</span>
              <span class="text-zinc-900 font-mono font-bold">08:00 AM - 04:00 PM</span>
            </li>
          </ul>
        </div>

        <div class="space-y-4 col-span-2 sm:col-span-1">
          <h5 class="font-bold text-zinc-900 uppercase text-xs tracking-wider">Location</h5>
          <p class="text-xs text-zinc-600 leading-relaxed font-medium">
            Bravo Gym HQ<br />
            Nairobi, Kenya
          </p>
          <p class="text-xs font-black text-red-600 pt-1">
            ⚡ Full Power Backup Active
          </p>
        </div>

      </div>

      <div class="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500 font-medium">
        <div>
          &copy; {{ new Date().getFullYear() }} Bravo Gym. All rights reserved.
        </div>
        
        <div class="flex space-x-6">
          <a href="#" class="hover:text-zinc-900 transition">Privacy Policy</a>
          <a href="#" class="hover:text-zinc-900 transition">Terms of Service</a>
          <a href="#" class="hover:text-zinc-900 transition">Liability Waiver</a>
        </div>
      </div>

    </div>
  </footer>
</template>