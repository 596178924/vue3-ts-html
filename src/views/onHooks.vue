<template>
	<div>
		on hook
	</div>
</template>

<script setup>
import {
	onBeforeMount,
	onBeforeUnmount,
	onBeforeUpdate,
	onErrorCaptured,
	onMounted,
	onRenderTracked,
	onRenderTriggered,
	onUnmounted,
	onUpdated,
} from "vue"
onBeforeMount(()=>{
	console.log('onBeforeMount!')
})
onMounted(()=>{
	console.log('onMounted!')
})
onBeforeUnmount(()=>{
	console.log('onBeforeUnmount!')
})
onBeforeUpdate(()=>{
	console.log('onBeforeUpdate!')
})
onErrorCaptured(()=>{
	console.log('onErrorCaptured!')
})
onRenderTracked(()=>{
	console.log('onRenderTracked!')
})
onRenderTriggered(()=>{
	console.log('onRenderTriggered!')
})
onUnmounted(()=>{
	console.log('onUnmounted!')
})
onUpdated(()=>{
	console.log('onUpdated!')
})

</script>

<style>
	p{border-radius: ;}
</style>
