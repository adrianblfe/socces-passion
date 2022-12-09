<template>
    <div class="row">
        <div class="col-4">
            <input
                v-model="name"
                class="form-control form-control-sm"
                type="text"
                placeholder="Buscar por nombre..."
                aria-label=".form-control-sm"
                @keypress.enter="searchPlayers"
            >
        </div>

        <div class="col-2">
            <button
                type="button"
                class="btn btn-primary btn-sm"
                title="Buscar jugadores"
                @click="searchPlayers"
            >
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheFilters',
    data() {
        return {
            name: null,
        };
    },
    methods: {
        searchPlayers() {
            this.$emit('search', { name: this.name });
        }
    }
}
</script>

<style lang="scss" scoped>

</style>