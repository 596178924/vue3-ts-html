<template>
	<div class="home">
		<p
			class="red"
		>useStoreCounter.doubleCounter''useStoreCounter.doubleCounter''useStoreCounter.doubleCounter''useStoreCounter.doubleCounter</p>
		<p class="red">
			useStoreCounter.doubleCounter''useStoreCounter.doubleCounter''useStoreCounter.doubleCounter'
			<span>useStoreCounter.doubleCounter</span>
		</p>
		<ul class="list">
			<li>
				useStoreCounter.doubleCounter
				useStoreCounter.doubleCounter
				useStoreCounter.doubleCounter
				useStoreCounter.doubleCounter
			</li>
		</ul>
		<p >3.141592654</p>
		<p class="a-font">3.141592654</p>
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
.list {
	li {
		&::marker {
			content: "△";
			margin-right: 1rem;
			color: red;
			font-size: 1.5em;
		}
	}
}
.a-font {
	font-variant-numeric:  slashed-zero;
}
</style>