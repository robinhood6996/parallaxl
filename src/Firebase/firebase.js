import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAeZRzS0l4WDgMZOOnaAHBa-3CDv5SD-Mc",
    authDomain: "parallax-70cfb.firebaseapp.com",
    projectId: "parallax-70cfb",
    storageBucket: "parallax-70cfb.appspot.com",
    messagingSenderId: "392759935793",
    appId: "1:392759935793:web:6dec590ae2b2a25fdfa610"
};

// Initialize Firebase
const FirebaseInitialize = () => {
    initializeApp(firebaseConfig)
};

export default FirebaseInitialize;