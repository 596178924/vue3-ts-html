export default (el:HTMLElement,binding: any) =>{
    console.log('focus',el,binding)
    console.dir('focus',binding)
    el.focus()
}

