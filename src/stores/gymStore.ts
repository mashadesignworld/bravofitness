import { defineStore } from 'pinia'

export const useGymStore = defineStore('gym', {
  state: () => ({
    gymName: 'Bravo Gym and Fitness',
    heroFirstLine: 'BUILD YOUR',

    heroHighlight: 'ULTIMATE',

    heroLastLine: 'SELF',
    heroDescription:
      'Experience elite personal coaching, dynamic athletic programs, and an uncompromising atmosphere engineered to elevate your lifestyle.',
 
      whatsappNumber: '254705762871',
      whatsappMessage:
      'Hello Bravo Gym, I would like to know more about your membership plans.'
    }),
    getters: {

    whatsappLink: (state) => {
      const message = encodeURIComponent(state.whatsappMessage)

      return `https://wa.me/${state.whatsappNumber}?text=${message}`
    }

  }

})