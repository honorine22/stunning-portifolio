<template>
  <div class="
      dark:text-white sepia:text-white dark:bg-[#F0F5F7] 
      sepia:sepia sepia:text-white
      my-8
      text-sm
      shadow
      bg-[#F1F4F7]
      text-[#0C0528]
      grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2
      px-6 md:px-20 lg:px-20
      js-show-on-scroll
    ">
    <div class="pt-8">
      <div class="flex justify-between">
        <div>
          <h2 class="font-bold">Have Any project in Mind?</h2>
          <img src="@/assets/arrow.png" alt="Profile" />
        </div>
        <div>
          <nuxt-link to="/contacts">
            <Button title="HIRE ME" />
          </nuxt-link>
        </div>
      </div>
      <p class="pt-4">
        Looking for a skilled developer to take your website to the next level? Look no further! I offer expert website
        design and development services, as well as a range of software solutions. Check out my portfolio and let's
        discuss your project today!
      </p>
    </div>
    <div class="flex items-center justify-end">
      <img src="/hire.png" alt="Hire Me">
    </div>
  </div>
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
