// client/src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAIT0S5XaNpgGnsVbz8Wyj3ciaQwv-OkeI",
    authDomain: "weddy-cd4ac.firebaseapp.com",
    projectId: "weddy-cd4ac",
    storageBucket: "weddy-cd4ac.firebasestorage.app",
    messagingSenderId: "235208004798",
    appId: "1:235208004798:web:b44affdc7f9c9a8e6b3aef",
    measurementId: "G-L9JP3ZRWZQ"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
