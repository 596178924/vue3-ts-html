
export const directive = (app) => {
    app.directive('mydsa', (el) => {
        // 这将被作为 `mounted` 和 `updated` 调用
        console.log(el)
    })
    app.directive('permission', (el) => {
        // 这将被作为 `mounted` 和 `updated` 调用
        console.log(el)
    })
}