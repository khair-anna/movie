<template>
    <SideBar v-if="!isHome" />
    <Header v-if="!isHome" />
    <div class="movies" :isHome="false">
        <h2 class="movies__title">Trending</h2>
        <div class="movies__items">
            <Movie v-if="isHome"
            v-for="movie of movieStore.movies.slice(0, 4)"
            :key="movie.id"
            :movie="movie"/>
            <Movie v-else
            v-for="movie of movieStore.movies"
            :movie="movie"/>
        </div>  
    </div>
</template>

<script setup>
import SideBar from '../components/SideBar.vue'
import Header from '../components/Header.vue';
import Movie from '../components/Movie.vue';

import { onMounted } from 'vue';
import { useMovieStore } from '../stores/MovieStores';

const movieStore = useMovieStore();

onMounted(() => movieStore.getMovies());

const props = defineProps({
    isHome: {
        type: Boolean,
        default: false,
        required: true
    }
})
</script>
<style lang="scss" scoped>
</style>
