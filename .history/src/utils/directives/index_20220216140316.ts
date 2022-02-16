import { App } from "vue";
import copy from "./v-copy";
export default (app: App<Element>) => {
    app.directive('copy', copy);
}