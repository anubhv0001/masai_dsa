const names=[];
for (let i=0;i<300;i++){
    names.push("Name"+i);
}
const searchBox = document.getElementById("searchBox");
const resultsList = document.getElementById("results");
const loader = document.getElementById("loader");
const noResults = document.getElementById("noResults");
const backToTop = document.getElementById("backToTop");
const keystrokesSpan = document.getElementById("keystrokes");
const debounceCountSpan = document.getElementById("debounceCount");

let keystrokes=0;
let debounceCount=0;

function searchNames(query){
resultsList.innerHTML="";
const filtered=names.filter((name)=>name.toLowerCase().includes(query.toLowerCase()));
}
if(filtered.length===0) {
    noResults.style.display = "block";
  } else {
    noResults.style.display="none";
    filtered.forEach(name => {
      const li=document.createElement("li");
      li.innerHTML=highlightMatch(name, query);
      resultsList.appendChild(li);
    });

  }
function debounce(func, delay) {
  let timeout;
  return function (...args) {
    loader.style.display = "block";
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      loader.style.display = "none";
      func.apply(this, args);
    }, delay);
  };
}
const debouncedSearch=debounce((value) => {
  debounceCount++;
  debounceCountSpan.textContent = debounceCount;
  searchNames(value);
}, 1000);
function throttle(func, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}
searchBox.addEventListener("input", (e) => {
  keystrokes++;
  keystrokesSpan.textContent = keystrokes;
  const value = e.target.value.trim();
  debouncedSearch(value);
});
window.addEventListener(
  "scroll",
  throttle(() => {
    if (window.scrollY >= 200) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  }, 500)
);
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});