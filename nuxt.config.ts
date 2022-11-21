// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    app: {
        head: {
            title: "wetake-app",
            htmlAttrs: {
                lang: "en",
            },
            meta: [
                {charset: "utf-8"},
                {name: "viewport", content: "width=device-width, initial-scale=1"},
                {hid: "description", name: "description", content: ""},
                {name: "format-detection", content: "telephone=no"},
            ],
            script: [
                {src: "https://kit.fontawesome.com/7461742aae.js"},
                {src: "https://cdn.tailwindcss.com"},
            ],
            link: [{rel: "icon", type: "image/x-icon", href: "/favicon.ico"}],
        },
    },
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
    css: ['@fortawesome/fontawesome-svg-core/styles.css'],
    colorMode:{
        classSuffix:''
    },
    tailwindcss:{
        cssPath: '~/assets/css/tailwind.css',
        configPath:'tailwind.config.js',
        exposeConfig: false,
        injectPosition: 0,
        viewer: true,
    },
})
