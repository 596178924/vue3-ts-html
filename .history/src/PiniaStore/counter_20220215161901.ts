import { defineStore } from "pinia"

export const UseStoreCounter = defineStore('counter', {
	state: () => ({
		counter: 0,
		name: 'pinia',
		isAdmin: true,
		phone: '15581609046'
	}),
	getters: {
		doubleCounter: ({ counter }):number => counter * 2,
		phoneHidden: ({ phone }):string => phone.toString().replace(/^(\d{3})\d{4}(\d{4})/, '$1****$2'),
	},
	actions: {
		increment() {
			this.counter++;
			console.log("UseStoreCounter increment", this.counter)
		},
		randomizeCounter() {
			this.counter = Math.round(100 * Math.random())
		}
	}
})