<template>
    <div class="canvas-line">
        <canvas id="canvas" ref="canvas"></canvas>
        <div id="headline" ref="headline">海星吧牛逼</div>
    </div>
</template>
<script lang="js">
let canvas = document.querySelector('#canvas');
console.log(canvas);
let ctx = canvas.getContext('2d');
let particles = [];
let amount = 0;
let mouse = {
    x: 0,
    y: 0
}
let radius = 1;
let vw = window.innerWidth;
let vh = window.innerHeight
function Particle(x, y) {
    this.x = Math.random() * vw;
    this.y = Math.random() * vh;
    this.dest = {
        x: x,
        y: y
    }
    this.r = Math.random() * 2 * Math.PI;
    this.vx = (Math.random() - 0.5) * 25;
    this.vy = (Math.random() - 0.5) * 25;
    this._x = 0;
    this._y = 0;
    this.friction = Math.random() * 0.025 + 0.95;
    this.color = `rgba(0,0,0,0.3)`
}
Particle.prototype.render = function () {
    this._x = (this.dest.x - x) / 1000;
    this._y = (this.dest.y - y) / 1000;
    this.vx += this._x;
    this.vy += this._y;
    this.vx *= this.friction;
    this.vy *= this.friction;
    this.x += this.vx;
    this.y += this.vy;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
    ctx.fill();
    let a = this.x - mouse.x;
    let b = this.y - mouse.x;
    let distance = Math.sqrt(a * a, b * b);
    if (distance < (radius * 30)) {
        this._x = (this.x - mouse.x) / 100;
        this._y = (this.y - mouse.y) / 100;
        this.vx += this._x;
        this.vy += this._y;
    }
}

function onMouseMpve(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
}

function initScene() {
    ctx.clearRect(0, 0, vw, vh);
    ctx.font('bold 16vw');
    ctx.textAlign = 'center';
    ctx.fillText(headline.innerHtml, vw / 2, vh / 1.6);
    let data = ctx.getImageData(0, 0, vw, vh).data;
    ctx.clearRect(0, 0, vw, vh);
    ctx.globalCompositeOperation = 'screnn';
    for (let i = 0; i < vw; i += Math.round(ww / 200)) {
        for (let j = 0; j < vh; j += Math.round(vw / 200)) {
            if (data[((i + j * vw) * 4) + 3] > 200) {
                particles.push(new Particle(i, j))
            }
        }
    }
    amount = particles.length;
}
function go() {
    requestAnimationFrame(go);
    ctx.clearRect(0, 0, vw, vh);
    for (let i = 0; i < amount; i++) {
        particles[i].render();
    }
}

function colorRandom() {

}


window.addEventListener('resize', initScene)
window.addEventListener('mousemove', onMouseMpve)
initScene();
requestAnimationFrame(go)









</script>

<!--
<script setup lang="ts">
// import { onMounted, Ref, ref } from 'vue';

// const canvas: Ref = ref(null);
// const headline: Ref = ref(null);


// onMounted(() => {
//     const ctx: HTMLCanvasElement | null = canvas.value;
//     let particles = [];
//     let amount = 0;
//     let mouse = {
//         x: 0,
//         y: 0
//     }
//     let radius = 1;
//     let vw = window.innerWidth;
//     let vh = window.innerHeight
//     function Particle(x: number, y: number) {
//         x = Math.random() * vw;
//         y = Math.random() * vh;
//         let dest = {
//             x: x,
//             y: y
//         }
//         let r = Math.random() * 2 * Math.PI;
//         let vx = (Math.random() - 0.5) * 25;
//         let vy = (Math.random() - 0.5) * 25;
//         let _x = 0;
//         let _y = 0;
//         let friction = Math.random() * 0.025 + 0.95;
//         let color = `rgba(0,0,0,0.3)`
//         function render() {
//             _x = (dest.x - x) / 1000;
//             _y = (dest.y - y) / 1000;
//             vx += _x;
//             vy += _y;
//             vx *= friction;
//             vy *= friction;
//             x += vx;
//             y += vy;
//             ctx.fillStyle = color;
//             ctx.beginPath();

//         }
//     }

// })

</script>

-->
<style lang="scss" scoped>
.canvas-line {
    background-color: #333333;
    overflow: hidden;
}
</style>