<template>
    <SideBar/>
    <Header/>
    <div class="search">
        <form @submit.prevent>
            <input 
            type="text" 
            class="search-input" 
            placeholder="Type a movie" 
            v-model="searchMovie"
            @input = "movieStore.getSearchMovies(searchMovie)">
        </form>
        <div class="movies__items">
            <Movie
            v-for="movie of movieStore.searchMovies"
            :key="movie.id"
            :movie="movie"/>
        </div>  
    </div>
</template>
<script setup>
import SideBar from '../components/SideBar.vue'
import Header from '../components/Header.vue';
import Movie from '../components/Movie.vue';

import { ref } from 'vue';
import { useMovieStore } from '../stores/MovieStores';

const movieStore = useMovieStore();

const searchMovie = ref('');

</script>
<style lang="scss" scoped>
.search {
    margin-left: 274px;
    padding: 40px;
    &-input {
        width: 550px;
        height: 35px;
        border: 0;
        border-radius: 15px;
        padding: 20px;
        color: var(--dark);
        font-size: 18px;
        margin-bottom: 30px;
    }
}
</style>