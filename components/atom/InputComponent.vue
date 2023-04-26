<template>
    <div class="col-span-2 md:col-span-1">
        <input class="
            w-full
            h-10
            px-3
            placeholder-gray-500
            dark:bg-gray-700 dark:text-white
            shadow
            border
            rounded-xl
            focus:outline-none
          " :type="type" v-model="inputValue" :placeholder="placeholder" />
        <span v-show="errors && !valid" class="text-red-500 dark:text-red-800 sepia:text-white">
            {{ errors }}
        </span>
    </div>
</template>
  
<script>
export default {
    props: {
        value: {
            type: String,
            required: true,
        },
        valid: {
            type: Boolean,
            required: false,
        },
        errors: {
            type: String,
            default: null,
        },
        placeholder: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: null,
        },
    },
    data() {
        return {
            inputValue: this.value,
        };
    },
    watch: {
        inputValue(newValue) {
            console.log("Value is being updated");
            this.$emit("input", newValue);
        },
        value(newValue) {
            this.inputValue = newValue;
        },
    },
};
</script>  