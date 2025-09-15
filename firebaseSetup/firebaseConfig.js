// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9Rlo-boXd3qx_oRMz5oPRJxpKkOWUKow",
  authDomain: "registerpage-d9edb.firebaseapp.com",
  databaseURL: "https://registerpage-d9edb-default-rtdb.firebaseio.com",
  projectId: "registerpage-d9edb",
  storageBucket: "registerpage-d9edb.firebasestorage.app",
  messagingSenderId: "652339101251",
  appId: "1:652339101251:web:16cc94c8af0a2720b91ef6",
  measurementId: "G-K2WXYG4L10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);