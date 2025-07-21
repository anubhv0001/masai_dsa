import { auth, db } from "./firebase.js";
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const recipeContainer=document.getElementById("recipes")

onAuthStateChanged(auth, async (user) => {
if (!user) {
window.location.href = "index.html"; 
} else {
try {
const q = query(collection(db, "recipes"), where("userId", "==", user.uid));
const querySnapshot = await getDocs(q);
  recipeContainer.innerHTML = "";
  querySnapshot.forEach((doc) => {
    const recipe = doc.data();
    const card = document.createElement("div");
    card.classList.add("recipe-card");
    card.innerHTML = `
      <h3>${recipe.title}</h3>
      <p>${recipe.description}</p>
      <button onclick="viewRecipe('${doc.id}')">View</button>
    `;
    recipeContainer.appendChild(card);
  });
  if (querySnapshot.empty) {
    recipeContainer.innerHTML = "<p>No recipes found. Create one!</p>";
  }

} catch (error) {
  console.error("Error fetching recipes:", error);
  recipeContainer.innerHTML = "<p>Error loading recipes.</p>";
}
}
});