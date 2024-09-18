// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxKuFxIdlvouBFGewbHN53wc5UMGdPoIs",
  authDomain: "film-17f3a.firebaseapp.com",
  projectId: "film-17f3a",
  storageBucket: "film-17f3a.appspot.com",
  messagingSenderId: "205659610034",
  appId: "1:205659610034:web:a1fad398b5e4428268e2ab",
  measurementId: "G-LCZEBVGQ8B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app); // Initialize Firestore database

export { db }; // Export the database

