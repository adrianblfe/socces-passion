import { defineStore } from "pinia";
import Vue from "vue";

export const useNationStore = defineStore('nation', {
    state: () => ({
        nations: [],
        nation: null,
    }),
    actions: {
        getNationById(id) {
            Vue.axios.get(`/nations/${ id }`)
                .then(({ data }) => {
                    this.nation = data.nation;
                })
                .catch((error) => console.error(error));
        },
    }
});