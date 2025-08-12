// detail.js
const API_BASE = 'https://rickandmortyapi.com/api';
const CHAR_ENDPOINT = `${API_BASE}/character`;

const q = new URLSearchParams(location.search);
const id = q.get('id');

const charName = document.getElementById('charName');
const charImage = document.getElementById('charImage');
const charStatus = document.getElementById('charStatus');
const charSpecies = document.getElementById('charSpecies');
const charType = document.getElementById('charType');
const charGender = document.getElementById('charGender');
const charOrigin = document.getElementById('charOrigin');
const charLocation = document.getElementById('charLocation');
const charEpisodes = document.getElementById('charEpisodes');

const themeToggle = document.getElementById('themeToggleDetail');

async function init(){
  restoreTheme();
  themeToggle.addEventListener('click', toggleTheme);
  startClock('clockDetail');

  if (!id){
    charName.textContent = 'No character ID provided';
    return;
  }

  try{
    const res = await fetch(`${CHAR_ENDPOINT}/${id}`);
    if (!res.ok) throw new Error('Character not found');
    const c = await res.json();
    showCharacter(c);
  }catch(err){
    charName.textContent = 'Error loading character';
    console.error(err);
  }
}