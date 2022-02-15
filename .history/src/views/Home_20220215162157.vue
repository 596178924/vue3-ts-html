<template>
	<div class="home">
		
		<p class="red">{{ 'phoneHidden - ' + phoneHidden }}</p>
		<p class="red">{{ 'useStoreCounter.counter - ' + useStoreCounter.counter }}</p>
		<p class="red">{{ 'counter - ' + counter }}</p>
		<p class="red">{{ 'useStoreCounter.doubleCounter' + useStoreCounter.doubleCounter }}</p>
		<button @click="useStoreCounter.increment">increment</button>
		<button @click="handleClick">handleClick</button>
	</div>
</template>

<script setup lang="ts" >
import { UseStoreCounter } from "@/PiniaStore/counter"
import { storeToRefs } from "pinia";
import { ref } from "vue";

const useStoreCounter = UseStoreCounter()
console.log(useStoreCounter)
// let counter = ref(0);
const { counter,phoneHidden } = storeToRefs(useStoreCounter);

function handleClick() {
	// useStoreCounter.counter++;
	// useStoreCounter.counter += 5;
	useStoreCounter.$state.counter += 5;
	// useStoreCounter.$patch({
	// 	counter: useStoreCounter.counter + 5
	// })
	// useStoreCounter.$patch((state) => {
	// 	state.counter += 5
	// });
	console.log("useStoreCounter.counter", useStoreCounter.counter)
}
</script>
<style lang="scss" scoped>
.red {
	color: #ff0000;
}
</style>