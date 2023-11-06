<template>
    <SideBar/>
    <Header/>
    <div class="movie-about">
        <img 
        :src="`https://image.tmdb.org/t/p/w500/${currentMovie.poster_path}`"
        :alt="currentMovie.original_title"
        class="movie-about__img">
        <div class="movie-about__info">
            <h3 class="movie-about__name">{{ currentMovie.original_title }}</h3>
            <div class="movie-about__description">
                <span class="movie-about__release">{{ currentMovie.release_date }}</span>
                <div>
                    <span class="movie-about__genres" v-for="genres of currentMovie.genres">{{ genres.name }}</span>
                </div>
                <div class="movie-about__rate">
                    <img src="/svg/vote.svg" alt="vote">
                    <span class="movie-about__vote">{{ Math.round(currentMovie.vote_average) }}/10</span>
                </div>
            </div>
            <div class="movie-about__overview">
                <span>{{ currentMovie.overview }}</span>
            </div>
            <div class="movie-about__buttons">
                <button class="movie-about__button">Watch now</button>
                <button class="movie-about__btn" 
                    v-if="!currentMovie.isLiked" 
                    @click="movieStore.addToFavourites(currentMovie)">
                    <img src="/svg/btn-heart.svg" alt="btn-heart">
                </button>
                <button class="movie-about__btn" 
                    v-else 
                    @click="movieStore.removeFromFavourites(currentMovie)">
                    <img src="/svg/btn-heart-full.svg" alt="btn-heart-full">
                </button>
            </div>
        </div>
    </div>
</template>
<script setup>
import SideBar from '../components/SideBar.vue'
import Header from '../components/Header.vue';

import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useMovieStore } from '../stores/MovieStores';

const route = useRoute();
const movieId = ref('');
const movieStore = useMovieStore();
const currentMovie = ref({});

onMounted(async () => {
    movieId.value = route.params.id;

    currentMovie.value = await movieStore.getMovieById(movieId.value);
});

</script>
<style lang="scss" scoped>
.movie-about {
    margin-left: 274px;
    padding: 40px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 50px;
    align-items: center;
    &__img {
        border-radius: 30px;
    }
    &__description {
        display: flex;
        align-items: center;
        gap: 30px;
        margin-bottom: 50px;
        font-size: 18px;
    }
    &__name {
        font-size: 48px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    &__genres {
        margin-right: 10px;
    }
    &__rate {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    &__buttons {
        display: flex;
        margin-top: 50px;
    }
    &__button {
        width: 139px;
        height: 54px;
        border-radius: 15px;
        border: 0;
        color: var(--white);
        font-size: 16px;
        background-color: var(--purple);
        cursor: pointer;
        margin-right: 15px;
    }
    &__btn {
        width: 54px;
        height: 54px;
        border-radius: 15px;
        border: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
}
</style>