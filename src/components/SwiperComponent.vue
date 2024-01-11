<template>
  <swiper-container
    :slides-per-view="1"
    :space-between="spaceBetween"
    :centered-slides="true"
    :breakpoints="{
      768: {
        slidesPerView: 1,
      },
    }"
    @progress="onProgress"
    @slidechange="onSlideChange"
  >
    <swiper-slide v-for="content in contents" :key="content.title">
      <img :src="content.src" class="responsive" />
    </swiper-slide>
  </swiper-container>
</template>

<script setup>
import { register } from "swiper/element/bundle";
import { contents } from "../assets/contents";

register();

const spaceBetween = 10;
const onProgress = (e) => {
  const [swiper, progress] = e.detail;
  console.log(progress);
};

const onSlideChange = (e) => {
  console.log("slide changed");
};
</script>

<style scoped>
.responsive {
  width: 100%;
  max-width: 2000px;
  height: auto;
}
</style>
../assets/index
