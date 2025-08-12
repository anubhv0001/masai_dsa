// scripts.js
const API_BASE = 'https://rickandmortyapi.com/api';
const CHAR_ENDPOINT = `${API_BASE}/character`;

const gallery = document.getElementById('gallery');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageInfo = document.getElementById('pageInfo');
const themeToggle = document.getElementById('themeToggle');
const randomBtn = document.getElementById('randomBtn');

let appPage = 1; // our app pages (6 chars per page)
let totalAppPages = 1;
let totalCharacters = 0;

async function init(){
  await loadMeta();
  renderPage(appPage);
  attachListeners();
  startClock('clock');
  restoreTheme();
}

async function loadMeta(){
  const res = await fetch(CHAR_ENDPOINT);
  const data = await res.json();
  totalCharacters = data.info.count;
  totalAppPages = Math.ceil(totalCharacters / 6);
}

function attachListeners(){
  prevBtn.addEventListener('click', ()=>{ if (appPage>1){ appPage--; renderPage(appPage);} });
  nextBtn.addEventListener('click', ()=>{ if (appPage<totalAppPages){ appPage++; renderPage(appPage);} });
  themeToggle.addEventListener('click', toggleTheme);
  randomBtn.addEventListener('click', openRandomCharacter);
}

async function renderPage(p){
  pageInfo.textContent = `Page ${p} / ${totalAppPages}`;
  gallery.innerHTML = '<p style="grid-column:1/-1;text-align:center">Loading...</p>';

  const chars = await getCharactersForAppPage(p);

  gallery.innerHTML = '';
  chars.forEach(c => {
    const a = document.createElement('a');
    a.href = `character.html?id=${c.id}`;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.className = 'card';

    a.innerHTML = `
      <img loading="lazy" src="${c.image}" alt="${escapeHtml(c.name)}">
      <div class="info">
        <h3>${escapeHtml(c.name)}</h3>
        <p>${escapeHtml(c.species)} — <small>${escapeHtml(c.status)}</small></p>
      </div>
    `;

    gallery.appendChild(a);
  });

  prevBtn.disabled = appPage === 1;
  nextBtn.disabled = appPage === totalAppPages;
}

// Calculate which API page(s) needed and return exactly 6 character objects for the app page.
async function getCharactersForAppPage(page){
  const perApp = 6;
  const startIndex = (page - 1) * perApp; // zero-based global index

  // API returns 20 per page
  const apiPer = 20;
  const apiPage1 = Math.floor(startIndex / apiPer) + 1;
  const indexInApi1 = startIndex % apiPer;

  // if slice crosses API page boundary, fetch two pages
  const needTwo = indexInApi1 + perApp > apiPer;

  const promises = [fetch(`${CHAR_ENDPOINT}?page=${apiPage1}`).then(r=>r.json())];
  if (needTwo) promises.push(fetch(`${CHAR_ENDPOINT}?page=${apiPage1+1}`).then(r=>r.json()));

  const results = await Promise.all(promises);
  const list = results.map(r => r.results).flat();

  return list.slice(indexInApi1, indexInApi1 + perApp);
}

function escapeHtml(s){ return s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;'); }

// Theme
function toggleTheme(){
  const cur = document.documentElement.getAttribute('data-theme');
  const next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('rm-theme', next);
}
function restoreTheme(){
  const t = localStorage.getItem('rm-theme') || 'light';
  document.documentElement.setAttribute('data-theme', t === 'dark' ? 'dark' : 'light');
}

// Random character
async function openRandomCharacter(){
  if (!totalCharacters) return;
  const id = Math.floor(Math.random() * totalCharacters) + 1;
  window.open(`character.html?id=${id}`, '_blank');
}

// Clock
function startClock(elemId){
  const el = document.getElementById(elemId);
  function tick(){
    const now = new Date();
    const formatted = formatClock(now);
    el.textContent = formatted;
  }
  tick();
  setInterval(tick, 1000);
}

function formatClock(d){
  const pad = (n)=>String(n).padStart(2,'0');
  const hh = pad(d.getHours());
  const mm = pad(d.getMinutes());
  const ss = pad(d.getSeconds());

  const weekday = d.toLocaleDateString(undefined,{weekday:'long'});
  const month = d.toLocaleDateString(undefined,{month:'long'});
  const day = d.getDate();
  const year = d.getFullYear();

  return `${hh}:${mm}:${ss} ${weekday} ${month} ${day}, ${year}`;
}

// Initialize
init();