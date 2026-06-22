<script setup>
import { ref, computed } from 'vue'

// Billing cycle state: 'monthly' or 'annual'
const billingCycle = ref('monthly')

// Membership plans data
const plans = [
  {
    name: 'Club',
    tagline: 'Essential access for local grinders.',
    monthlyPrice: 3500, // Regular monthly price (KES example)
    annualMonthlyEquivalent: 2900, // Equivalent monthly cost if paid annually
    features: [
      'Access to home club facilities',
      'Full cardio & free weights area',
      'Free fitness assessment (1x)',
      'Locker room & shower access',
    ],
    badges: [],
    isPopular: false,
    cta: 'Join Club Tier'
  },
  {
    name: 'National Elite',
    tagline: 'Our ultimate multi-club experience.',
    monthlyPrice: 5500,
    annualMonthlyEquivalent: 4500,
    features: [
      'Access to ALL Bravo Gym locations',
      'Bring a friend for free anytime (Buddy Tag)',
      'Unlimited group fitness & HIIT classes',
      'Premium recovery zone & sauna access',
      '10% discount on Bravo nutrition & apparel',
    ],
    badges: ['ELEVATE PASS', 'BEST VALUE'],
    isPopular: true,
    cta: 'Go National Elite'
  },
  {
    name: 'VIP Executive',
    tagline: 'All-inclusive training & recovery ecosystem.',
    monthlyPrice: 8500,
    annualMonthlyEquivalent: 7200,
    features: [
      'Everything in National Elite',
      'Dedicated private VIP locker room',
      '2x Personal Training sessions per month',
      'Complimentary pre-workout shake per visit',
      'Priority class booking via mobile app',
    ],
    badges: ['ALL ACCESS'],
    isPopular: false,
    cta: 'Claim VIP Status'
  }
]
</script>

<template>
  <section class="bg-black text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <!-- Section Background Glow elements -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none"></div>

    <div class="max-w-7xl mx-auto relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-xs font-bold tracking-widest text-red-500 uppercase block mb-3">Membership Tiers</span>
        <h2 class="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
          Choose Your <span class="text-red-600">Bravo Split</span>
        </h2>
        <p class="text-zinc-400 text-lg">
          Flexible membership structures built around your commitment style. No hidden fees, pure performance.
        </p>

        <!-- Dynamic Billing Toggle Switch -->
        <div class="mt-10 flex items-center justify-center">
          <div class="bg-zinc-900 border border-zinc-800 p-1 rounded-xl flex relative">
            <button 
              @click="billingCycle = 'monthly'"
              :class="[
                'px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 relative z-10',
                billingCycle === 'monthly' ? 'bg-red-600 text-white shadow-md' : 'text-zinc-400 hover:text-zinc-200'
              ]"
            >
              Monthly Base
            </button>
            <button 
              @click="billingCycle = 'annual'"
              :class="[
                'px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 relative z-10 flex items-center space-x-2',
                billingCycle === 'annual' ? 'bg-red-600 text-white shadow-md' : 'text-zinc-400 hover:text-zinc-200'
              ]"
            >
              <span>Annual Save</span>
              <span class="text-[10px] bg-red-950 text-red-400 px-1.5 py-0.5 rounded border border-red-800/60 font-black normal-case">
                Save ~15%
              </span>
            </button>
          </div>
        </div>
      </div>

      <!-- Pricing Card Grid Container -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        <div v-for="plan in plans" :key="plan.name" 
          :class="[
            'relative bg-zinc-950 border rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2',
            plan.isPopular 
              ? 'border-red-600 shadow-2xl shadow-red-900/10 ring-1 ring-red-600' 
              : 'border-zinc-800 hover:border-zinc-700'
          ]"
        >
          <!-- Popular Ribbon -->
          <div v-if="plan.isPopular" class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
            Most Popular
          </div>

          <!-- Top Meta Content -->
          <div>
            <!-- Tier Badges Stack -->
            <div class="flex flex-wrap gap-1.5 mb-4">
              <span v-for="badge in plan.badges" :key="badge" class="text-[9px] font-black tracking-widest bg-zinc-900 border border-zinc-800 text-zinc-300 px-2 py-0.5 rounded">
                {{ badge }}
              </span>
            </div>

            <h3 class="text-2xl font-black uppercase tracking-wide text-white">{{ plan.name }}</h3>
            <p class="text-zinc-500 text-sm mt-1.5 min-h-[40px]">{{ plan.tagline }}</p>

            <!-- Price Dynamics Block -->
            <div class="my-6 border-b border-zinc-900 pb-6 flex items-baseline">
              <span class="text-zinc-500 text-sm font-bold uppercase tracking-wider mr-1">Ksh</span>
              <span class="text-5xl font-black tracking-tight text-white transition-all duration-300">
                {{ billingCycle === 'monthly' ? plan.monthlyPrice.toLocaleString() : plan.annualMonthlyEquivalent.toLocaleString() }}
              </span>
              <span class="text-zinc-500 text-sm font-medium ml-2">/mo</span>
            </div>

            <!-- Alternative billing disclaimer anchor -->
            <p class="text-[11px] text-zinc-500 -mt-4 mb-6">
              {{ billingCycle === 'monthly' ? 'Billed flexi-monthly. Cancel anytime.' : `Billed annually upfront.` }}
            </p>

            <!-- Premium Amenities Checklist Grid -->
            <ul class="space-y-3.5 mb-8">
              <li v-for="feature in plan.features" :key="feature" class="flex items-start text-sm text-zinc-300">
                <svg class="w-4 h-4 text-red-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>

          <!-- Conversion Bottom Trigger Button -->
          <button 
            :class="[
              'w-full py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs transition duration-300',
              plan.isPopular 
                ? 'bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-900/30' 
                : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-800'
              ]"
          >
            {{ plan.cta }}
          </button>

        </div>
      </div>

    </div>
  </section>
</template>