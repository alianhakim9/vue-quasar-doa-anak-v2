<template>
  <div class="header">
    <span
      style="
        font-size: 16pt;
        font-weight: bold;
        background-color: rgba(255, 255, 255, 0.8);
        padding-left: 12px;
        padding-right: 12px;
        padding-top: 8px;
        padding-bottom: 8px;
        border-radius: 12px;
      "
      >Daftar Isi</span
    >
  </div>
  <div style="display: flex; flex-direction: column; margin: 12px">
    <ol>
      <li v-for="(item, index) of daftarIsi" :key="index">
        {{ item.toUpperCase() }}
      </li>
    </ol>
  </div>
</template>

<script setup>
import { daftarIsi } from "../assets/daftar-isi";
</script>

<style>
.header {
  background: url("https://img.freepik.com/free-vector/organic-flat-abstract-element-pattern_23-2148942926.jpg?w=740&t=st=1700439637~exp=1700440237~hmac=a80e1fd01f95c3a929e6732367dd399a7dd65df0a86866269a9d0da55640cb12");
  padding: 20px;
  text-align: center;
  margin: 12px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
}
</style>
