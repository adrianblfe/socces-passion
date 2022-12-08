import { defineStore } from "pinia";
import Vue from "vue";

export const usePlayerStore = defineStore('player', {
    state: () => ({
        players: [],
        countTotal: 0,
        itemsPerPage: 0,
        pageTotal: 0,
        pageCurrent: 0,
        image: null,
    }),
    getters: {
        getPlayerById(state) {
            return (id) => {
                return state.players.find((player) => player.id === id);
            }
        }
    },
    actions: {
        getList(params) {
            Vue.axios.get('/players', { params: params })
                .then(({ data }) => {
                    this.players = data.items;
                    this.countTotal = data.pagination.countTotal;
                    this.itemsPerPage = data.pagination.itemsPerPage;
                    this.pageTotal = data.pagination.pageTotal;
                    this.pageCurrent = data.pagination.pageCurrent;
                })
                .catch((error) => console.error(error));
        },

        getImagePlayer(id) {
            Vue.axios.get(`/players/${id}/image`, { responseType: 'blob' })
                .then((response) => {
                    this.image = URL.createObjectURL(response.data);
                })
                .catch((error) => {
                    this.image = null;
                    console.error(error);
                });
        },
    }
});