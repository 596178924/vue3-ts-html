export const copyText = function (text: string, fn?: Function) {
    // console.log(text)
    console.log('copyText');
    let textareaEl = document.createElement('textarea');
    textareaEl.setAttribute('readonly', 'readonly'); // 防止手机上弹出软键盘
    textareaEl.style.position = 'absolute';
    textareaEl.style.left = '-100vw';
    textareaEl.value = text;
    document.body.appendChild(textareaEl);
    textareaEl.select();
    let success = document.execCommand('copy');
    document.body.removeChild(textareaEl);
    if (fn) fn(success);
    return success;
}
const writeText = function (text: string, fn?: Function) {
    console.log('navigator writeText',text);
    navigator.clipboard.writeText(text).then(() => fn && fn(true)).catch(e=> fn && fn(false));
}

export default {
    beforeMount(el: any, binding: any){
        const arg = binding.arg;
        el.style.cursor = arg == 'pointer' ? 'pointer' : 'inline'
        const value = binding.value || el.innerText || '';
        el._V_targetContent = value.text || value;
        let text: string = el._V_targetContent;
        el.onclick = function () {
            navigator.clipboard ? writeText(text, value.response) : copyText(text, value.response);
        }
    },
    updated(el: any, binding: any) {
        const value = binding.value || el.innerText || '';
        el._V_targetContent = value.text || value;
        let text: string = el._V_targetContent;
        el.onclick = function () {
            navigator.clipboard ? writeText(text, value.response) : copyText(text, value.response);
        }
    },
    unmounted(el: any) {
        el.click = null;
        delete el._V_targetContent;
    },
}

