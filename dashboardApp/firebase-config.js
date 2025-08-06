const firebaseConfig = {
  apiKey: "AIzaSyCP71r8NJJBNN8-RbZ_v4lILjmklESgSdU",
  authDomain: "dashboardapp-2fdc4.firebaseapp.com",
  databaseURL: "https://dashboardapp-2fdc4-default-rtdb.firebaseio.com",
  projectId: "dashboardapp-2fdc4",
  storageBucket: "dashboardapp-2fdc4.firebasestorage.app",
  messagingSenderId: "429230832002",
  appId: "1:429230832002:web:e599382a8c580a0174b79b",
  measurementId: "G-0X97JYZN8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);