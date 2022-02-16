import { createApp } from "vue";
const app = createApp(App);
app.directive('permission',el=>{
    console.log(el)
})