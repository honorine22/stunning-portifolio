<template>
  <transition id="services" name="card" mode="out-in">
    <div class="px-5 md:px-10 lg:px-20 dark:text-white py-8 sepia:text-white dark:bg-gray-800 sepia:sepia">
      <div class="text-sm text-[#0C0528]" v-if="cardsSection.id == 2">
        <h4 class="text-center py-2">{{ cardsSection.title }}</h4>
        <p class="text-center pb-8 pt-4">{{ cardsSection.snippet }}</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-20 lg:gap-20">
        <Card v-if="cardsSection.id == 1" v-for="card in cardsSection.cards" :key="card.id" :card="card" />
        <ProjectCard v-else v-for="card in cardsSection.cards" :key="card.title" :card="card" />
      </div>
    </div>
  </transition>
</template>

<script>
import Card from '~/components/Card.vue';
import ProjectCard from './ProjectCard.vue';
export default {
  transition: {
    name: "card",
    appear: true,
  },
  components: {
    Card,
    ProjectCard
  },
  props: ["cardsSection"]
};
</script>
