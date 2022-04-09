// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzraKu4pFrTw9qTzRGAaRL8BivAqjVxnA",
  authDomain: "ema-john-simple-35fdc.firebaseapp.com",
  projectId: "ema-john-simple-35fdc",
  storageBucket: "ema-john-simple-35fdc.appspot.com",
  messagingSenderId: "757115429778",
  appId: "1:757115429778:web:45f9252dc57fa53b68d74b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;