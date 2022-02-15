<template>
	<div class="home"></div>
</template>

<script lang="ts" setup>
import { ref, computed, watchEffect, watch, effectScope } from 'vue';
const count = ref(1);
const scope = effectScope();

scope.run(() => {
	watch(count, (count, prevCount) => {
		console.log('watch scope count:', count);
	});
	watchEffect(() => {
		console.log('watchEffect scope count:', count.value);
	});
});
// 处理该作用域内的所有 effect
scope.stop();
watch(count, (count, prevCount) => {
	console.log('watch count:', count);
});
watchEffect(() => {
	console.log('watchEffect count:', count.value);
});
const plusOne = computed(() => count.value);
console.log('plusOne', plusOne.value, count.value); // 1
plusOne.value++; // err
console.log('plusOne', plusOne.value, count.value); // 1
const plusTwo = computed({
	get: () => count.value,
	set: val => {
		count.value = val;
	}
});
console.log('plusTwo', plusTwo.value, count.value); // 1
plusTwo.value++;
console.log('plusTwo', plusTwo.value, count.value); // 2

setTimeout(() => {
	count.value++;
	// -> logs 3
}, 100);
</script>
<style lang="scss" scoped></style>
