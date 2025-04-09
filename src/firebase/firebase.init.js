// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBNAqcUjE_w-2xnRZatjxQ0NTRExMyNdo",
  authDomain: "sport-accessories-989c0.firebaseapp.com",
  projectId: "sport-accessories-989c0",
  storageBucket: "sport-accessories-989c0.firebasestorage.app",
  messagingSenderId: "875215569233",
  appId: "1:875215569233:web:5eb5970083a6e404029370"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth