<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])

// Track the currently active day/tab
const activeTab = ref(1)

// Reset to Day 1 whenever the modal is closed/reopened
watch(() => props.isOpen, (newVal) => {
  if (newVal) activeTab.value = 1
})

// Workout Data structural mapping from your screenshot
const programData = {
  1: {
    title: "Chest & Triceps",
    exercises: [
      { name: "Flat Bench Press", details: "2 sets / 12 reps" },
      { name: "Incline Bench Press", details: "3 sets / 12 reps" },
      { name: "Decline Bench Press", details: "3 sets / 12 reps" },
      { name: "Incline Machine", details: "4 sets / 12 reps" }
    ]
  },
  2: {
    title: "Back & Biceps",
    exercises: [
      { name: "Lat Pull Down", details: "3 sets / 15 reps" },
      { name: "T-Bar Row", details: "3 sets / 15 reps" },
      { name: "One arm Rowing", details: "3 sets / 15 reps" },
      { name: "Bend OverRow", details: "3 sets / 15 reps" }
    ]
  },
  3: {
    title: "Legs",
    exercises: [
      { name: "Walking Lunges", details: "3 sets / 15 reps" },
      { name: "Leg Extension", details: "3 sets / 15 reps" },
      { name: "Leg Curl", details: "3 sets / 15 reps" },
      { name: "Leg Press", details: "3 sets / 15 reps" }
    ]
  },
  4: {
    title: "Full Body",
    exercises: [
      { name: "Squats to Shoulder Press", details: "4 sets / 15 reps" },
      { name: "Alternate Dumbbell Press", details: "4 sets / 15 reps" },
      { name: "Kettle bell Swings", details: "4 sets / 15 reps" }
    ]
  }
}
</script>

<template>
  <Transition
    enter-active-class="ease-out duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="ease-in duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      
      <div class="absolute inset-0" @click="emit('close')"></div>

      <div class="relative bg-zinc-950 border border-zinc-800 rounded-xl w-full max-w-2xl overflow-hidden shadow-2xl z-10 transform transition-all">
        
        <div class="p-6 border-b border-zinc-800 flex justify-between items-center bg-zinc-900/50">
          <div>
            <span class="text-xs font-bold tracking-widest text-red-500 uppercase">Bravo Fitness Split</span>
            <h2 class="text-2xl font-black text-white uppercase tracking-tight">4-Day World-Class Workout</h2>
          </div>
          <button @click="emit('close')" class="text-zinc-400 hover:text-white text-2xl p-2 transition">
            &times;
          </button>
        </div>

        <div class="flex border-b border-zinc-900 bg-zinc-900/20 p-2 gap-1">
          <button 
            v-for="day in [1, 2, 3, 4]" 
            :key="day"
            @click="activeTab = day"
            :class="[
              'flex-1 py-2.5 text-sm font-bold uppercase tracking-wider rounded-lg transition duration-200',
              activeTab === day 
                ? 'bg-red-600 text-white shadow-md shadow-red-900/20' 
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
            ]"
          >
            Day {{ day }}
          </button>
        </div>

        <div class="p-6 min-h-[320px] flex flex-col justify-between">
          <div>
            <div class="mb-4">
              <span class="text-xs text-zinc-500 uppercase tracking-wider">Target Focus</span>
              <h3 class="text-xl font-bold text-white uppercase tracking-wide">{{ programData[activeTab].title }}</h3>
            </div>

            <div class="space-y-3">
              <div 
                v-for="(exercise, index) in programData[activeTab].exercises" 
                :key="index"
                class="flex items-center justify-between p-4 bg-zinc-900/60 border border-zinc-800/40 rounded-xl hover:border-zinc-700/60 transition"
              >
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 rounded-lg bg-red-950/40 border border-red-900/50 flex items-center justify-center">
                    <span class="text-red-500 text-xs font-bold">{{ index + 1 }}</span>
                  </div>
                  <span class="font-medium text-zinc-100 tracking-wide">{{ exercise.name }}</span>
                </div>
                <span class="text-xs font-semibold px-3 py-1 bg-red-950 text-red-400 rounded-full border border-red-900/40">
                  {{ exercise.details }}
                </span>
              </div>
            </div>
          </div>

          <div class="mt-8 pt-4 border-t border-zinc-900 flex justify-between items-center">
            <button 
              @click="activeTab > 1 ? activeTab-- : null"
              :disabled="activeTab === 1"
              class="text-xs font-bold uppercase tracking-wider px-4 py-2 rounded border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900 disabled:opacity-20 disabled:pointer-events-none transition"
            >
              Previous Day
            </button>
            <button 
              @click="activeTab < 4 ? activeTab++ : emit('close')"
              class="text-xs font-bold uppercase tracking-wider px-5 py-2 rounded bg-zinc-100 text-black hover:bg-white transition"
            >
              {{ activeTab === 4 ? 'Finish / Close' : 'Next Day' }}
            </button>
          </div>

        </div>

      </div>
    </div>
  </Transition>
</template>