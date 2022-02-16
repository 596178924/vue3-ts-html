<template>
    <div class="">
        <!-- <p v-copy="'自定义指令 copy text'" @click="say">自定义指令</p> -->
        <p v-copy="{text:'自定义指令 copy text'}" @click="say">自定义指令</p>
        <!-- <input v-focus type="text" placeholder="自动获取焦点"> -->
    </div>
</template>

<script setup lang="ts" >
function say() {
    console.log('组件内的点击事件');
    
}
</script>
<style lang="scss" scoped>
</style>