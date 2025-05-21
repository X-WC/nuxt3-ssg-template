// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // development config
    $development: {},
    // production config
    $production: {},
    // modules config
    modules: [
        '@nuxtjs/tailwindcss',
    ],
    css: ['@/assets/css/tailwind.css'],
    ssr: false,
    app: {
        baseURL: '/nuxt3-ssg-template/',
    },
    compatibilityDate: '2025-05-15',
    devtools: {enabled: true}
})
