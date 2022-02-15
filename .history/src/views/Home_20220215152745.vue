<template>
	<div class="home">
		<p class="red">111</p>
	</div>
</template>

<script setup lang="ts" >
import { useStoreCounter } from "@/PiniaStore/counter"
const store = useStoreCounter();
console.log(store)

</script>
<style lang="scss" scoped>
.red {
	color: #ff0000;
}
</style>