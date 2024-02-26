<template>
  <div
    class="modal text-sm text-[#0C0528] h-screen w-full fixed left-0 flex justify-center items-center inset-0 z-20 bg-black bg-opacity-50 duration-300">
    <div
      class="bg-white p-4 dark:text-white sepia:text-white dark:bg-gray-800 sepia:sepia shadow-lg mt-2 md:rounded-md z-20"
      @click.stop>
      <header class="flex items-center justify-end md:p-2 p-0">
        <button class="focus:outline-none md:p-2 p-0" @click="$emit('close-modal')">
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
            <path
              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
            </path>
          </svg>
        </button>
      </header>
      <main class="p-2 text-center">
        <img class="mx-auto" :src="`/${card.image || ''}`" alt="Project Modal" />
        <div class="px-6 md:py-4 py-2">
          <div class="font-bold md:mb-2 mb-0">{{ card.title }}</div>
        </div>
        <h3 class="text-center">
          {{ card.tech_used_title }}
        </h3>
        <div class="flex justify-center">
          <div class="grid grid-cols-3 py-4 gap-x-5">
            <span v-for="chip in card.tech_names" :key="chip.id"
              class="inline-block my-2 bg-gray-200 rounded-full px-4 py-1">{{
                chip.name }}</span>
          </div>
        </div>
        <div class="flex justify-wcenter gap-16">
          <!-- <Button title="View Project" /> -->
          <Button title="Learn More" @click="openProject" />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Button from './atom/Button.vue';
export default {
  props: ["card"],
  components: {
    Button
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    openProject() {
      window.open(`${this.card.glink}`, '_blank');
    }
  }
};
</script>
<style scoped></style>
