import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import directive from "./utils/directives";
const app = createApp(App);
app.use(createPinia());
app.use(router);
directive(app)
app.mount('#app');