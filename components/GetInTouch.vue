<template>
  <div id="contact" class="
      dark:text-white dark:bg-gray-800
      sepia:sepia sepia:text-white
      grid grid-cols-1
      md:grid-cols-2
      mx-auto md:px-0 lg:px-64
    ">
    <img class="md:mt-16 mx-2 md:mx-0 lg:mx-4" src="/contact_image.png" alt="Contact Image" />
    <!-- <ValidationObserver ref="form" class="mt-8"> -->
    <form @submit.prevent="addNewComment()" class="w-full my-4">
      <h2 class="
            text-black
            sepia:text-white
            dark:text-white
            text-center
            py-8
            text-xl
          ">
        Get In Touch with me
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-2 gap-y-4 px-4">
        <div class="col-span-2 md:col-span-1">
          <!-- <ValidationProvider v-slot="{ errors, touched }" name="firstName" rules="required"> -->
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
                " type="text" v-model="commentDetails.firstName" placeholder="First Name" />
          <!-- <span v-show="errors.length > 0 && touched" class="text-red-500 dark:text-red-800 sepia:text-white">
                {{ errors[0] }}
              </span>
            </ValidationProvider> -->
        </div>

        <div class="col-span-2 md:col-span-1">
          <!-- <ValidationProvider v-slot="{ errors, touched }" name="lastName" rules="required"> -->
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
                " type="text" v-model="commentDetails.lastName" placeholder="Last Name" />
          <!-- <span v-show="errors.length > 0 && touched" class="text-red-500 dark:text-red-800 sepia:text-white">
                {{ errors[0] }}
              </span>
            </ValidationProvider> -->
        </div>

        <div class="col-span-2 md:col-span-1">
          <!-- <ValidationProvider v-slot="{ errors, touched }" name="email" rules="required|email"> -->
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
                " type="email" v-model="commentDetails.email" placeholder="Email" />
          <!-- <span v-show="errors.length > 0 && touched" class="text-red-500 dark:text-red-800 sepia:text-white">
                {{ errors[0] }}
              </span>
            </ValidationProvider> -->
        </div>

        <div class="col-span-2 md:col-span-1">
          <!-- <ValidationProvider v-slot="{ errors, touched }" name="phoneNo" rules="required|phone"> -->
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
                " type="text" v-model="commentDetails.phoneNo" placeholder="Phone Number" />
          <!-- <span v-show="errors.length > 0 && touched" class="text-red-500 dark:text-red-800 sepia:text-white">
                {{ errors[0] }}
              </span>
            </ValidationProvider> -->
        </div>

        <div class="col-span-2">
          <!-- <ValidationProvider v-slot="{ errors, touched }" name="message" rules="required"> -->
          <textarea cols="10" rows="6" v-model="commentDetails.message" class="
                  placeholder-gray-500
                  dark:bg-gray-700 dark:text-white
                  shadow
                  border
                  rounded-xl
                  focus:outline-none
                  p-4
                  md:text-xl
                  w-full
                " placeholder="Message"></textarea>
          <!-- <span v-show="errors.length > 0 && touched" class="text-red-500 dark:text-red-800 sepia:text-white">
                {{ errors[0] }}
              </span>
            </ValidationProvider> -->
        </div>

        <div class="col-span-2 text-left">
          <button :disabled="isDisabled" :class="isDisabled
              ? 'bg-gray-500 dark:bg-gray-800 dark:border-white border dark:hover:bg-blue-900 hover:bg-blue-900'
              : 'bg-blue-400'
            " class="
                py-3
                px-6
                shadow
                rounded-full
                text-white
                font-bold
                w-full
                sm:w-32
              ">
            Submit
          </button>
        </div>
      </div>
    </form>
    <!-- </ValidationObserver> -->
  </div>
</template>

<script>
// import { useToast, useModal } from 'tailvue'
// const $toast = useToast()
// const $modal = useModal()
export default {
  data() {
    return {
      commentDetails: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNo: "",
        message: "",
      },
      commentLoading: false,
      addLoading: false,
    };
  },
  computed: {
    isDisabled: function () {
      if (
        this.commentDetails.firstName === "" ||
        this.commentDetails.lastName === "" ||
        this.commentDetails.email === "" ||
        this.commentDetails.phoneNo === "" ||
        this.commentDetails.message === ""
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    // getAllComments() { },
    // showToast() {
    //   this.$toast.success('Toast message')
    // },

    addNewComment() {
      this.$refs.form.validate().then((success) => {
        if (success) {
          this.addLoading = true;
          this.$axios
            .post("/comments", {
              firstName: this.commentDetails.firstName,
              lastName: this.commentDetails.lastName,
              email: this.commentDetails.email,
              phoneNo: this.commentDetails.phoneNo,
              message: this.commentDetails.message,
            })
            .then((response) => {
              console.log(response);
              this.addLoading = false;
              this.isValid = true;
              this.commentDetails = {
                firstName: "",
                lastName: "",
                email: "",
                phoneNo: "",
                message: "",
              };
              // this.getAllComments(); // we will crea
              // $toast.show({
              //   type: 'success',
              //   title: 'Success',
              //   message: 'This is a successful toast',
              // })
              this.$nextTick(() => {
                this.$refs.form.reset();
              });
              return true;
            })
            .catch((err) => {
              this.addLoading = false;
              // $toast.show({
              //   type: 'danger',
              //   title: 'Error',
              //   message: 'Please specify an e-mail address',
              // })
              this.$nextTick(() => {
                this.$refs.form.reset();
              });
              console.log(err);
            });
        } else {
          console.log("Form Not Success");
        }
      });
    },
  },
};
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
