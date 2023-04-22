import { NuxtConfig } from '@nuxt/types'

interface MyNuxtConfig extends NuxtConfig {
    css: Array,
    postcss: Object,
    modules: Array
}

export default MyNuxtConfig
