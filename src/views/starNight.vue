<template>
    <div class="star-night">
        <div class="stars">
            <div
                class="star"
                v-for="(item, index) in starsCount"
                :key="index"
                :ref="el => { if (el) starRefDom[item] = el }"
            ></div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted, Ref } from 'vue'
const starsCount: Ref<number> | undefined = ref(800);
const distance: Ref<number> | undefined = ref(800);
const starRefDom: Ref | undefined = ref([]);
onMounted(() => {
    let speed;
    let Distance;
    starRefDom.value.forEach((item: any) => {
        speed = 0.2 + (Math.random() * 1);
        Distance = distance.value + (Math.random() * 300);
        item.style.transformOrigin = `0 0 ${Distance}px`;
        item.style.transform = `
            translate3d(0,0,-${Distance}px) 
            rotateY(${(Math.random() * 360)}deg) 
            rotateX(${(Math.random() * -50)}deg) 
            scale(${speed},${speed})
        `;
    });
})
</script>
<style lang="scss" scoped>
@keyframes rotate {
    from {
        transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
    }
    to {
        transform: perspective(400px) rotateZ(20deg) rotateX(-40deg)
            rotateY(-360deg);
    }
}
.stars {
    transform: perspective(500px);
    transform-style: preserve-3d;
    position: absolute;
    perspective-origin: 50% 100%;
    left: 50%;
    bottom: 0;
    animation: rotate 180s infinite linear;
}
.star {
    width: 2px;
    height: 2px;
    // background: #f7f7b8;
    background: #f7bcb8;
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
}
.star-night {
    background: radial-gradient(
        200% 100% at bottom center,
        #f7f7b6,
        #e96f92,
        #1b2947
    );
    background: radial-gradient(
        260% 125% at top center,
        #1b2947 10%,
        #75517d 40%,
        #e96f92 65%,
        #f7f7b6
    );
    // background-attachment: fixed;
    position: relative;
    width: 800px;
    height: 480px;
    overflow: hidden;
}
</style>