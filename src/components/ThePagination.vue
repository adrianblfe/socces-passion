<template>
    <nav aria-label="Page navigation">{{ pages }}
        <ul class="pagination justify-content-end">
            <li :class="['page-item', [0, 1].includes(pageCurrent) ? 'disabled' : '']">
                <a class="page-link" href="#" aria-label="Previous" @click="previousPage">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li v-for="(page, index) in pages"
                :key="index"
                :class="['page-item', pageCurrent === page ? 'active' : '']"
                @click="goToPage(page)"
            >
                <a v-if="(pageCurrent !== page)" class="page-link" href="#">{{ page }}</a>
                <span v-if="(pageCurrent === page)" class="page-link">{{ page }}</span>
            </li>
            <li :class="['page-item', pageCurrent === pageTotal ? 'disabled' : '']">
                <a class="page-link" href="#" aria-label="Next" @click="nextPage">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { usePlayerStore } from '../stores/player'

export default {
    name: 'ThePagination',
    data() {
        return {
            pages: [],
        };
    },
    created() {
        this.pages = this.getPagesNumber();
    },
    computed: {
        ...mapState(usePlayerStore, [
            'countTotal',
            'itemsPerPage',
            'pageTotal',
            'pageCurrent'
        ]),
    },
    watch: {
        pageCurrent(newValue) {
            if (this.pages.includes(newValue)) {
                return;
            }
            this.pages = this.getPagesNumber();
        },
    },
    methods: {
        ...mapActions(usePlayerStore, ['getList']),
        getPagesNumber() {
            if ([0, 1].includes(this.pageCurrent)) {
                return [1,2,3];
            }
            
            if (this.pageCurrent === this.pageTotal) {
                return [this.pageTotal - 2, this.pageTotal - 1, this.pageTotal];
            }
            
            return [this.pageCurrent - 1, this.pageCurrent, this.pageCurrent + 1];
        },
        goToPage(page) {
            if (this.pageCurrent === page) {
                return;
            }
    
            this.$emit('change-page', { page });
        },
        previousPage() {
            if (this.pageCurrent === 1) {
                return;
            }
            this.$emit('change-page', { page: this.pageCurrent - 1 });
        },
        nextPage() {
            if (this.pageCurrent === this.pageTotal) {
                return;
            }
            this.$emit('change-page', { page: this.pageCurrent + 1});
        }
    }
}
</script>

<style lang="scss" scoped>

</style>