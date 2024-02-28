// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measuremfigurentId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1tOP7Nc6OxkQd3_myhlcJS1yhXphI57Y",
  authDomain: "heyatnamine-cff9d.firebaseapp.com",
  projectId: "heyatnamine-cff9d",
  storageBucket: "heyatnamine-cff9d.appspot.com",
  messagingSenderId: "629348555908",
  appId: "1:629348555908:web:f3f5d99702f68d728cb6d1",
  measurementId: "G-1NC6WY468K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
