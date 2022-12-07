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
                    <td>{{ player.name }}</td>
                    <td class="text-center">{{ player.age }}</td>
                    <td class="text-center">{{ player.club }}</td>
                    <td class="text-center">{{ player.nation }}</td>
                    <td class="text-center">{{ player.position }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'TablePlayers',
        props: {
            players: {
                type: Array,
                required: true,
            }
        },
    }
</script>

<style lang="scss" scoped>
table {
    color: #F0EBD8;

    &.table-hover tbody tr:hover td, .table-hover tbody tr:hover th {
        color: #4f4f4f;
        background-color: #E2E2E0;
    }
}
</style>