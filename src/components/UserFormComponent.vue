<template>
  <div class="q-mt-xl q-mx-md">
    <div class="profilku flex column">
      <div class="text-center">
        <q-avatar
          size="100px"
          font-size="52px"
          color="teal"
          text-color="white"
          icon="person"
          class="q"
          v-if="data.jenisKelamin === null"
        />
        <img
          :src="data.jenisKelamin === 'L' ? man : woman"
          width="100"
          v-else
        />
        <span class="text-h6 text-bold md:text-h5 block q-mt-md"
          >Assalamualaikum, {{ data.nama }}!
        </span>
        <span class="block q-mt-sm">Selamat Datang di Aplikasi Doa Anak</span>
      </div>
    </div>

    <div class="input-group q-mt-md">
      <q-input filled v-model="data.nama" label="Nama" :dense="dense" />
    </div>

    <div class="q-gutter-sm q-mt-md">
      <span class="block text-body">Kamu perempuan atau laki-laki?</span>
      <q-radio v-model="data.jenisKelamin" val="L" label="Laki-Laki" />
      <q-radio v-model="data.jenisKelamin" val="P" label="Perempuan" />
    </div>

    <div class="btn-group q-mt-md text-center q-mb-md">
      <q-btn
        color="primary"
        label="simpan"
        class="q-px-xl q-py-sm"
        size="md"
        @click="saveProfile()"
        :disabled="!data.jenisKelamin || !data.nama"
        rounded
        style="width: 80%"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import womanPict from "../assets/say_hi_woman.png";
import manPict from "../assets/say_hi_men.png";
import { useRouter } from "vue-router";

let data = reactive({
  nama: localStorage.getItem("nama"),
  jenisKelamin: localStorage.getItem("jk"),
  hide: localStorage.getItem("isHide"),
});

const woman = womanPict;
const man = manPict;
const router = useRouter();

const saveProfile = () => {
  localStorage.setItem("isHide", true);
  localStorage.setItem("nama", data.nama);
  localStorage.setItem("jk", data.jenisKelamin);
};
</script>

<style scoped>
.profilku {
  background: url("https://img.freepik.com/free-vector/colorful-frame-background-creative-design-kids-vector_53876-156361.jpg?w=740&t=st=1700440041~exp=1700440641~hmac=6a1806401b2e9c9ebbf63119a4054931e2e9e0683abb42662adc3fc7196bef8f");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 12px;
  border-radius: 12px;
}
</style>
