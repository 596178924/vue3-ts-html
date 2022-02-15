<template>
    <div>{{ count }}</div>
</template>
<script setup lang="ts">
import { inject } from 'vue'
const count: Number | undefined = inject('count');
</script>