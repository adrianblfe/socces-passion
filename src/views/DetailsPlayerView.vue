<template>
    <div id="details-player" class="row">
        <div class="container-items">
            <div class="row my-3">
                <div class="col-12 d-flex justify-content-end">
                    <router-link class="back-players-link" :to="{ name: 'home' }">
                        <font-awesome-icon icon="fa-solid fa-arrow-left" />
                        Ir al catálogo de jugadores
                    </router-link>
                </div>
            </div>
            <div class="row">
                <div class="col-12 d-flex justify-content-center align-items-center">
                    <PlayerCard :player="player" :nation="nation" :club="club" :image="image" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { usePlayerStore } from '../stores/player'
import { useNationStore } from '../stores/nation'
import { useClubStore } from '../stores/club'

export default {
    name: 'DetailsPlayer',
    components: {
        PlayerCard: () => import('../components/PlayerCard.vue')
    },
    data() {
        return {
            store: usePlayerStore(),
            playerId: this.$route.params.id,
            player: {},
        };
    },
    computed: {
        ...mapState(usePlayerStore, ['image']),
        ...mapState(useNationStore, ['nation']),
        ...mapState(useClubStore, ['club']),
    },
    created() {
        console.log('CREATED 1', this.playerId);
        this.player = this.getPlayer(this.playerId);
        console.log('CREATED 2', this.player);
    },
    mounted() {
        this.getImage();
        this.getNation();
        this.getClub();
    },
    methods: {
        ...mapActions(usePlayerStore, ['getImagePlayer']),
        ...mapActions(useNationStore, ['getNationById']),
        ...mapActions(useClubStore, ['getClubById']),
        getPlayer(id) {
            return this.store.getPlayerById(id);
        },
        getImage() {
            this.getImagePlayer(this.playerId);
        },
        getNation() {
            console.log('PLAYER', this.player);
            this.getNationById(this.player.nation);
        },
        getClub() {
            this.getClubById(this.player.club);
        }
    },
}
</script>

<style lang="scss" scoped>
#details-player {
    height: 100vh;
    .container-items {
            height: 100%;

            .back-players-link {
                text-decoration: none;
                color: #E2E2E0;
            }
    }
}
</style>