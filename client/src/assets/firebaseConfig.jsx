// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA8dxpT8iiJMrImKJDGrg9ThgzCPa--rQ0",
    authDomain: "social-media-fd6de.firebaseapp.com",
    projectId: "social-media-fd6de",
    storageBucket: "social-media-fd6de.appspot.com",
    messagingSenderId: "714697265362",
    appId: "1:714697265362:web:3bb6bdd3f1f7a55ccc5d0b",
    measurementId: "G-CNMLCE1QY3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);