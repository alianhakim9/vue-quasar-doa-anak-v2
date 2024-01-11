<template>
  <div class="q-gutter-md">
    <audio ref="audioPlayer" :src="props.audioSrc" @ended="audioEnded"></audio>
    <!-- <p class="text-white font-bold">{{ data.tracking }}</p> -->
    <!-- <q-btn icon="play_arrow" @click="play" color="primary" round size="lg" />
    <q-btn icon="pause" @click="pause" color="secondary" round size="lg" />
    <q-btn icon="stop" @click="stop" color="red" round size="lg" /> -->
    <AudioPlayer
      :option="{
        src: props.audioSrc,
        coverRotate: false,
        coverImage: null,
      }"
    />
  </div>
</template>

<script setup>
import { defineProps, reactive, ref } from "vue";
import AudioPlayer from "vue3-audio-player";
import "vue3-audio-player/dist/style.css";

const data = reactive({
  isPlaying: false,
  isPaused: false,
  isEnded: false,
  tracking: "Tekan tombol untuk mendengarkan doa",
});

const props = defineProps({
  audioSrc: String,
});

const audioPlayer = ref(null);

const play = () => {
  stop();
  audioPlayer.value.play();
  data.isPlaying = true;
  data.tracking = "Sedang mendengarkan doa...";
};

const pause = () => {
  audioPlayer.value.pause();
  data.isPaused = true;
  data.tracking = "Doa dijeda";
};

const stop = () => {
  const audio = audioPlayer.value;
  audio.pause();
  audio.currentTime = 0;
  data.isPlaying = false;
  data.isEnded = true;
  data.tracking = "Tekan tombol untuk mendengarkan doa";
};

const audioEnded = () => {
  data.isEnded = true;
  data.tracking = "Tekan tombol untuk mendengarkan doa";
};
</script>
