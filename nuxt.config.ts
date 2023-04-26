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
    server: {
        port: 5000, // set the port for the development server
    },
    axios: {
        baseURL: process.env.NODE_ENV === 'production'
        ? process.env.BACKEND_URL_PROD || "https://igiraneza-port-backend.onrender.com"
        : process.env.BACKEND_URL_DEV || "http://localhost:5000"
    },
    publicRuntimeConfig: {
        axios: {
            browserBaseURL: process.env.BACKEND_URL_PROD
        }
    },
    privateRuntimeConfig: {
        axios: {
            baseURL: process.env.BACKEND_URL_DEV
        }
    },
}

export default nuxtConfig
