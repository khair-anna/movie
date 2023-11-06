<template>
    <div class="movie">
        <img 
        :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`"
        :alt="movie.original_title"
        class="movie-img">
        <button class="movie-btn" 
            v-if="!movie.isLiked" 
            @click="movieStore.addToFavourites(movie)">
            <img src="/svg/btn-heart.svg" alt="btn-heart">
        </button>
        <button class="movie-btn" 
            v-else 
            @click="movieStore.removeFromFavourites(movie)">
            <img src="/svg/btn-heart-full.svg" alt="btn-heart-full">
        </button>
        <div class="movie-info">
            <h3 class="movie-name">{{ movie.original_title }}</h3>
            <span class="movie-release">{{ movie.release_date }}</span>
            <router-link :to="'/movie/' + movie.id" class="movie-link">View more info</router-link>
        </div>
    </div>
</template>

<script setup>
import { useMovieStore } from '../stores/MovieStores';

const movieStore = useMovieStore();
const props = defineProps({
    movie: {
        type: Object,
        required: true,
        default: () => {}
    }
})
</script>

<style lang="scss" scoped>
.movie {
    width: 255px;
    height: 355px;
    position: relative;
    border: 1px solid var(--gray);
    border-radius: 15px;
    background: linear-gradient(90deg, #fff, #969696);
    color: var(--dark);
    &-img {
        width: 255px;
        height: 215px;
        object-fit: cover;
        border-radius: 15px 15px 0 0;
    }
    &-info {
        padding: 10px;
    }
    &-name {
        font-weight: bold;
        margin-bottom: 10px;
    }
    &-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 54px;
        height: 54px;
        border-radius: 15px;
        border: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    &-link {
        display: block;
        text-align: center;
        text-decoration: none;
        color: var(--dark);
        margin-top: 10px;
        &:hover {
            font-weight: bold;
        }
    }
}
</style>