<template>
  <footer class="
      footer--bg
      text-[#020D45] text-sm
      dark:text-white dark:bg-gray-800
      sepia:sepia sepia:text-white
      border-b-2">
    <div class="
            mt-10
            text-justify
            flex flex-col
            md:flex-row
            justify-around
            px-6
            pt-10
          ">
      <div v-for="item in footerInfo" :key="item.id" class="flex flex-col">
        <span class="uppercase font-bold text-md mb-2">{{
          item.title
        }}</span>
        <span v-for="link in item.fullInfo" :key="link.url" :class="item.title != 'Honorine.' ? 'my-2' : 'my-1'">
          <a v-if="item.title != 'Honorine.'" href="#" class="
                  sepia:text-white
                  dark:text-white
                  relative
                  truncate
                  hover-trigger
                  cursor-pointer
                  transition
                  duration-700
                  ease-in-out
                  transform
                  hover:scale-110 hover:text-blue-900
                ">
            {{ link.name }}</a>
          <button v-if="item.title == 'Honorine.'" class="
                  sepia:text-white
                  dark:text-white
                  inline-flex
                  items-center
                  space-x-2
                  rounded
                ">
            <svg class="w-6 h-6 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>{{ link.name }}</title>
              <path :d="link.icon" />
            </svg>
            <a target="_blank" :href="link.url">{{ link.name }}</a>
          </button>
        </span>
      </div>
    </div>
    <p class="text-sm text-center py-2 mt-4 border-t-2 border-gray-200">
      Copyright © {{ new Date().getFullYear() }} Honorine Igiraneza. All
      rights reserved.
    </p>
  </footer>
</template>

<script>
import { footerInfo } from "@/assets/data.js";
export default {
  data() {
    return {
      footerInfo: footerInfo,
    };
  },
};
</script>

<style>
.hover-trigger .hover-target {
  display: none;
}

.hover-trigger:hover .hover-target {
  display: block;
}
</style>
