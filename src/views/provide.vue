<template>
    <div>
        <input type="text" v-model="count">
        <inject1></inject1>
    </div>
</template>

<script setup lang="ts">
import { ref,provide ,inject} from 'vue';
import inject1 from "@/components/inject-1.vue";
const count = ref(0);
provide('count',count);
</script>