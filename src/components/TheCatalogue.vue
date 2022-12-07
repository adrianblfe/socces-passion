<template>
    <div class="catalogue container px-4 py-3">
        <div class="row">
            <div class="col-12">
                <TablePlayers :players="players" />
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <ThePagination @change-page="changeList" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { usePlayerStore } from '../stores/player'

export default {
    components: {
        TablePlayers: () => import('./TablePlayers.vue'),
        ThePagination: () => import('./ThePagination.vue')
    },
    computed: {
        ...mapState(usePlayerStore, ['players']),
    },
    mounted() {
        this.getList({ page: 1 });
    },
    methods: {
        ...mapActions(usePlayerStore, ['getList']),
        changeList(page) {
            this.getList(page);
        }
    }
}
</script>

<style lang="scss" scoped>
.catalogue {
    background-color: #1D2D44;
}
</style>