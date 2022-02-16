<template>
    <div id="nav">
        <!-- <router-link to="/">Home</router-link>|
        <router-link to="/vue-1">vue-1</router-link>|
        <router-link to="/onHooks">onHooks</router-link>|
        <router-link to="/vue-computed-watch">vue-computed-watch</router-link>|
        <router-link to="/style-module">style-module</router-link>|
        <router-link to="/provide">provide</router-link>|
        <router-link to="/starNight">starNight</router-link>|
        <router-link to="/CanvasLine">CanvasLine</router-link>| -->
        <router-link v-for="(item, index) in navList" :key="index" :to="item.path">{{item.name}}</router-link>
    </div>
</template>
<script setup lang="ts">
import { routes } from "@/router/index";
const navList = routes.map((item)=>({
    path:item.path,
    name:item.name
}))
</script>