// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW7h1Y58AgFpzSFPaqf_ACtYrTE_wnjE8",
  authDomain: "simple-firebase-practice-ae1d5.firebaseapp.com",
  projectId: "simple-firebase-practice-ae1d5",
  storageBucket: "simple-firebase-practice-ae1d5.appspot.com",
  messagingSenderId: "698324958592",
  appId: "1:698324958592:web:64a84b0097d61a4ddb5565"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;