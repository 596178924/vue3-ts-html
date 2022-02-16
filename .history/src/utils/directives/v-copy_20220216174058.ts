export const copyText = function (text: string) {
    // console.log(text)
    let textareaEl = document.createElement('textarea');
    textareaEl.setAttribute('readonly', 'readonly'); // 防止手机上弹出软键盘
    textareaEl.value = text;
    document.body.appendChild(textareaEl);
    textareaEl.select();
    let success = document.execCommand('copy');
    document.body.removeChild(textareaEl);
    return success;
}

export default (el: HTMLElement, binding: any) => {
    const arg = binding.arg;
    el.style.cursor = arg == 'pointer' ? 'pointer' : 'inline'
    const value = binding.value;
    // const elText:string = binding.value[text];
    const text: string = value.text  || el.innerText|| value;
    el.onclick = function () {
        let copyResponse = copyText(text);
        if (value.response) {
            value.response(copyResponse)
        }
    }
}

