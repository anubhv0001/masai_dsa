// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8UBsGjHOfcZtaKBeYx0VFVTvkmhlriRw",
  authDomain: "gardnerplanner.firebaseapp.com",
  projectId: "gardnerplanner",
  storageBucket: "gardnerplanner.firebasestorage.app",
  messagingSenderId: "718968168762",
  appId: "1:718968168762:web:e2c388c17027e9abe63003",
  measurementId: "G-FYT3305YK9"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();