document.addEventListener("DOMContentLoaded",()=>{
    console.log("Plant library loaded");
    
    const plants=[
        {name:"Rose",type:"FLower"},
         {name:"Tomato",type:"Vegetable"},
    ]


const main=document.querySelector("main");

main.innerHTML+=`
<textarea id="journalEntry"placeholder="Write your garden notes..."><textarea/>
<button id="saveEntry">Save Entry</button>
<div id="entries"></div>`;

const entriesDiv=document.getElementById("entries");

document.getElementById("saveEntry").addEventListener("click",()=>{
    const text=document.getElementById("journalEntry").value.trim();
    if(!text)return alert("Please write something");

    const entry=document.createElement("p");
    entry.textContent=text;
    entriesDiv.appendChild(entry);

    document.getElementById("journalEntry").value="";
});
})