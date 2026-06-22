<script setup lang="ts">

import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import FacilityTour from './components/FacilityTour.vue'
import Programs from './components/Programs.vue'
import PricingSection from './components/PricingSection.vue'
import ChatWidget from './components/ChatWidget.vue'
import MainFooter from './components/MainFooter.vue'

</script>

<template>
<div class="min-h-screen bg-zinc-950 text-white antialiased">
  <Navbar />
  <main>
  <Hero />
  <FacilityTour />
  <Programs />
  <PricingSection />
  </main>
  <MainFooter />
  <ChatWidget />
  </div>
</template>
