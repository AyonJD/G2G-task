// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-xr7hxu121ydMNRyBp7JBqsbz0lulP40",
    authDomain: "g2g-task.firebaseapp.com",
    projectId: "g2g-task",
    storageBucket: "g2g-task.appspot.com",
    messagingSenderId: "33582439260",
    appId: "1:33582439260:web:6fcba626b5d5c334deff99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;