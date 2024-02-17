// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDGwVhu-VHp_c81Iu6LykXInPbGO2kuhGo",
    authDomain: "blog-app-c7418.firebaseapp.com",
    projectId: "blog-app-c7418",
    storageBucket: "blog-app-c7418.appspot.com",
    messagingSenderId: "417282354120",
    appId: "1:417282354120:web:65c88aaed4f5a24c6b2efd",
    measurementId: "G-CRCCFJ5PT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)