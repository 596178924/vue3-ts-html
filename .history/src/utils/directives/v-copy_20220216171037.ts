export const copyText = function (text: string) {
    console.log(text)
    let textareaEl = document.createElement('textarea');
    textareaEl.setAttribute('readonly', 'readonly'); // 防止手机上弹出软键盘
    textareaEl.value = text;
    document.body.appendChild(textareaEl);
    textareaEl.select();
    let success = document.execCommand('copy');
    document.body.removeChild(textareaEl);
    // return success;
}

export default (el: HTMLElement, binding: any) => {
    // console.log('copy', el, binding)
    console.log('copy', binding.value)
    // const elText:string = binding.value[text];
    let text: string = binding.value;
    el.onclick = function () {
        copyText(text);
    }
    // el.addEventListener('click', copyText(binding.value))
}

