import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";


function register(){
    const name=document.getElementById("regName").value;
    const email=document.getElementById("regEmail").value;
    const password=document.getElementById("regPassword").value;

    auth.createUserWithEmailAndPassword(email,password)
    .then(userCredential=>{
        alert("Registration successfull!")
        localStorage.setItem("user",JSON.stringify({name,email}));
        window.location.href="pages/dashboard.html"
    })
    .catch(error=>{
        alert(error.message);
    })
}
function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      alert("Login successful!");
      localStorage.setItem("user", JSON.stringify({ email }));
      window.location.href = "pages/dashboard.html";
    })
    .catch(error => {
      alert(error.message);
    });
}
