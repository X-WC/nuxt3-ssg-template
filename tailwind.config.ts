export default {
    // 必须正确指向 .vue 文件 不然会导致样式不生效
    content: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
            },
            fontFamily: {
                sans: ['PingFang SC', 'sans-serif'],
                serif: ['Source Han Sans SC', 'serif'],
            }
        },
    },
    plugins: [],
}
