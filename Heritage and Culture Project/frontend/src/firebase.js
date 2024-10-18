// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "heritage-culture.firebaseapp.com",
  projectId: "heritage-culture",
  storageBucket: "heritage-culture.appspot.com",
  messagingSenderId: "755599152057",
  appId: "1:755599152057:web:83b8cea53bb33241e71c68"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);