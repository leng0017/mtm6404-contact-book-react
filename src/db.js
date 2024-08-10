// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  // Import Firestore from the modular SDK
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhmFU6MsQPDl6HV6NuHbDCkOwpuHmmF9Y",
  authDomain: "ctbk-732b9.firebaseapp.com",
  projectId: "ctbk-732b9",
  storageBucket: "ctbk-732b9.appspot.com",
  messagingSenderId: "1081231876093",
  appId: "1:1081231876093:web:ea5f41cd1718966d5bc394",
  measurementId: "G-S0ZB8YE9PV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);  // Correct way to initialize Firestore with the modular SDK

export default db;
