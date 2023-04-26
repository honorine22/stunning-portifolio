<template>
    <nav class="
bg-white
fixed
w-full
shadow-sm
dark:text-white dark:bg-gray-800
sepia:sepia
">
        <div class="px-5 md:px-10 lg:px-20 py-2 mx-auto">
            <div class="
lg:flex lg:items-center
md:justify-between md:flex
lg:justify-between
">
                <div class="flex items-center justify-between">
                    <div class="text-xl flex flex-row font-semibold text-gray-700">
                        <img class="image h-11 w-75" src="~/assets/logo-honorine.png" alt="Logo" />
                        <NuxtLink class="
text-2xl
font-bold
pt-2
text-gray-800
dark:text-white
hover:text-gray-700
dark:hover:text-gray-300
" to="/">Honorine.</NuxtLink>
                    </div>

                    <!-- Mobile menu button -->
                    <div class="flex md:hidden lg:hidden">
                        <button @click="isOpen = !isOpen" type="button" class="
bg-white
rounded-md
p-2
text-gray-400
hover:text-gray-500 hover:bg-gray-100
focus:outline-none
">
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" aria-hidden="true">
                                <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                                </path>
                                <path v-if="isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div :class="isOpen ? 'block px-24 py-2' : 'hidden'"
                    class="md:flex md:items-center lg:flex sm:block lg:items-center">
                    <div class="lg:flex md:flex lg:mr-48">
                        <NuxtLink v-for="item in menu" :to="item.link" :key="item.title" class="
px-2
sm:flex sm:truncate
block
text-sm text-gray-700
capitalize
dark:text-gray-200
hover:text-blue-600
dark:hover:text-indigo-400
">
                            {{ item.text }}</NuxtLink>
                    </div>
                    <Button :handleClick="navigateToAboutPage" title="Hire Me" :class="isOpen ? 'ml-2' : ''" />
                </div>
                <!-- <div :class="isOpen ? 'block px-16' : 'hidden'"
class="px-2 sm:grid sm:grid-cols-1 sm:hover:text-clip sm:truncate block">
<SwitchTheme />
</div> -->
            </div>
        </div>
    </nav>
</template>

<script>
import Button from '~/components/atom/Button.vue';
export default {
    transition: {
        name: "home",
        mode: "out-in",
    },
    components: {
        // SwitchTheme
        Button
    },
    methods: {
        navigateToAboutPage() {
            this.$router.push('/contacts')
        }
    },
    data() {
        return {
            isOpen: false,
            menu: [
                {
                    icon: "mdi-home",
                    text: "Home",
                    link: "/",
                    title: "Home Page",
                    active: true,
                },
                {
                    icon: "mdi-information-outline",
                    text: "About Me",
                    link: "/#me",
                    title: "About me",
                    active: false,
                },
                {
                    icon: "mdi-home",
                    text: "Portifolio",
                    link: "/#port",
                    title: "My portifolio",
                    active: false,
                },
                {
                    icon: "mdi-home",
                    text: "Services",
                    link: "/#services",
                    title: "Services you get",
                    active: false,
                },
                {
                    icon: "mdi-home",
                    text: "Resume",
                    link: "/#resume",
                    title: "My resume",
                    active: false,
                },
                {
                    icon: "mdi-email",
                    text: "Contact Me",
                    link: "/#contact",
                    title: "Where you can find me",
                    active: false,
                },
            ],
        };
    },
};
</script>
<style>
nav {
    z-index: 1;
}
</style>
