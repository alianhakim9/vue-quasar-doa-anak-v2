<template>
  <div class="header-container">
    <div class="bg-image"></div>
    <div class="header">
      <div
        class="menu"
        style="
          background-color: rgba(255, 255, 255, 0.8);
          padding-left: 8px;
          padding-right: 8px;
          border-radius: 8px;
        "
      >
        <h6>Assalamualaikum, {{ name }}</h6>
        <p>Selamat datang di aplikasi doa anak</p>
      </div>
      <div class="avatar">
        <img
          :src="jk === 'L' ? manPict : womanPict"
          width="50"
          height="50"
          v-if="name"
          @click="router.push('/profil')"
        />

        <img
          src="../assets/placeholder.jpeg"
          width="50"
          height="50"
          alt="avatar"
          class="avatar"
          v-else
          @click="router.push('/profil')"
        />
      </div>
    </div>
  </div>
  <div class="search-container">
    <input
      id="cari-doa"
      type="text"
      placeholder="contoh: tidur"
      v-model="searchQuery"
      @input="handleInput"
    />
  </div>
  <div class="doa-container">
    <div class="grid-container">
      <div
        class="inner"
        v-for="(content, index) of filteredDoa"
        :key="content.src"
        :style="{
          backgroundColor: `${content.backgroundColor}`,
        }"
        @click="
          () => {
            alert = true;
            currentDoa = content;
          }
        "
      >
        <img :src="content.src" class="responsive" style="padding: 12px" />
        <div class="counter">
          <span>{{ index + 1 }}</span>
        </div>
      </div>
    </div>
  </div>

  <Transition>
    <q-dialog v-model="alert">
      <q-card
        :style="{
          backgroundColor: `${currentDoa.backgroundColor}`,
          borderRadius: `12px`,
        }"
      >
        <q-card-section>
          <!-- <div class="text-h6">Test</div> -->
        </q-card-section>

        <q-card-section class="q-pt-none">
          <img
            :src="currentDoa.src"
            alt="Doa"
            class="responsive"
            style="border-radius: 12px"
          />
          <AudioPlayer :audioSrc="currentDoa.voice" />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Tutup Doa" color="white" v-close-popup />
        </q-card-actions>
      </q-card> </q-dialog
  ></Transition>
  <back-to-top-button />
</template>

<script setup>
import { contents } from "src/assets/contents";
import { ref } from "vue";
import AudioPlayer from "src/components/AudioPlayerComponent.vue";
import { useRouter } from "vue-router";
import manPict from "../assets/say_hi_men.png";
import womanPict from "../assets/say_hi_woman.png";
import BackToTopButton from "../components/BackToTopComponent.vue";

const alert = ref(false);
const currentDoa = ref({});
const router = useRouter();
const name = localStorage.getItem("nama");
const jk = localStorage.getItem("jk");

const searchQuery = ref("");

const filteredDoa = ref(contents);

const handleInput = (event) => {
  searchQuery.value = event.target.value;
  if (searchQuery.value) {
    filteredDoa.value = contents.filter((content) => {
      if (content.title === searchQuery.value) {
        return content;
      } else {
        filteredDoa.value = contents;
      }
    });
  } else {
    filteredDoa.value = contents;
  }
};
</script>

<style scoped>
.search-container {
  position: sticky;
  top: 0;
  background-color: white;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 99999;
  background: url("https://img.freepik.com/free-vector/hand-drawn-abstract-doodle-pattern_23-2149293422.jpg?w=740&t=st=1700439264~exp=1700439864~hmac=e2687dd032d4913939ca5a2751bd3a41998410d7c6b2a0ea67afd092b21a550a");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  margin: 12px;
}

.header .avatar {
  border-radius: 50px;
}

.header .avatar:hover {
  cursor: pointer;
}

.menu {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding-bottom: 0;
  margin-bottom: 0;
}

.menu h6 {
  padding: 0px;
  margin: 0px;
}

.doa-container {
  padding: 16px;
}

.search-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.search-container input {
  padding: 12px;
  width: 100%;
  margin: 16px;
  background-color: rgb(235, 235, 235);
  border-radius: 10px;
  border: none;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.inner {
  width: auto;
  min-height: 200px;
  height: auto;
  border-radius: 20px;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.inner:hover {
  cursor: pointer;
}

.counter {
  height: 50px;
  width: 50px;
  background-color: #bbb;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.counter span {
  font-size: 15pt;
  font-weight: bold;
  color: black;
}
</style>
