import { defineStore } from "pinia";

export const useDoaStore = defineStore("doaStore", {
  state: () => ({
    data: require("../assets/contents").contents,
  }),

  getters: {
    getData(state) {
      return state.data;
    },
    search(state, searchQuery) {
      return state.data.filter((item) => item.id === searchQuery);
    },
  },

  actions: {
    search(searchQuery) {
      return this.data.filter((item) => item.id === searchQuery);
    },
  },

  mutation: {
    search(searchQuery) {},
  },
});
