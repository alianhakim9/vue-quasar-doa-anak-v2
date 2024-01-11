<template>
  <q-btn
    v-if="showScrollButton"
    @click="scrollToTop"
    icon="arrow_upward"
    fixed
    bottom="10px"
    right="10px"
    color="secondary"
    class="back-to-top-button"
  />
</template>

<script>
export default {
  data() {
    return {
      showScrollButton: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    handleScroll() {
      // Check if the scroll position is greater than 0
      // If true, show the button; otherwise, hide it
      this.showScrollButton = window.scrollY > 0;
    },
  },
};
</script>

<style scoped>
.back-to-top-button {
  position: fixed;
  bottom: 80px;
  right: 50px;
  border-radius: 50px;
  width: 50px;
  height: 50px;
}
</style>
