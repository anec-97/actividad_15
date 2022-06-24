// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase }  from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTZSA-uxFI-M70J7ZYKMj5CzpebXFliEw",
  authDomain: "actividad-15-407a1.firebaseapp.com",
  databaseURL: "https://actividad-15-407a1-default-rtdb.firebaseio.com",
  projectId: "actividad-15-407a1",
  storageBucket: "actividad-15-407a1.appspot.com",
  messagingSenderId: "352541864447",
  appId: "1:352541864447:web:f86eb9d8eb416f23b937ca",
  measurementId: "G-1Y5FXG7V0B"
};

// Initialize Firebase
const db = initializeApp(firebaseConfig);

export default getDatabase(db);