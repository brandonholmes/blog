// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByKHHIknsvAnPaAd93aneyY0-4YqKS_uM",
  authDomain: "blog-dfec5.firebaseapp.com",
  projectId: "blog-dfec5",
  storageBucket: "blog-dfec5.appspot.com",
  messagingSenderId: "320210035367",
  appId: "1:320210035367:web:314575fbd0efbc0327b182",
  measurementId: "G-PQK2H22YER",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
