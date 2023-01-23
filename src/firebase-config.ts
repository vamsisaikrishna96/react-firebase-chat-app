// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvlhBzG67EnqwUpGOgzHR-G1JPuXCIzC8",
  authDomain: "chat-app-b0ec0.firebaseapp.com",
  projectId: "chat-app-b0ec0",
  storageBucket: "chat-app-b0ec0.appspot.com",
  messagingSenderId: "875776227320",
  appId: "1:875776227320:web:24675339f38658e4b5880d",
  measurementId: "G-EYE0S534M7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
