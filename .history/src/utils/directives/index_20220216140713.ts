import { App } from "vue";
import VCopy from "./v-copy";
export default (app: App<Element>) => {
    app.directive('v-copy', VCopy);
}