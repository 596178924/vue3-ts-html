<template>
	<div class="home">
		<p :class="$style.red">
			p text
			<span>
				123sdsd
			</span>
		</p>
		<p class="red">
			p text
			<span>
				123sdsd
			</span>
		</p>
		<p :class="classes.red">
			p text
			<span>
				123sdsd
			</span>
		</p>
		<p class="p">
			p text
			<span>
				123sdsd
			</span>
		</p>
	</div>
</template>

<script lang="ts" setup>
const theme = {
  color: 'chocolate'
}
</script>
<style lang="scss" scoped>
.red {
	color: red;
	span {
		color: yellow;
	}
}
.p {
  color: v-bind('theme.color');
}
</style>
<style lang="scss" module="classes">
.red {
  color: red;
  span {
  	color: pink;
  }
}
</style>
<style lang="scss" module>
.red {
	color: red;
	span {
		color: blue;
	}
}
</style>
