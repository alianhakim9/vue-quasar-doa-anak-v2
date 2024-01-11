<!-- Modal.vue -->

<template>
  <div class="modal" v-if="showModal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <div>{{ modalContent }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showModal: Boolean,
    modalContent: String,
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
/* Add your modal styles here */
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}
</style>
