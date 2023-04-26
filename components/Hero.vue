<template>
  <div id="me"
    class="dark:text-white md:flex justify-around px-8 md:px-16">
    <div class="flex flex-col justify-center pt-16">
      <h1 class="text-lg text-[#42A5F5] font-bold uppercase">I AM HONORINE IGIRANEZA.</h1>
      <h1 class="text-lg font-bold py-2">A FULL STACK DEVELOPER</h1>
      <p class="text-sm pb-4 w-100 md:w-1/2 lg:w-1/2">
        As a versatile and dynamic full stack developer, I am eager and prepared to lend my skills and expertise to any
        project, at any hour.
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
