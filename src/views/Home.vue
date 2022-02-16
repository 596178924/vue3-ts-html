<template>
    <div class="">
        <!-- <button v-copy="'自定义指令 copy text'" @click="say">自定义指令</button> -->
        <input type="text" v-model="text">
        <button v-copy="{text:text,response:say}" @click="say()">{{text}}</button>
        <!-- <button  v-copy @click="say">自定义指令</button> -->
        <!-- <input v-focus type="text" placeholder="自动获取焦点"> -->
        <!-- <p v-copy:pointer>copy text</p> -->
        <!-- <p v-copy>copy text</p> -->
    </div>
</template>

<script setup lang="ts" >
import { ref } from 'vue';


const text = ref('自定义指令 copy text');
function say(res ?: boolean) {
    console.log('组件内的点击事件',res);
}
</script>
<style lang="scss" scoped>
.p {
    cursor: pointer;
}
</style>