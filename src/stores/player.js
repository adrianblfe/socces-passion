// import axios from "axios";
import { defineStore } from "pinia";
import Vue from "vue";

export const usePlayerStore = defineStore('player', {
    state: () => ({
        players: [],
        countTotal: 0,
        itemsPerPage: 0,
        pageTotal: 0,
        pageCurrent: 0
    }),
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
    }
});