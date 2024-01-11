<template>
  <q-layout view="lhh lpr fFf">
    <q-header class="bg-primary text-white q-pt-md q-pb-md">
      <q-toolbar>
        <q-btn dense flat icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          <span> Doa Anak </span>
        </q-toolbar-title>
        <q-space />
        <q-btn
          flat
          round
          dense
          icon="home"
          class="q-mr-xs"
          @click="changeDestination('/')"
        />
        <q-btn flat round dense icon="more_vert" />
        <q-avatar>
          <img
            :src="data.jk === 'L' ? man : woman"
            width="10"
            height="10"
            v-if="data.nama"
          />
          <img src="../assets/placeholder.jpeg" width="10" height="10" v-else />
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item
                clickable
                v-vlose-popup
                @click="changeDestination('/profil')"
              >
                <q-item-section>Profil</q-item-section></q-item
              >
              <q-item
                clickable
                v-vlose-popup
                @click="changeDestination('/tentang')"
              >
                <q-item-section>Tentang</q-item-section></q-item
              >
            </q-list>
          </q-menu>
        </q-avatar>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      behavior="mobile"
      class="q-py-md block"
    >
      <drawer
        :nama="data.nama"
        :jk="data.jk"
        :umur="data.umur"
        :logout="logout"
        :daftar-isi="daftarIsi"
      />
    </q-drawer>

    <q-page-container>
      <router-view />
      <back-to-top-button />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { daftarIsi } from "src/assets/daftar-isi";
import { reactive, ref } from "vue";
import manPict from "../assets/say_hi_men.png";
import womanPict from "../assets/say_hi_woman.png";
import BackToTopButton from "../components/BackToTopComponent.vue";
import drawer from "../components/DrawerComponent.vue";
import { useRouter } from "vue-router";

const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

const changeDestination = (destination) => {
  router.push(destination);
};

// const appState = useAppState();

const woman = womanPict;
const man = manPict;
const router = useRouter();

const data = reactive({
  nama: localStorage.getItem("nama"),
  umur: localStorage.getItem("umur"),
  jk: localStorage.getItem("jk"),
  searchQuery: "",
});

const logout = () => {
  localStorage.clear();
  window.location.reload();
};
</script>
