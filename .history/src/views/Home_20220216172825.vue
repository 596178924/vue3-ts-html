<template>
    <div class="">
        <!-- <button v-copy="'自定义指令 copy text'" @click="say">自定义指令</button> -->
        <button v-copy="{text:'自定义指令 copy text',response:say}" @click="say()">自定义指令</button>
        <!-- <button  v-copy @click="say">自定义指令</button> -->
        <!-- <input v-focus type="text" placeholder="自动获取焦点"> -->
        <p v-copy:pointer>copy text</p>
    </div>
</template>

<script setup lang="ts" >

function say(res ?: boolean) {
    console.log('组件内的点击事件',res);
}
</script>
<style lang="scss" scoped>
.p {
    cursor: pointer;
}
</style>