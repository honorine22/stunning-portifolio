// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//     css: [
//         '~/assets/css/main.css'
//     ],
//     postcss: {
//         plugins: {
//             tailwindcss: {},
//             autoprefixer: {},
//         },
//     },
//     build: {
//         transpile: ["vee-validate/dist/rules"]
//     }
// });
import { NuxtConfig } from '@nuxt/types'

const nuxtConfig: NuxtConfig = {
    css: [
        '~/assets/css/main.css'
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    build: {
        transpile: ["vee-validate/dist/rules"]
    },
    axios: {
        baseURL: 'http://localhost:5000'
    }
}

export default nuxtConfig
