<template>
  <div id="contact" class="
      dark:text-white text-[#020D45] dark:bg-gray-800
      sepia:sepia sepia:text-white
      grid grid-cols-1
      text-sm
      js-show-on-scroll
      md:grid-cols-2
      lg:grid-cols-2
      px-5 md:px-10 lg:px-20
    ">
    <div class="flex justify-start items-center">
      <img src="/contact_image.png" class="" alt="Contact Image" />
    </div>
    <form @submit.prevent="addNewComment()" class="w-full">
      <h2 class="
            text-black
            sepia:text-white
            dark:text-white
            text-center
            py-8
            text-md
          ">
        Get In Touch with me
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-2">
        <div class="col-span-2 md:col-span-1">
          <label for="firstName">First Name</label>
          <input class="
            w-full
            h-10
            dark:bg-gray-700 dark:text-white
            shadow-sm
            border
            rounded-xl
            px-4
            focus:outline-none
          " type="text" v-model="firstName.value.value" name="firstName" />
          <span v-show="errors.firstName" class="text-red-500 dark:text-red-800 sepia:text-white">
            {{ errors.firstName }}
          </span>
        </div>
        <div class="col-span-2 md:col-span-1">
          <label for="lastName">Last Name</label>
          <input class="
            w-full
            h-10
            px-4
            dark:bg-gray-700 dark:text-white
            shadow-sm
            border
            rounded-xl
            focus:outline-none
          " type="text" v-model="lastName.value.value" name="lastName" />
          <span v-show="errors.lastName" class="text-red-500 dark:text-red-800 sepia:text-white">
            {{ errors.lastName }}
          </span>
        </div>
        <div class="col-span-2 md:col-span-1">
          <label for="email">Email</label>
          <input class="
            w-full
            h-10
            px-4
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
        <div class="col-span-2 md:col-span-1">
          <label for="phone">Phone Number</label>
          <input class="
            w-full
            h-10
            px-4
            dark:bg-gray-700 dark:text-white
            shadow-sm
            border
            rounded-xl
            focus:outline-none
          " type="tel" v-model="phone.value.value" name="phone" />
          <span v-show="errors.phone" class="text-red-500 dark:text-red-800 sepia:text-white">
            {{ errors.phone }}
          </span>
        </div>
        <div class="col-span-2">
          <label for="message">Message</label>
          <textarea cols="10" rows="3" v-model="message.value.value" name="message" class="
                  dark:bg-gray-700 dark:text-white
                  shadow-sm
                  border
                  rounded-xl
                  focus:outline-none
                  p-4
                  w-full
                "></textarea>
          <span v-show="errors" class="text-red-500 dark:text-red-800 sepia:text-white">
            {{ errors.message }}
          </span>
        </div>
      </div>
      <div class="pt-2">
        <!-- <button :disabled="isDisabled" type="submit">Submit</button> -->
        <Button :handleClick="addNewComment" title="Submit" :disabled="isDisabled" />
      </div>
    </form>
  </div>
</template>

<script>
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';
import Button from './atom/Button.vue';
import InputComponent from './atom/InputComponent.vue';
import axios from 'axios';
import { BASE_URL } from '../BaseUrl';
import Swal from 'sweetalert2'
import { defineComponent, computed } from 'vue';
export default defineComponent({
  name: 'GetInTouch',
  components: {
    InputComponent,
    Button
  },
  setup() {
    const schema = yup.object({
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      email: yup.string().email().required(),
      phone: yup.string().required().min(12),
      message: yup.string().required()
    })
    const { errors, resetForm, handleSubmit, isSubmitting, submitCount } = useForm({
      validationSchema: schema,
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      }
    })
    const firstName = useField('firstName');
    const lastName = useField('lastName');
    const email = useField('email');
    const phone = useField('phone');
    const message = useField('message');

    // 8. Define a computed property to check if the form is disabled
    const isDisabled = computed(() => {
      return errors.value.firstName || errors.value.lastName || errors.value.email, errors.value.phone || errors.value.message
    })

    // 9. Define the addNewComment method
    const addNewComment = handleSubmit((values) => {
      axios.post(`${BASE_URL}/comments`, {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phoneNo: values.phone,
        message: values.message
      }).then((response) => {
        console.log(response);
        Swal.fire(
          'Great job!',
          'Comment Submitted Successfully!',
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
      firstName, lastName, email, phone, message,
      isSubmitting,
      submitCount,
      addNewComment,
      errors,
      isDisabled
    };
  },
});
</script>

<style>
input::placeholder {
  text-align: center;
}

#contact {
  scroll-behavior: smooth;
}
</style>



<!-- <script>
import { Field, Form } from 'vee-validate';
export default {
  components: {
    Field,
    Form,
  },
  methods: {
    isRequired(value) {
      return value ? true : 'This field is required';
    },
  },
};
</script>

<template>
  <Form v-slot="{ errors }">
    <Field name="email" :rules="isRequired" />
    <span>{{ errors.email }}</span>
  </Form>
</template> -->
