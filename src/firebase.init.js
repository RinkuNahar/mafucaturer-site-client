// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCC1_HBsUtBF78kRkZbExasQxsHkp0K1vc",
    authDomain: "manufactur-capital.firebaseapp.com",
    projectId: "manufactur-capital",
    storageBucket: "manufactur-capital.appspot.com",
    messagingSenderId: "293095993840",
    appId: "1:293095993840:web:98ea36d13e4873000b6d35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;