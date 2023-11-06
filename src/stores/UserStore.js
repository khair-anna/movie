import { defineStore } from "pinia";
import router from '../router'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { ref } from "vue";

export const useUserStore = defineStore("userStore", () => {
    const user = ref(null);

    const SET_USER = (user) => {
        user.value = user;
    };

    const CLEAR_USER = () => {
        user.value = null;
    };

    const login = async (details) => {
        const { email, password } = details;
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            alert(error.message);
            return;
        }
        SET_USER(auth.currentUser);
        router.push('/');
    };

    const signup = async (details) => {
        const { email, password } = details;
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            alert(error.message);
            return;
        }
        SET_USER(auth.currentUser);
        router.push('/login');
    };

    const logout = async () => {
        await signOut(auth);
        CLEAR_USER();
        router.push('/login');
    };

    return {
        user,
        login,
        signup,
        logout
    };
});