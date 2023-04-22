// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//     css: [
//         '~/assets/css/main.css',
//         // toast: {
//         //     position: 'top-center'
//         // },
//     ],
//     postcss: {
//         plugins: {
//             tailwindcss: {},
//             autoprefixer: {},
//         },
//     },
//     modules: [
//         '@nuxtjs/toast',
//     ],

//     plugins: [
//         {
//             src: "~/plugins/vee-validate.js"
//         }
//     ],
//     build: {
//         transpile: ["vee-validate/dist/rules"]
//     }
// })

import MyNuxtConfig from './nuxt-config'

const nuxtConfig: MyNuxtConfig = {
    // Other configuration options
    // toast: {
    //     position: 'top-right',
    //     duration: 3000,
    //     register: [ // Register custom toasts
    //     {
    //       name: 'my-error',
    //       message: 'Oops...Something went wrong',
    //       options: {
    //         type: 'error'
    //       }
    //     }
    //   ]
    //     // Add other properties as needed
    // },
    css: [
        '~/assets/css/main.css'
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: [
        '@tailvue/nuxt'
    ]
}

export default nuxtConfig
