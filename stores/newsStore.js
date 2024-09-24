import { defineStore } from 'pinia'

export const useNewsStore = defineStore('newsStore', {
    state: () => ({
        title: '',
        description: ''
    }),
    actions: {
        async fetch() {
            const infos = await $fetch('http://static.feed.rbc.ru/rbc/logical/footer/news.rss')

            this.name = infos.title
            this.description = infos.description
        }
    }
})