// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBORS5sOI0KGvg3ZA4SQbJX4SOsRiSSZwY",
  authDomain: "tee-mee-df102.firebaseapp.com",
  projectId: "tee-mee-df102",
  storageBucket: "tee-mee-df102.firebasestorage.app",
  messagingSenderId: "232893838329",
  appId: "1:232893838329:web:230e68a069382911bf8328",
  measurementId: "G-ZY3S4YRD0J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);