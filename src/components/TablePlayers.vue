<template>
    <div>
        <table class="table table-hover table-responsive">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th class="text-center">Edad</th>
                    <th class="text-center">Equipo</th>
                    <th class="text-center">País</th>
                    <th class="text-center">Posición</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="player in players" :key="player.id" class="player-row">
                    <td class="name-hover" @click="goToPlayerDetails(player.id)">{{ player.name }}</td>
                    <td class="text-center">{{ player.age }}</td>
                    <td class="text-center">{{ getClubName(player.club) }}</td>
                    <td class="text-center">{{ getNationName(player.nation) }}</td>
                    <td class="text-center">{{ player.position }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState } from 'pinia'
import { useClubStore } from '../stores/club'
import { useNationStore } from '../stores/nation'

export default {
    name: 'TablePlayers',
    props: {
        players: {
            type: Array,
            required: true,
        }
    },
    computed: {
        ...mapState(useClubStore, ['clubs']),
        ...mapState(useNationStore, ['nations']),
    },
    methods: {
        goToPlayerDetails(playerId) {
            this.$router.push({ name: 'detailsPlayer', params: { id: playerId } });
        },

        getClubName(clubId) {
            return this.clubs.find((club) => club.id === clubId)?.name;
        },

        getNationName(nationId) {
            return this.nations.find((nation) => nation.id === nationId)?.name;
        }
    }
}
</script>

<style lang="scss" scoped>
table {
    color: #F0EBD8;

    &.table-hover tbody tr:hover td, .table-hover tbody tr:hover th {
        color: #4f4f4f;
        background-color: #E2E2E0;
    }

    .name-hover:hover {
        cursor: pointer;
    }
}
</style>