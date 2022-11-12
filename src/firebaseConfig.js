import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuinuZ9ukKE_euIacPPqWpzKuwu4Xo4eM",
  authDomain: "blog-d98df.firebaseapp.com",
  projectId: "blog-d98df",
  storageBucket: "blog-d98df.appspot.com",
  messagingSenderId: "523701050848",
  appId: "1:523701050848:web:036927a9373648e748df85",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
