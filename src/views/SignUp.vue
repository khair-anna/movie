<template>
    <div class="signup">
        <a href="#"><img src="/svg/logo.svg" alt="logo" class="signup-logo"></a>
        <form @submit.prevent="signup">
            <input type="email" placeholder="Email" v-model="signup_form.email" class="signup-input">
            <input type="password" placeholder="Password" v-model="signup_form.password" class="signup-input">
            <input type="submit" class="signup-button" value="Sign up">
        </form>
        <span class="signup-txt">Already have an account? 
            <router-link to="/login" class="signup-link">Log in</router-link>
        </span>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/UserStore'

const signup_form = ref({});
const userStore = useUserStore();

const signup = () => {
    userStore.signup(signup_form.value)
}
</script>

<style lang="scss">
.signup {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(45deg, black, transparent);
    padding: 150px;
    text-align: center;
    &-logo {
        display: block;
        margin: 0 auto 30px;
    }
    &-txt {
        display: block;
        margin-top: 20px;
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
        &:disabled {
            background-color: var(--gray);
            opacity: 0.8;
            cursor: not-allowed;
        }
    }
    &-link {
        color: var(--white);
        &:hover {
            font-weight: bold;
        }
    }
}
</style>