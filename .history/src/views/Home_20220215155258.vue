<template>
	<div class="home">
		<p class="red">{{ useStoreCounter.counter }}</p>
		<button @click="useStoreCounter.increment">increment</button>
	</div>
</template>

<script setup lang="ts" >
import { UseStoreCounter } from "@/PiniaStore/counter"
import { ref } from "vue";
const useStoreCounter = UseStoreCounter()
console.log(useStoreCounter)
// let counter = ref(0);
</script>
<style lang="scss" scoped>
.red {
	color: #ff0000;
}
</style>