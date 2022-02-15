<template>
	<div class="home">
		<p class="red">
			'useStoreCounter.doubleCounter''useStoreCounter.doubleCounter''useStoreCounter.doubleCounter''useStoreCounter.doubleCounter'
		</p>
	</div>
</template>

<script setup lang="ts" >
</script>
<style lang="scss" scoped>
.red {
	color: #ff0000;
	&::selection {
		color: gold;
		background-color: #0011ff;
	}
	&::first-line {
		background-color: #2bff00;
	}
	&::first-letter {
		background-color: #9196d1;
	}
}
</style>