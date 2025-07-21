import { auth } from './firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const signup=async()=>{
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value
    try{
        await createUserWithEmailAndPassword(auth,email,password);
        alert("Signup successfull");
        window.location.href="dashboard.html";
    }
    catch(err){
        alert(err.message)
    }
}
const login=async()=>{
  const email=document.getElementById("email").value;
  const password=document.getElementById("password").value;
  try {
    await signInWithEmailAndPassword(auth,email,password);
    alert("Login successful");
    window.location.href="dashboard.html";
  } catch(err){
    alert(err.message);
  }
};

window.signup=signup;
window.login=login;