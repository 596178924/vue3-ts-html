<template>
	<div class="home">
		<p class="red">{{counter}}</p>
		<button @click="increment">increment</button>
	</div>
</template>

<script setup lang="ts" >
import { useStoreCounter } from "@/PiniaStore/counter"
const store = useStoreCounter();
console.log(store)
let {counter} = store;
console.log(counter)
function increment() {
	counter+1;
}
store.$reset()

</script>
<style lang="scss" scoped>
.red {
	color: #ff0000;
}
</style>