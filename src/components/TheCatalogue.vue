<template>
    <div class="catalogue container px-4 py-3">
        <div class="row mb-3">
            <div class="col-12">
                <TheFilters @search="searchPlayers" />
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <TablePlayers :players="playersFiltered" />
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
    name: 'TheCatalogue',
    components: {
        TablePlayers: () => import('./TablePlayers.vue'),
        ThePagination: () => import('./ThePagination.vue'),
        TheFilters: () => import('./TheFilters.vue')
    },
    data() {
        return {
            playerStore: usePlayerStore()
        };
    },
    computed: {
        ...mapState(usePlayerStore, ['playersFiltered']),
    },
    async mounted() {
        await this.getList({ page: 1 });
        await this.searchPlayers();
    },
    methods: {
        ...mapActions(usePlayerStore, ['getList']),
        changeList(page) {
            this.getList(page);
        },
        searchPlayers(data = null) {
            this.playerStore.filterPlayers({ text: data?.name || '' });
        }
    }
}
</script>

<style lang="scss" scoped>
.catalogue {
    background-color: #1D2D44;
}
</style>