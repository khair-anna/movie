<template>
    <SideBar v-if="!isHome" />
    <Header v-if="!isHome" />
    <div class="movies">
        <h2 class="movies__title">My favourites</h2>
        <span class="movies__text" v-if="movieStore.favouriteMovies.length == 0">
            This list is empty, add the movie to your favorites
        </span>
        <div class="movies__items">
            <Movie 
            v-for="movie of movieStore.favouriteMovies"
            :key="movie.id"
            :movie="movie"/>
        </div>
    </div>    
</template>
<script setup>
import SideBar from '../components/SideBar.vue'
import Header from '../components/Header.vue';
import Movie from '../components/Movie.vue';

import { useMovieStore } from '../stores/MovieStores';

const movieStore = useMovieStore();

const props = defineProps({
    isHome: {
        type: Boolean,
        default: false,
        required: true
    }
})
</script>
<style lang="scss" scoped>
.movies {
    &__text {
        font-size: 30px;
    }
}
</style>