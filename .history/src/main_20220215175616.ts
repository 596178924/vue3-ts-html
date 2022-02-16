import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Particles from 'particles.vue3'
import { createPinia } from 'pinia';
const app = createApp(App);
app.use(createPinia());
app.use(Particles);
app.use(router);
app.mount('#app');
