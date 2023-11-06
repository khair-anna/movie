<template>
    <header class="header" id="header">
        <div class="header-top">
            <div class="header-menu">
                <a :href="item.path" 
                v-for="(item, i) in menu"
                :key="i"
                class="header-menu__item">{{ item.name }}</a>
            </div>
            <div class="header-menu__right">
                <router-link to="/search"><img src="/svg/search.svg" alt="search"></router-link>
                <a href="/"><img src="/svg/bell.svg" alt="bell"></a>
                <a href="/"><img src="/svg/user-img.svg" alt="user"></a>
                <a href="/" class="header-menu__item">Anna</a>
            </div>
        </div>
    </header>
</template>

<script setup>
const menu = [
    {
        name: 'Movies',
        path: '/movies'
    },
    {
        name: 'Series',
        path: '/series'
    },
    {
        name: 'Documentaries',
        path: '/documentaries'
    }
]

</script>

<style lang="scss" scoped>
.header {
    margin-left: 274px;
    background-size: cover;
    padding: 40px 30px 0px 30px;
    &-top {
        display: flex;
        justify-content: space-between;
        padding-bottom: 20px;
    }
    &-menu {
        display: flex;
        gap: 20px;
        align-items: center;
        &__item {
            color: var(--white);
            text-decoration: none;
            font-size: 18px;
            &:hover {
                font-weight: bold;
            }
        }
        &__right {
            display: flex;
            align-items: center;
            gap: 20px;
        }
    }
}
</style>