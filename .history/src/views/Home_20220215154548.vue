<template>
	<div class="home">
		<p class="red">{{ counter }}</p>
		<button @click="increment">increment</button>
	</div>
</template>

<script setup lang="ts" >
import { useStoreCounter } from "@/PiniaStore/counter"
import { ref } from "vue";
const store = useStoreCounter();
console.log(store)
let counter = ref(0);
function increment() {
	counter.value++;
	console.log(counter,counter.value)
}

</script>
<style lang="scss" scoped>
.red {
	color: #ff0000;
}
</style>