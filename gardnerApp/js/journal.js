document.addEventListener("DOMContentLoaded",()=>{
    console.log("Journal loaded")

    const main=document.querySelector("main");
    main.innerHTML=`
  <textarea id="JournalEntry"placeholder="Write your garden notes..."></textarea>
  <button id="saveEntry">Save Entry</button>
  <div id="entries"></div>
  `;

  const entriesDiv=document.getElementById("entries");

document.getElementById("saveEntry").addEventListener("click",()=>{
    const text=document.getElementById("journalEntry").value.trim();
    if(!text)return alert("Please write everything!");

const entry=document.createElement("p");
entry.textContent=text;
entriesDiv.appendChild(entry);
document.getElementById("journalEntry").value="";
})

})