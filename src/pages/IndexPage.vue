<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div v-if="isHide === 0" style="background-color: #1976d2">
    <div class="search-container q-mx-xl q-py-xl">
      <q-input
        rounded
        v-model="data.searchQuery"
        label="Cari doa..."
        class="search-input"
        color="white"
      />
      <q-btn
        flat
        round
        dense
        icon="close"
        class="q-mr-xs"
        @click="closeSearchBar"
      />
      <q-btn flat round dense icon=" send" @click="filterContents" />
    </div>
  </div>
  <div class="row">
    <div :class="`col-12 ${isHide ? 'col-12' : 'col-md-12'}`">
      <div
        class="text-center"
        style="background-color: #68c1d1"
        v-if="!data.hideSampul"
      >
        <q-img src="../assets/doa/p01.png" alt="cover" class="img-sampul" />
        <!-- <span class="text-h3 text-center q-my-xl block">&#8675;</span> -->
      </div>
      <div v-for="content of data.filteredContents" :key="content.title">
        <div
          v-if="content.title !== 'sampul'"
          class="text-center"
          :style="{
            backgroundColor: `${content.backgroundColor}`,
          }"
        >
          <q-img :src="content.src" alt="cover" class="img-doa" />
          <div class="row">
            <div class="col-12 q-my-md">
              <audio-player :audioSrc="content.voice" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div :class="`col-12 ${isHide ? 'hidden' : 'col-md-12'}`">
      <user-form />
    </div> -->
    <back-to-top-component />
  </div>
</template>

<script setup>
import { contents } from "src/assets/contents";
import audioPlayer from "src/components/AudioPlayerComponent.vue";
import BackToTopComponent from "src/components/BackToTopComponent.vue";
import { useAppState } from "src/stores/appState";
import { onBeforeMount, onBeforeUnmount, onMounted, reactive } from "vue";
import screenOrientation from "screen-orientation";

const isHide = localStorage.getItem("isHide");

const appState = useAppState();
// const { isShowSearchBar } = storeToRefs(appState);

const data = reactive({
  isPlaying: false,
  searchQuery: "",
  hideSampul: false,
  filteredContents: contents,
});

const filterContents = () => {
  data.hideSampul = true;
  if (data.hideSampul) {
    data.filteredContents = contents.filter(
      (content) => content.title === data.searchQuery
    );
  }
};

const closeSearchBar = () => {
  // appState.hideSearchBar();
  console.log(data.filteredContents);
  data.hideSampul = false;
  data.searchQuery = "";
};

onMounted(() => {
  screenOrientation.lock("landscape");
});

onBeforeUnmount(() => {
  screenOrientation.unlock();
});
</script>

<style scoped>
.search-container {
  display: flex;
  align-items: center;
}

.search-container > .search-input {
  flex-grow: 2;
}

.img-doa {
  width: 100%;
}
</style>
