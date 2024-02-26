<template>
    <article class="
        max-w-md md:max-w-xs lg:max-w-xs
                  js-show-on-scroll
                  h-full
                  bg-white
                dark:text-white sepia:text-white dark:bg-gray-800 sepia:sepia
                ">
        <div class="text-sm">
            <div class="flex justify-center">
                <img class="w-[375px] md:w-[320px] lg:w-[320px]" :src="`/${card.image || ''}`" alt="Projects" />
            </div>
            <h2 class="font-bold py-4">{{ card.title }}</h2>
            <p class="text-[#0C0528] sepia:text-gray-300 dark:text-gray-300">
                {{ card.description }}
            </p>
        </div>

        <div :class="`${card.btnMargin}`">
            <Button title="Learn More" :handleClick="toggleModal" />
        </div>
    </article>
    <ProjectModal class="z-16 md:z-4" :card="card" v-show="showModal" @close-modal="showModal = false" />
</template>
  
<script>
import ProjectModal from './ProjectModal.vue';
import Button from './atom/Button.vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
    name: 'ProjectCard',
    props: ["card"],
    components: {
        ProjectModal,
        Button
    },
    setup() {
        const showModal = ref(false);

        const toggleModal = () => {
            showModal.value = true;

        };

        return {
            showModal,
            toggleModal,
        };
    },
});
</script>
  
<style></style>
  