<template>
    <div class="card player-card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img :src="(image || imageDefault)" class="img-fluid rounded-start" alt="image-player">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ player?.name || 'Nombre no facilitado' }}</h5>
                    <h6 class="card-subtitle mb-2">{{ player?.position || '-' }}</h6>
                    <p class="card-text mb-0">Fecha de nacimiento: {{ player?.birthDate || '-' }}</p>
                    <p class="card-text mb-0">Edad: {{ `${player?.age} años` || '-' }}</p>
                    <p class="card-text mb-0">País: {{ nation?.name || '-' }}</p>                            
                    <p class="card-text mb-0">Equipo: {{ club?.name || '-'}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import defaultAvatar from '../assets/default-avatar.png'

export default {
    name: 'PlayerCard',
    props: {
        player: {
            type: Object,
            required: true
        },
        nation: {
            type: Object,
            required: true
        },
        club: {
            type: Object,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            imageDefault: defaultAvatar
        }
    }
}
</script>

<style lang="scss" scoped>
.player-card {
    width: 100%;
    background-color: #E2E2E0;
}
</style>