import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, orderBy, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmXwhzbYTXBZAnnnjCqX7PnR3Z6QuYTPc",
  authDomain: "novellistui.firebaseapp.com",
  projectId: "novellistui",
  storageBucket: "novellistui.appspot.com",
  messagingSenderId: "338441209427",
  appId: "1:338441209427:web:6e9dc7c01c81d3af2128a6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const novelList = document.getElementById("novel-list");
const searchInput = document.getElementById("search");
const yearFilter = document.getElementById("year");
const sortSelect = document.getElementById("sort");

async function fetchNovels() {
  let q = collection(db, "novels");
  let conditions = [];

  const year = yearFilter.value;
  if (year) {
    conditions.push(where("releaseYear", "==", parseInt(year)));
  }

  const sortOrder = sortSelect.value;
  if (sortOrder) {
    conditions.push(orderBy("price", sortOrder === "asc" ? "asc" : "desc"));
  }

  try {
    let finalQuery = query(q, ...conditions);
    const snapshot = await getDocs(finalQuery);
    let novels = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    const search = searchInput.value.toLowerCase();
    if (search) {
      novels = novels.filter(novel =>
        novel.title.toLowerCase().includes(search) ||
        novel.author.toLowerCase().includes(search)
      );
    }

    renderNovels(novels);
  } catch (err) {
    console.error("Error fetching novels:", err);
  }
}

function renderNovels(novels) {
  novelList.innerHTML = "";
  if (novels.length === 0) {
    novelList.innerHTML = "<p>No novels found.</p>";
    return;
  }

  novels.forEach(novel => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${novel.title}</h3>
      <p><strong>Author:</strong> ${novel.author}</p>
      <p><strong>Genre:</strong> ${novel.genre}</p>
      <p><strong>Year:</strong> ${novel.releaseYear}</p>
      <p><strong>Price:</strong> ₹${novel.price}</p>
    `;
    novelList.appendChild(div);
  });
}

searchInput.addEventListener("input", fetchNovels);
yearFilter.addEventListener("change", fetchNovels);
sortSelect.addEventListener("change", fetchNovels);

fetchNovels();
