import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    isLoggedIn: false,
  }),
  actions: {
    toggleLogged() {
      // this.isLoggedIn = true;
      this.isLoggedIn = !this.isLoggedIn
    },
  },
})
