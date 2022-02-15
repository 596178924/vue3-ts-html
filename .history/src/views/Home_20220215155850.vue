<template>
	<div class="home">
		<p class="red">{{ useStoreCounter.counter }}</p>
		<button @click="useStoreCounter.increment">increment</button>
		<button @click="handleClick">handleClick</button>
	</div>
</template>

<script setup lang="ts" >
import { UseStoreCounter } from "@/PiniaStore/counter"
import { ref } from "vue";
const useStoreCounter = UseStoreCounter()
console.log(useStoreCounter)
// let counter = ref(0);

function handleClick() {
	// useStoreCounter.counter += 5;
	// useStoreCounter.$patch({
	// 	counter: useStoreCounter.counter + 5
	// })
	useStoreCounter.$patch((state) => {
		state.counter++
	});
	console.log("useStoreCounter.counter", useStoreCounter.counter)
}
</script>
<style lang="scss" scoped>
.red {
	color: #ff0000;
}
</style>