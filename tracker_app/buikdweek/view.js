import { db } from "./firebase.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const urlParams = new URLSearchParams(window.location.search);
const recipeId = urlParams.get("id");

const loadRecipe = async () => {
  const docRef = doc(db, "recipes", recipeId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const recipe = docSnap.data();
    document.getElementById("viewTitle").innerText = recipe.title;
    document.getElementById("viewDesc").innerText = recipe.description;
  } else {
    alert("Recipe not found");
  }
};

loadRecipe();
