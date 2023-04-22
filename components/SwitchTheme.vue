<template>
  <div>
    <ul>
      <li class="grid justify-items-end" v-for="color of colors" :key="color">
        <component :is="`icon-${color}`" ~click="$data.$colorMode.preference = color" :class="getClasses(color)"
          class="h-8 w-8" />
      </li>
    </ul>
  </div>
</template>

<script>
import IconDark from "~/assets/icons/dark.svg?inline";
import IconSepia from "~/assets/icons/sepia.svg?inline";
import IconSystem from "~/assets/icons/system.svg?inline";
import IconLight from "~/assets/icons/light.svg?inline";

export default {
  components: {
    IconDark,
    IconSepia,
    IconSystem,
    IconLight,
  },
  data() {
    return {
      colors: ["dark", "sepia", "system", "light"],
      $colorMode: this.$colorMode // define $colorMode as a reactive property
    };
  },
  methods: {
    getClasses(color) {
      if (!this.$data.$colorMode || !this.$data.$colorMode.unknown) {
        return {};
      }
      return {
        preferred: color === this.$data.$colorMode.preference,
        selected: color === this.$data.$colorMode.value,
      };
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul li {
  display: inline-block;
  padding: 5px;
}

p {
  margin: 0;
  padding-top: 5px;
  padding-bottom: 20px;
}

.feather {
  position: relative;
  top: 0px;
  cursor: pointer;
  padding: 7px;
  background-color: var(--bg-secondary);
  border: 2px solid var(--border-color);
  margin: 0;
  border-radius: 5px;
  transition: all 0.1s ease;
}

.feather:hover {
  top: -3px;
}

.feather.preferred {
  border-color: var(--color-primary);
  top: -3px;
}

.feather.selected {
  color: var(--color-primary);
}
</style>