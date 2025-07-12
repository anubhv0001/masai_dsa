function login(){
   const email=document.getElementById("email").value;
   const password=document.getElementById("Password").value;
   firebaseConfig.auth().signInWithEmailAndPassword(email,password)
   .then(res=>{
    localStorage.setItem("user",JSON.stringify(res.user));
    window.location.href="tracker.html"
   })
   .catch(err=>alert(err.message));

}
function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res => alert("Signup successful! Please log in."))
    .catch(err => alert(err.message));
}