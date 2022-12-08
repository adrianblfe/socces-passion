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
                    <div class="card player-card mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img :src="(image || imageDefault)" class="img-fluid rounded-start" alt="image-player">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">{{ player.name }}</h5>
                                    <h6 class="card-subtitle mb-2">{{ player.position }}</h6>
                                    <p class="card-text mb-0">Fecha de nacimiento: {{ player?.birthDate || '-' }}</p>
                                    <p class="card-text mb-0">Edad: {{ player?.age || '-' }} años</p>
                                    <p class="card-text mb-0">País: {{ nation?.name || '-' }}</p>                            
                                    <p class="card-text mb-0">Equipo: {{ club?.name || '-'}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
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
import defaultAvatar from '../assets/default-avatar.png'

export default {
    name: 'DetailsPlayer',
    data() {
        return {
            store: usePlayerStore(),
            playerId: this.$route.params.id,
            player: null,
            imageDefault: defaultAvatar
        };
    },
    computed: {
        ...mapState(usePlayerStore, ['image']),
        ...mapState(useNationStore, ['nation']),
        ...mapState(useClubStore, ['club']),
    },
    created() {
        this.player = this.getPlayer(this.playerId);
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

    .player-card {
        width: 100%;
        background-color: #E2E2E0;
    }
  }
}
</style>