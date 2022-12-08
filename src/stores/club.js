import { defineStore } from "pinia";
import Vue from "vue";

export const useClubStore = defineStore('club', {
    state: () => ({
        clubs: [],
        club: null,
    }),
    actions: {
        getClubById(id) {
            Vue.axios.get(`/clubs/${ id }`)
                .then(({ data }) => {
                    this.club = data.club;
                })
                .catch((error) => console.error(error));
        },
    }
});