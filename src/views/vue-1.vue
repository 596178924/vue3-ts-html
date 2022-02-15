<template>
	<div class="home">
		<son id="1" name="李雷"></son>
		<input type="number" v-model="data.id" />
		<input type="number" :value="data.id" @input="(e: any) => (data.id = e.target.value)" />
		<span>相应式数据：{{ data.id }}</span>
		<br />
		<span v-once>只绑定一次数据：{{ data.id }}</span>
		<br />
		<button @click="changeDataId">click me to change data.id</button>
		<div v-html="htmlTxt"></div>
		<div>
			<p v-if="vIf">vIf = true</p>
			<p v-else>vIf =false</p>
			<p v-show="vIf">vIf = true</p>
			<p v-show="!vIf">vIf =false</p>
			<button @click="vIf = !vIf">click me to change vIf</button>
		</div>
		<div>
			<p>点击列表切换样式</p>
			<ul>
				<li
					v-for="item in 3"
					:key="item"
					:class="[{ active: classActive == item }]"
					@click="classActive = item"
				>item = {{ item }}</li>
			</ul>
		</div>
		<div>
			<p>更改触发事件</p>
			<p>{{ eventName }}</p>
			<button @click="changeEventName">changeEventName</button>
			<button @[eventName]="sayHi">sayHi</button>
			<br />
			<p>{{ handleEventName }}</p>
			<p>{{ computedEventName }}</p>
			<button @click="changeComputedEventName">changeComputedEventName</button>
			<button @[computedEventName]="sayHi">sayHi</button>
			<!-- <button @dblclick="sayHi">sayHi</button> -->
		</div>
		<div>
			<p>修饰符</p>
			<form action="*" method="post">
				<input type="submit" @click.prevent="sayHi" value="click me to submit" />
			</form>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, computed, Ref } from 'vue';
import son from '@/components/son.vue';
let data = reactive({
	id: 123
});
function changeDataId(): void {
	// console.log('clickme', ++clickNum);
	data.id += 1;
	console.log('clickme', data.id);
}

const htmlTxt: string = `<span>html span</span>`;

let vIf: Ref<boolean> = ref(true);
let classActive: Ref<number> = ref(1);

let eventName = ref('click');
function changeEventName(): void {
	//将点击事件改为双击事件
	eventName.value = eventName.value == 'click' ? 'dblclick' : 'click';
}
let handleEventName: Ref<boolean> = ref(true);
let computedEventName: Ref<string> = computed(() => handleEventName.value ? 'click' : 'dblclick');
function changeComputedEventName(): void {
	handleEventName.value = !handleEventName.value
}
function sayHi(): void {
	console.log('hi master');
}
</script>
<style lang="scss" scoped>
.active {
	color: red;
}
</style>
