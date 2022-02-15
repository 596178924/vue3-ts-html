<template>
	<div class="home">
		<p class="red">{{ store.counter }}</p>
		<button @click="store.increment">increment</button>
	</div>
</template>

<script setup lang="ts" >
import { useStoreCounter } from "@/PiniaStore/counter"
import { ref } from "vue";
const store = useStoreCounter();
console.log(store)
// let counter = ref(0);
</script>
<style lang="scss" scoped>
.red {
	color: #ff0000;
}
</style>