<template>
  <div class="introimage--bg">
    <!-- <div class="dark:text-white dark:bg-gray-800 sepia:text-white sepia:sepia">
    <ClientOnly>
      <GetInTouch />
      <Hire />
      <Footer /> -->
    <Navbar />
    <Hero />
  </div>
  <div class="px-5 md:px-10 lg:px-20">
    <CardDisplay v-for="cardInfo in cardsInfo" :key="cardInfo.id" :cardsSection="cardInfo" />

    <Resume />
  </div>
  <Hire />
  <GetInTouch />
  <!-- <NuxtWelcome /> -->
  <!-- </ClientOnly> -->
  <!-- </div> -->
</template>
<script>
import '~/assets/css/main.css'
import Navbar from '~/layouts/Navbar.vue';
import Hero from '~/components/Hero.vue';
import CardDisplay from '~/components/CardDisplay.vue';
import GetInTouch from '~/components/GetInTouch.vue';
import Resume from '~/components/Resume.vue';
import Hire from '~/components/Hire.vue';
import ProjectCarousel from '~/components/ProjectCarousel.vue';
import { serviceCards } from "~/assets/data.js";
export default {
  components: {
    Navbar,
    Hero,
    GetInTouch,
    CardDisplay,
    Resume,
    ProjectCarousel
  },
  data() {
    return {
      cardsInfo: serviceCards,
      observer: null,
      observerOptions: {
        root: this.$refs.nuxtContent,
        threshold: 0,
      },
    };
  },
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeIn");
        } else {
          entry.target.classList.remove("animate-fadeIn");
        }
      });
    }, this.observerOptions);

    // Track all sections that have an `id` applied
    document.querySelectorAll(".js-show-on-scroll").forEach((section) => {
      this.observer.observe(section);
    });
  },
  beforeDestroy() {
    this.observer.disconnect();
  },
};
</script>
