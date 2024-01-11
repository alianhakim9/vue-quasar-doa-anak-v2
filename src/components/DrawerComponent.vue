<template>
  <!-- <div v-if="props.nama" class="text-center">
    <img
      :src="props.jk === 'L' ? manPict : womanPict"
      width="100"
      height="100"
    />
    <span class="text-h5 font-bold block q-mt-md">{{ props.nama }}</span>
    <span class="text-subtitle1 block">{{
      props.jk === "L" ? "Laki-Laki" : "Perempuan"
    }}</span>
    <q-btn
      class="w-full"
      color="accent"
      label="Keluar"
      icon="logout"
      rounded
      @click="props.logout()"
    />
  </div> -->
  <div class="q-mx-xl">
    <q-img src="../assets/logo_1.png" class="rounded-borders" />
    <!-- <h5>Assalamualaikum, Selamat datang di aplikasi doa buku anak :)</h5> -->
  </div>

  <div class="q-mx-lg q-mt-lg btn-container">
    <q-btn color="secondary" label="Profil" :ripple="{ color: 'yellow' }" />
  </div>

  <div v-if="props.daftarIsi">
    <p class="text-subtitle2 q-mx-lg q-my-md">Daftar Isi</p>
    <ol>
      <li v-for="item of props.daftarIsi" :key="item">
        {{ item }}
      </li>
    </ol>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import womanPict from "../assets/say_hi_woman.png";
import manPict from "../assets/say_hi_men.png";

const props = defineProps({
  nama: {
    type: String,
    required: true,
  },
  jk: {
    type: String,
    required: true,
  },
  logout: {
    type: Function,
    required: true,
  },
  daftarIsi: {
    type: Array,
    required: false,
    default: null,
  },
});
</script>

<style scoped>
.btn-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
