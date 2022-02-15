<template>
	<div class="son">
		<p>son</p>
		<p>{{ id }} {{ name }}</p>
		<input type="text" v-model="value" />
		<!-- <input type="text" v-model.lazy="value" /> -->
		<!-- <input type="text" :value="value" @input="e=>value = e.target.value" /> -->
		<p>{{ value }}</p>
		<p>emit</p>
	</div>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineExpose, defineEmits, withDefaults, computed } from 'vue';
interface propsType {
	id?: String;
	name?: String;
	modelValue?: String;
}
const props = withDefaults(defineProps<propsType>(), {
	id: '1',
	name: '李雷',
	modelValue: ''
});
console.log(props.modelValue);
const sonMsg: string = 'hi papa';
defineExpose({
	sonMsg
});
// console.log(props)

const emit = defineEmits(['say-hi', 'change-name', 'update:modelValue']);
emit('say-hi', 'hello papa');
emit('change-name', 'jojo');

const value: string = computed({
	get: () => props.modelValue,
	set: val => {
		console.log(val);
		emit('update:modelValue', val);
	}
});

/*		
	<son ref="sonDom"></son>
	<son v-model:modelValue="msg"></son> //const msg: string | unknown = ref('msg');
	import { defineEmits, ref,onMounted } from 'vue';
	import son from '@/components/son.vue';
	const sonDom = ref(null);
	onMounted(() => {
		console.log(sonDom.value.sonMsg); //获取到div.container这个元素
	});
*/
</script>
