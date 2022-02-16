import { defineStore } from "pinia"

export const UseStoreNaiveTheme = defineStore('naiveTheme', {
    state: () => ({
        locale: 'zhCN',
        theme: ''
    }),
    getters: {
        locale: ({ locale }): string => locale,
        theme: ({ theme }): string => theme,
    },
    actions: {
        setLocale(locale: string) {
            this.locale = locale
        },
        setTheme(theme: string) {
            this.theme = theme
        },
    }
})