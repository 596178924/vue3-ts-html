<template>
	<div class="home">
		<p class="red">
			'useStoreCounter.doubleCounter'
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
}
</style>