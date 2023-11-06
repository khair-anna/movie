<template>
    <SideBar v-if="!isHome" />
    <Header v-if="!isHome" />
    <div class="movies" :isHome="false">
        <h2 class="movies__title">Comming soon</h2>
        <div class="movies__items">
            <Movie v-if="isHome"
            v-for="movie of movieStore.upcomingMovies.slice(0,4)" 
            :key="movie.id" 
            :movie="movie" />
            <Movie v-else
            v-for="movie of movieStore.upcomingMovies" 
            :movie="movie" />
        </div>
    </div>
</template>
<script setup>
import SideBar from '../components/SideBar.vue'
import Header from '../components/Header.vue';
import Movie from '../components/Movie.vue';

import { useMovieStore } from '../stores/MovieStores';
import { onMounted } from 'vue';

const movieStore = useMovieStore();

onMounted(() => movieStore.getUpcomingMovies());

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