<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import { register } from "swiper/element/bundle";

export default defineComponent({
  name: "App",
  setup() {
    register();
  },
});
</script>

<style>
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  html,
  body,
  :root {
    width: 80%;
    margin: auto;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
</style>
