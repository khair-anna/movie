import { defineStore } from "pinia";
import { ref, watch } from "vue";

const url = 'https://api.themoviedb.org/3/movie/popular?api_key=87517495a6a57f4bb982e8eda1cea504';
const urlUpcomingMovies = 'https://api.themoviedb.org/3/movie/upcoming?api_key=87517495a6a57f4bb982e8eda1cea504';
const urlSearch = 'https://api.themoviedb.org/3/search/movie?api_key=87517495a6a57f4bb982e8eda1cea504&query=';

export const useMovieStore = defineStore("movieStore", () => {
    const movies = ref([]);
    const upcomingMovies = ref([]);
    const favouriteMovies = ref([]);
    const searchMovies = ref([]);

    const moviesInLocalStorage = localStorage.getItem("movies");
    if (moviesInLocalStorage) {
        favouriteMovies.value = JSON.parse(moviesInLocalStorage)._value;
    }

    const setLikedFlag = (movies, likedMovieIds) => {
        return movies.map(movie => {
            movie.isLiked = likedMovieIds.includes(movie.id);
            return movie;
        });
    };

    const getMovies = async () => {
        const res = await fetch(url);
        const data = await res.json();
        const likedMovieIds = favouriteMovies.value.map(likedMovie => likedMovie.id);
        movies.value = setLikedFlag(data.results, likedMovieIds);
    };

    const getUpcomingMovies = async () => {
        const res = await fetch(urlUpcomingMovies);
        const data = await res.json();
        const likedMovieIds = favouriteMovies.value.map(likedMovie => likedMovie.id);
        upcomingMovies.value = setLikedFlag(data.results, likedMovieIds);
    };

    const getSearchMovies = async (search) => {
        const res = await fetch(`${urlSearch}${search}`);
        const data = await res.json();
        const likedMovieIds = favouriteMovies.value.map(likedMovie => likedMovie.id);
        searchMovies.value = setLikedFlag(data.results, likedMovieIds);
    };

    const getMovieById = async (id) => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=87517495a6a57f4bb982e8eda1cea504`);
        const data = await res.json();
        return data;
    }

    const addToFavourites = (object) => {
        favouriteMovies.value.push(object);
        object.isLiked = true;
    };

    const removeFromFavourites = (object) => {
        object.isLiked = false;
        favouriteMovies.value = favouriteMovies.value.filter(el => el.isLiked);
    };

    watch(
        () => favouriteMovies,
        (state) => {
        localStorage.setItem("movies", JSON.stringify(state))
        },
        { deep: true })

    return {
        movies,
        upcomingMovies,
        favouriteMovies,
        searchMovies,
        getMovies,
        getUpcomingMovies,
        addToFavourites,
        removeFromFavourites,
        getSearchMovies,
        getMovieById
    }
})