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
        buildAssetsDir: 'nuxt_assets',
    },
    // 关闭_payload.json文件 为了在github上部署时不报错 github不支持_开头的文件
    experimental: {
        payloadExtraction: false
    },
    compatibilityDate: '2025-05-15',
    devtools: {enabled: true}
})
