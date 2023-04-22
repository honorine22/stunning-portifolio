<template>
  <div class="
              my-4
              inset-0
              cursor-pointer
            ">
    <article class="
                js-show-on-scroll
                py-4
                rounded-md
                sm:shadow-md
                shadow-lg
                h-full
                bg-white
              dark:text-white sepia:text-white dark:bg-gray-800 sepia:sepia
                transform
                md:hover:scale-x-100 md:hover:scale-y-110
                transition
                duration-500
              ">
      <div class="flex py-2 px-6">
        <img class="rounded" :src="`/${card.image || ''}`" alt="Services" />
        <h2 class="font-bold text-sm pt-6 pl-2">{{ card.title }}</h2>
      </div>
      <p class="text-[#0C0528] text-sm px-8 py-4 sepia:text-gray-300 dark:text-gray-300">
        {{ card.description }}
      </p>
    </article>
  </div>
</template>

<script>
import ProjectModal from './ProjectModal.vue';
export default {
  props: ["card"],
  components: {
    ProjectModal
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style></style>
