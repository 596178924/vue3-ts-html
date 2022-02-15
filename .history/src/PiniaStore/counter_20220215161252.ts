import { defineStore } from "pinia"

export const UseStoreCounter = defineStore('counter', {
	state: () => ({
		counter: 0,
		name: 'pinia',
		isAdmin: true,
		phone: '15581609046'
	}),
	getters: {
		doubleCounter: ({ counter }) => counter * 2,
		phoneHidden: ({ phone }) => {
			const p = phone.toString().replace(/^(\d{3})\d{4}(\d{4})/, '$1****$2')
			console.log(phone,p)
			return p
		},
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