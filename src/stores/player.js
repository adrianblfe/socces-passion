import { defineStore } from "pinia";
import Vue from "vue";
import { useClubStore } from './club';
import { useNationStore } from "./nation";

export const usePlayerStore = defineStore('player', {
    state: () => ({
        players: [],
        playersFiltered: [],
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
        },
        filterPlayers(state) {
            return ({ text }) => {
                state.playersFiltered = state.players.filter((player) => player.name.toLowerCase().includes(text.toLowerCase()));
            }
        }
    },
    actions: {
        async getList(params) {
            await Vue.axios.get('/players', { params: params })
                .then(({ data }) => {
                    this.players = data.items;
                    this.countTotal = data.pagination.countTotal;
                    this.itemsPerPage = data.pagination.itemsPerPage;
                    this.pageTotal = data.pagination.pageTotal;
                    this.pageCurrent = data.pagination.pageCurrent;
                    
                    const clubStore = useClubStore();
                    const clubIdsStore = clubStore.clubs.map((club) => club.id);
                    const clubIds = [...new Set(this.players.map((player) => player.club))].filter((clubId) => {
                        if(!clubIdsStore.includes(clubId)) {
                            return clubId;
                        }
                    });
                    clubIds.forEach((clubId) => {
                        clubStore.getClubByIdAxios(clubId);
                    });

                    const nationStore = useNationStore();
                    const nationIdsStore = nationStore.nations.map((nation) => nation.id);
                    const nationIds = [...new Set(this.players.map((player) => player.nation))].filter((nationId) => {
                        if(!nationIdsStore.includes(nationId)) {
                            return nationId;
                        }
                    });
                    nationIds.forEach((nationId) => {
                        nationStore.getNationByIdAxios(nationId);
                    }); 
                    
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