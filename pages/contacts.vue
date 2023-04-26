<template>
  <div class="dark:text-white text-sm text-[#020D45] dark:bg-gray-800 sepia:sepia sepia:text-white
    ">
    <Navbar />
    <div class="px-6 md:px-20 lg:px-20">
      <div class="block md:flex lg:flex">
        <div class="pt-32">
          <p class="w-full md:w-1/2 lg:w-1/2 text-sm">With great enthusiasm and a wealth of my expertise, I am at your
            service and ready
            to assist
            you with any project. So don't hesitate to reach out to me at any time
            – I'm here for you and always happy to lend a hand!</p>
        </div>
        <div class="">
          <img src="/service.png" alt="">
        </div>
      </div>
      <form @submit.prevent="addNewProject()" class="w-full">
        <div class="mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-3 max-w-4xl">
          <div class="col-span-2 md:col-span-1">
            <label for="title">Project Title</label>
            <input class="
            w-full
            h-10
            px-3
            placeholder-gray-500
            dark:bg-gray-700 dark:text-white
            shadow-sm
            border
            rounded-xl
            focus:outline-none
          " type="text" v-model="title.value.value" name="title" />
            <span v-show="errors.title" class="text-red-500 dark:text-red-800 sepia:text-white">
              {{ errors.title }}
            </span>
          </div>
          <div class="col-span-2 md:col-span-1">
            <label for="service">Service</label>
            <select class="w-full h-10 px-3 shadow bg-white
                    dark:bg-gray-700 dark:text-white
                    border rounded-xl focus:outline-none
                  " name="service" v-model="service.value.value">
              <option v-for="option in options" :key="option.name" :value="option.name">
                {{ option.name }}
              </option>
            </select>
            <span v-show="errors.service" class="text-red-500 dark:text-red-800 sepia:text-white">
              {{ errors.service }}
            </span>
          </div>
          <div class="col-span-2 md:col-span-1">
            <label for="email">Email</label>
            <input class="
            w-full
            h-10
            px-3
            dark:bg-gray-700 dark:text-white
            shadow-sm
            border
            rounded-xl
            focus:outline-none
          " type="text" v-model="email.value.value" name="email" />
            <span v-show="errors.email" class="text-red-500 dark:text-red-800 sepia:text-white">
              {{ errors.email }}
            </span>
          </div>
          <div class="col-span-2">
            <label for="description">Description</label>
            <textarea cols="10" rows="3" v-model="description.value.value" name="description" class="
                  dark:bg-gray-700 dark:text-white
                  shadow-sm
                  border
                  rounded-xl
                  focus:outline-none
                  p-4
                  md:text-xl
                  w-full
                "></textarea>
            <span v-show="errors.description" class="text-red-500 dark:text-red-800 sepia:text-white">
              {{ errors.description }}
            </span>
          </div>
        </div>
        <div class="py-4 flex justify-center">
          <button type="submit" @click.prevent="addNewProject" :disabled="isDisabled"
            class="hover:bg-blue-700 focus:outline-none bg-blue-500 px-14 py-2 text-white text-center rounded-md">
            Submit
          </button>
        </div>
      </form>
    </div>
    <Map />
    <Footer />
  </div>
</template>

<script>
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';
import Button from '~/components/atom/Button.vue';
import InputComponent from '~/components/atom/InputComponent.vue';
import Swal from 'sweetalert2'
import Navbar from '~/layouts/Navbar.vue';
import axios from 'axios';
import Map from '~/components/Map.vue';
import Footer from '~/components/Footer.vue';
import { defineComponent, computed } from 'vue';
import { BASE_URL } from '~/BaseUrl';
export default defineComponent({
  name: 'GetInTouch',
  components: {
    InputComponent,
    Button,
    Footer,
    Navbar
  },
  setup() {
    const options = [
      { name: "Web Development", value: 1 },
      { name: "Embedded Engineer", value: 2 },
      { name: "Design&Develop Software", value: 3 },
    ]
    const schema = yup.object({
      title: yup.string().required(),
      service: yup.string().required(),
      description: yup.string().required(),
      email: yup.string().email().required(),
    })
    const { errors, resetForm, handleSubmit, isSubmitting, submitCount } = useForm({
      validationSchema: schema,
      initialValues: {
        title: '',
        service: '',
        email: '',
        description: ''
      }
    })
    const title = useField('title');
    const service = useField('service');
    const email = useField('email');
    const description = useField('description');

    // 8. Define a computed property to check if the form is disabled
    const isDisabled = computed(() => {
      return errors.value.title || errors.value.service || errors.value.email || errors.value.description
    })
    // 9. Define the addNewProject method
    const addNewProject = handleSubmit((values) => {
      axios.post(`${BASE_URL}/projects`, {
        title: values.title,
        service: values.service,
        email: values.email,
        description: values.description
      }).then((response) => {
        console.log(response);
        Swal.fire(
          'Great job!',
          'Project Submitted Successfully!',
          'success'
        )
        resetForm();
        // return true;
      }).catch((error) => {
        console.log(error.error);
        Swal.fire(
          'Please Try Again',
          "Something went wrong",
          'error'
        )
        resetForm();
      })
    });

    return {
      resetForm,
      title, service, email, description,
      isSubmitting,
      submitCount,
      options,
      addNewProject,
      errors,
      isDisabled
    };
  },
});
</script>