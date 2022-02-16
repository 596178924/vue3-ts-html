
export const directive = (app: any) => {
    app.directive('permission', (el: any) => {
        // 这将被作为 `mounted` 和 `updated` 调用
        console.log(el)
    })
}