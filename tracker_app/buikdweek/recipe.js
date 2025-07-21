import { auth, db } from "./firebase.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  if (!user) window.location.href = "index.html";
});

document.getElementById("recipeForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;

  try{
    await addDoc(collection(db, "recipes"), {
      title,
      description,
      userId: auth.currentUser.uid,
      createdAt: serverTimestamp(),
    });
    alert("Recipe Created!");
    window.location.href = "dashboard.html";
  } catch (err) {
    alert(err.message);
  }
});
