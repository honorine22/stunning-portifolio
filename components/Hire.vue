<template>
  <!-- <div class="
      flex justify-center"> -->
  <div class="
      dark:text-white sepia:text-white dark:bg-[#F0F5F7] 
      sepia:sepia sepia:text-white
      bg-[#F0F5F7]
      mt-4
      text-sm
      shadow
      text-[#0C0528]
      px-32 md:px-48 lg:px-52
      grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2
    ">
    <!-- flex justify-center  -->
    <div class="py-4">
      <h2 class="font-bold">Have Any project in Mind?</h2>
      <img class="" src="@/assets/arrow.png" alt="Profile" />

      <p class="pt-4">
        I’m here to help you. If you need any kind of a website to develop and
        design, then you can tell me. Check my portifolio.
      </p>
    </div>
    <div class="flex justify-center items-center">
      <nuxt-link to="/contacts">
        <Button title="HIRE ME" />
      </nuxt-link>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import Button from './atom/Button.vue';
export default {
  name: "Hire",
  components: {
    Button
  }
};
</script>

<style></style>
