<template>
    <ul>
        <li v-for="(item, index) in navList" :key="index">
            <router-link :to="item.path">{{ item.name }}</router-link>
        </li>
    </ul>
</template>
<script setup lang="ts">
import { routes } from "@/router/index";
const navList = routes.map((item) => ({
    path: item.path,
    name: item.name
}))
</script>