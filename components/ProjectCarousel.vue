<template>
  <div id="port" class="my-16 js-show-on-scroll bg-[#F1F4F7] px-5 md:px-10 lg:px-20">
    <swiper class="py-8" :modules="modules" :slides-per-view="3" :space-between="50" navigation
      :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange"
      effect="fade">
      <swiper-slide class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3" v-for="background in backgrounds"
        :key="background.id">
        <div class="relative flex items-center justify-center">
          <img :src="background.backgroundImage" />
        </div>
        <a :href="background.url" target="_blank" class="hover:cursor-pointer">
          <Button class="absolute top-0" title="View It" />
        </a>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
// Import Swiper styles
import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Button from './atom/Button.vue';
export default {
  components: {
    Swiper,
    SwiperSlide,
    Button
  },
  setup() {
    const backgrounds = [
      {
        id: 1,
        url: "https://adscerts.com/scholar/895074DA0E52D35",
        backgroundImage: "/googledeveloper.png"
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
    ]
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y, EffectFade],
      backgrounds
    };
  },
};
</script>