import { defineStore } from "pinia"

export const useStoreCounter = defineStore('counter', {
	state: () => ({
		counter: 0,
		name: 'pinia',
		isAdmin: true
	}),
	getters:{
		doubleCounter:({counter})=> counter * 2
	},
	actions:{
		increment() {
			this.counter++;
			console.log(this.counter)
		},
		randomizeCounter() {
			this.counter = Math.round(100 * Math.random())
		}
	}
})