<template>
    <div class="login">
        <a href="#"><img src="/svg/logo.svg" alt="logo" class="login-logo"></a>
        <span class="login-txt">Enjoy the newest movies</span>
        <form @submit.prevent="login">
            <input type="email" placeholder="Email" v-model="login_form.email" class="login-input">
            <input type="password" placeholder="Password" v-model="login_form.password" class="login-input">
            <input type="submit" class="login-button" value="Log in">
        </form>
        <span class="login-txt">No account? 
            <router-link to="/signup" class="login-link">Sign up</router-link>
        </span>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/UserStore'

const login_form = ref({});
const userStore = useUserStore();

const login = () => {
    userStore.login(login_form.value)
}
</script>

<style lang="scss">
.login {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(45deg, black, transparent);
    padding: 150px;
    text-align: center;
    &-logo {
        display: block;
        margin: 0 auto;
    }
    &-txt {
        display: block;
        margin-top: 20px;
        margin-bottom: 30px;
        font-size: 20px;
    }
    &-input {
        display: block;
        margin: 10px auto 0;
        height: 54px;
        width: 300px;
        border-radius: 15px;
        padding: 0 20px;
        font-size: 18px;
    }
    &-button {
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 30px auto 0;
        width: 225px;
        height: 54px;
        border-radius: 15px;
        border: 0;
        color: var(--white);
        font-size: 18px;
        background-color: var(--purple);
        cursor: pointer;
    }
    &-link {
        color: var(--white);
        &:hover {
            font-weight: bold;
        }
    }
}
</style>