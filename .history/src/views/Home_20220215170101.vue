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
		<div class="container">
			<img src="@/assets/DOAX-VenusVacation.jpg" />
			<div class="caption">
				<h3>Morgana</h3>
				<p>played by Katie McGrath</p>
			</div>
		</div>
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
	::slotted(span) {
		font-weight: bold;
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
.container {
	position:relative;
}
.caption {
  padding: 0.5em 1em;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
//   backdrop-filter: blur(4px);
  background-color: rgba(255, 255, 255, 0.5);
}
</style>