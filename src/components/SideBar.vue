<template>
    <div class="container">
        <div class="sidebar">
            <a href="/"><img src="/svg/logo.svg" alt="logo" class="sidebar-logo"></a>
            <div class="sidebar-navigation">
                <a href="/" class="sidebar-navigation__item"><img src="/svg/film.svg" alt="film">Home</a>
                <router-link to="/favourites" class="sidebar-navigation__item"><img src="/svg/heart.svg" alt="heart">Favourites</router-link>
                <router-link to="/trending" class="sidebar-navigation__item"><img src="/svg/trending-up.svg" alt="trending">Trending</router-link>
                <router-link to="/upcoming" class="sidebar-navigation__item"><img src="/svg/calendar.svg" alt="calendar">Coming soon</router-link>
            </div>
            <div class="sidebar-navigation">
                <a href="/" class="sidebar-navigation__item"><img src="/svg/users.svg" alt="community">Community</a>
                <a href="/" class="sidebar-navigation__item"><img src="/svg/message-circle.svg" alt="message">Social</a>
            </div>
            <div class="sidebar-navigation">
                <a href="/" class="sidebar-navigation__item"><img src="/svg/sliders.svg" alt="settings">Settings</a>
                <a href="/login" class="sidebar-navigation__item"><img src="/svg/log-out.svg" alt="logout">Logout</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import router from '../router';


</script>

<style lang="scss" scoped>
.sidebar {
    background: var(--dark);
    position: fixed;
    width: 274px;
    height: 100vh;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &-logo {
        height: 32px;
        width: 141px;
    }
    &-navigation {
        &__item {
            text-decoration: none;
            color: var(--white);
            font-size: 18px;
            display: flex;
            gap: 15px;
            margin-bottom: 20px;
            &:hover {
                font-weight: bold;
            }

        }
    }

}
</style>