<template>
    <div class="about-movie">
        <h1 class="about-movie__title">Insider</h1>
        <span class="about-movie__description">2022 | Comedy horror | 1 Season</span>
        <div class="about-movie__buttons">
            <button class="about-movie__button">Watch now</button>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.about-movie {
    margin-left: 274px;
    background-image:url('/img/header-bg.jpeg') ;
    padding: 120px 20px 45px;
    &__title {
        font-size: 44px;
        font-weight: bold;
        margin-bottom: 15px;
    }
    &__description {
        display: block;
        margin-bottom: 30px;
    }
    &__buttons {
        display: flex;
        align-items: center;
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
}
</style>