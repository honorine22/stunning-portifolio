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
    link: [
        {
            rel: "stylesheet",
            href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap'
        }
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
    },
    publicRuntimeConfig: {
        axios: {
            browserBaseURL: process.env.BROWSER_BASE_URL
        }
    },
    privateRuntimeConfig: {
        axios: {
            baseURL: process.env.BASE_URL
        }
    },
}

export default nuxtConfig
