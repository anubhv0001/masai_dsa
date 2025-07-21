// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRjmDK2EPivSurxfLtPM3XwwDCRkeT2jU",
  authDomain: "digital-recipe-book-9d0ce.firebaseapp.com",
  projectId: "digital-recipe-book-9d0ce",
  storageBucket: "digital-recipe-book-9d0ce.firebasestorage.app",
  messagingSenderId: "393780581656",
  appId: "1:393780581656:web:04bb93a0363309195e7a6d",
  measurementId: "G-P3RCQLQTZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { auth, db };