import { App } from "vue";
import VCopy from "./v-copy";
import VFocus from "./v-focus"
export default (app: App<Element>) => {
    app.directive('copy', VCopy);
    app.directive('focus', VFocus);
}