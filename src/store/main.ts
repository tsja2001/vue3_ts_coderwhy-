import { defineStore } from "pinia";

export const useMainStore = defineStore('main', {
  state: () => ({
    counter: 10
  }),
  getters:{
    douberCounter(state){
      return state.counter * 2
    }
  },
  actions: {
    changeCounter(value: number){
      this.counter = value
    }
  }
})
