<template>
  <div id="me" class="bg-blue-100 h-100 dark:text-white dark:bg-gray-900 sepia:sepia md:flex justify-around">
    <div class="flex flex-col justify-center pt-16">
      <h1 class="text-xl">I AM HONORINE IGIRANEZA.</h1>
      <h1 class="text-xl font-black">A FULL STACK DEVELOPER</h1>
      <p class="text-md py-4">
        I am a full stack developer, open source enthusiast
        and willing to work anytime.
      </p>

      <nuxt-link to="/contacts">
        <Button title="Hire Me" />
      </nuxt-link>
    </div>
    <div class="md:pt-20 pt-4 flex justify-center">
      <img class="image mt-2 w-100" src="~/assets/pro.png" alt="Honorine" />
    </div>
  </div>
</template>
<script>
import Button from './atom/Button.vue';
export default {
  components: {
    Button
  }
};
</script>

<style>
#me {
  scroll-behavior: smooth;
}
</style>
