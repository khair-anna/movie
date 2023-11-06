<template>
    <SideBar/>
    <Header/>
    <AboutFirstMovie/>
    <TrendingMovies :is-home="true"/>
    <router-link to="/trending" class="home-link">See more</router-link>
    <UpcomingMovies :is-home="true"/>
    <router-link to="/upcoming" class="home-link">See more</router-link>
    <Favourites :is-home="true"/>
</template>

<script setup>
import SideBar from '../components/SideBar.vue'
import Header from '../components/Header.vue';
import AboutFirstMovie from '../components/AboutFirstMovie.vue';
import TrendingMovies from './TrendingMovies.vue';
import UpcomingMovies from './UpcomingMovies.vue';
import Favourites from './Favourites.vue';

</script>

<style lang="scss" scoped>
.home {
    &-link {
        margin-left: 274px;
        display: block;
        text-align: center;
        color: var(--white);
        text-decoration: none;
        font-size: 20px;
        &:hover{
            font-weight: bold;
        }
    }
}
</style>