<template>
  <div id="resume" class="mt-4
      dark:text-white dark:bg-gray-800
      sepia:sepia sepia:text-white grid
      grid-cols-1
      text-sm
      md:grid-cols-2
      lg:grid-cols-2
      js-show-on-scroll
    ">
    <div class="pt-16">
      <h2>
        Education Qualification ......
      </h2>
      <h2 class="font-bold py-4">My Education</h2>
      <div class="py-2" v-for="item in messages" :key="item.id">
        <div class="bg-white dark:text-white dark:bg-gray-800
        sepia:sepia sepia:text-white border-r-2 border-[#020D45]">
          <h1 class="font-bold text-[#020D45]">{{ item.from }}</h1>
          <h1 class="text-[#0C0528]">
            {{ item.title }}
          </h1>
          <p class="text-[#0C0528]">
            {{ item.message }}
          </p>
        </div>
      </div>
      <nuxt-link to="/contacts">
        <Button title="Download Resume" :handleClick="viewHandler" />
      </nuxt-link>
    </div>
    <div class="flex justify-end pt-8 items-center">
      <img src="/profile.png" alt="Profile" />
    </div>
  </div>
</template>

<script>
import { messages } from "@/assets/data.js";
import Button from "./atom/Button.vue";
export default {
  data() {
    return {
      messages
    };
  },
  components: {
    Button
  },
  methods: {
    viewHandler() {
      this.$axios
        .get("/pdf", { responseType: "blob" })
        .then((response) => {
          const file = new Blob([response.data], { type: "application/pdf" });
          const fileURL = URL.createObjectURL(file);
          window.open(fileURL);
          swal("Success", "Resume Opened In New Tab", "success");
        })
        .catch((error) => {
          swal("Error", "Something Went wrong, Try Again.", "error");
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
