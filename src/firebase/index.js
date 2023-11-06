import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBfiRlTvA-3TXJuyKO0dNkUK_h-_4zBwTc",
    authDomain: "vue-movies-5dfb2.firebaseapp.com",
    projectId: "vue-movies-5dfb2",
    storageBucket: "vue-movies-5dfb2.appspot.com",
    messagingSenderId: "767241819322",
    appId: "1:767241819322:web:5f4305ca5b469c56c1de83"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);