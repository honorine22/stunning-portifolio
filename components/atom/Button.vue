<template>
    <button :type="type"
        class="bg-blue-500 text-white text-center rounded-md px-8 py-3 hover:bg-blue-700 focus:outline-none" :class="{
                'capitalize': capitalize,
                'uppercase': uppercase,
                'text-xs': true,
                'flex': true,
                'items-center': true,
                'gap-5': true,
            }" @click.prevent="executeHandleClick">
        {{ title }}
        {{ icon }}
    </button>
</template>
  
<script>
import { string } from 'yup';

export default defineComponent({
    name: 'Button',
    props: {
        title: {
            type: String,
            required: false,
        },
        icon: {
            required: false,
        },
        type: {
            type: string,
            required: false,
        },
        capitalize: Boolean,
        uppercase: Boolean,
        handleClick: Function,
    },
    setup(props) {
        const executeHandleClick = () => {
            if (typeof props.handleClick === 'function') {
                props.handleClick();
            }
        }
        return {
            executeHandleClick
        }
    },
});
</script>
  