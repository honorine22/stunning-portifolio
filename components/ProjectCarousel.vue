<template>
  <div id="port" class="
      dark:text-white dark:bg-gray-800
      sepia:sepia sepia:text-white
      md:flex
      flex-row
      mx-auto md:px-0 lg:px-64
    ">
    <div class="
        lg:ml-24
        px-2
        w-100 md:w-96 lg:w-100
        dark:bg-gray-800
        sepia:sepia
        bg-white
        flex-none
        lg:text-md
        mt-8 mx-4 md:mx-0
      ">
      <div class="mt-4">
        <p class="mb-8">Software Engineer ......</p>
        Look into the projects I did. I used software development
        and design skills I have and also The certificates I earned.
      </div>
      <div class="mt-8">
        Most of the projects shown on the left side were developed
        using Angular and React web frameworks. And tools used
      </div>
      <div class="mt-8">
        For designing was Figma. So Please Welcome, Feel free to
        share your project. I am eager to help.
      </div>
    </div>

    <div class="p-8 my-2 lg:ml-48 lg:mr-32 mb-8 md:overflow-auto shadow-xl">
      <VueSlickCarousel class="relative img-wrapper" :arrows="true" :dots="true" v-bind="slickOptions">
        <div v-for="background in backgrounds" class="
            relative
            hover-trigger
            cursor-pointer
            transition
            duration-700
            ease-in-out
          " :key="background.id">
          <img class="flex justify-center" :src="background.backgroundImage" />
          <button class="
              absolute
              h-10
              hover-target
              px-4
              bg-blue-500
              hover:bg-blue-700
              text-white
              font-bold
              rounded-xl
              hover:cursor-pointer
              top-0
              transition
              duration-700
              ease-in
              transform
            ">
            <a :href="background.url" target="_blank" class="hover:cursor-pointer">
              View It
            </a>
          </button>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  data() {
    return {
      slickOptions: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,
      },
      backgrounds: [
        {
          id: 1,
          url: "",
          backgroundImage: "/case2.png",
        },
        {
          id: 2,
          url: "https://www.coursera.org/account/accomplishments/verify/EUV9AZR28YH8?utm_source=link&amp;utm_medium=certificate&amp;utm_content=cert_image&amp;utm_campaign=sharing_cta&amp;utm_product=course",
          backgroundImage: "/react.png",
        },
        {
          id: 3,
          url: "https://www.freecodecamp.org/certification/fcc7ba0f954-fe36-4af6-8ba2-9db0ff01e15c/back-end-development-and-apis",
          backgroundImage: "/freecodecampbackend.png",
        },
        {
          id: 4,
          url: "https://coursera.org/share/2176576eba6e1052b3d721f14da566c8",
          backgroundImage: "/design.png",
        },
        {
          id: 5,
          url: "https://coursera.org/share/d1b174365665040e72186460d8d3a8a6",
          backgroundImage: "/science.png",
        },
        {
          id: 6,
          url: "https://www.freecodecamp.org/certification/fcc7ba0f954-fe36-4af6-8ba2-9db0ff01e15c/front-end-development-libraries",
          backgroundImage: "/freecodecampreact.png",
        },
        {
          id: 7,
          url: "https://media-exp1.licdn.com/dms/image/sync/C4D27AQHoN8-QN96txA/articleshare-shrink_800/0/1643195591435?e=1643284800&v=beta&t=CMU-z8pkr7GexYMMr-DGXAP4Mf85X9Yr5RAqxW_Ubik",
          backgroundImage: "/expert.jpg",
        },
      ],
    };
  },
};
</script>
<style>
.slick-prev:before,
.slick-next:before {
  color: rgb(45, 128, 223) !important;
}

.img-wrapper img {
  width: 425px;
  height: 350px;
}

.hover-trigger .hover-target {
  display: none;
}

.hover-trigger:hover .hover-target {
  display: block;
}
</style>
