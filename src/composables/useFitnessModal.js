// src/composables/useFitnessModal.js
import { ref, readonly } from 'vue'

// Keeping these states outside the exported function makes them "Global"
// This means any component importing this composable shares the exact same modal state
const isOpen = ref(false)
const activeTab = ref(1)
const selectedPlan = ref(null)

export function useFitnessModal() {
  
  const openModal = (initialTab = 1, plan = null) => {
    activeTab.value = initialTab
    selectedPlan.value = plan
    isOpen.value = true
  }

  const closeModal = () => {
    isOpen.value = false
  }

  const setTab = (dayNumber) => {
    if (dayNumber >= 1 && dayNumber <= 4) {
      activeTab.value = dayNumber
    }
  }

  return {
    // Wrapping state in readonly() protects it from being directly 
    // mutated by a component without using our explicit methods.
    isOpen: readonly(isOpen),
    activeTab: readonly(activeTab),
    selectedPlan: readonly(selectedPlan),
    openModal,
    closeModal,
    setTab
  }
} 