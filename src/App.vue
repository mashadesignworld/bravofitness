<script setup lang="ts">

import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import FacilityTour from './components/FacilityTour.vue'
import Programs from './components/Programs.vue'

</script>

<template>
<div class="min-h-screen bg-zinc-950 text-white antialiased">
  <Navbar />
  <main>
  <Hero />
  <FacilityTour />
  <Programs />
  </main>
  </div>
</template>
