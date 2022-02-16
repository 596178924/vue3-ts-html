export default (el:HTMLElement,binding: any) =>{
    console.log('copy',el,binding)
    console.log('copy',binding.value)
    el.focus()
}

