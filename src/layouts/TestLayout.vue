<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <router-view />
      <!-- <back-to-top-button /> -->
    </q-page-container>

    <q-footer elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title
          style="
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
          "
        >
          <q-btn
            flat
            round
            color="white"
            icon="home"
            @click="router.push('/')"
          />
          <q-btn
            flat
            round
            color="white"
            icon="list"
            @click="router.push('/daftar-isi')"
          />
          <q-btn
            flat
            round
            color="white"
            icon="info"
            @click="router.push('/tentang')"
          />
          <q-btn
            flat
            round
            color="white"
            icon="person"
            @click="router.push('/profil')"
          />
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { useRouter } from "vue-router";
import BackToTopButton from "../components/BackToTopComponent.vue";

const router = useRouter();
</script>
