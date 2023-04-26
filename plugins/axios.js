export default defineNuxtPlugin((nuxt) => {
    const { $axios } = nuxt

    if ($axios) {
        // Set the baseURL for Axios
        $axios.defaults.baseURL = 'http://localhost:5000'

        // Optionally set other defaults for Axios
        $axios.defaults.headers.common['Authorization'] = 'Bearer ' + getToken()
    }

    function getToken() {
        // Your code to retrieve the token from storage or elsewhere
    }
})
