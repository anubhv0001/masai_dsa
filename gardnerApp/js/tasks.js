document.addEventListener("DOMContentLoaded",()=>{
    console.log("Tasks loaded");

    const main=document.querySelector("main");

    main.innerHTML+=`
    <input type="text"id="taskInput"placeholder="Add a new task...">
    <button id="addTask"></button>
    <ul id="taskList"></ul>

    `;

const taskList=document.getElementById("taskList");

document.getElementById("addTask").addEventListener("click",()=>{
    const task=document.getElementById("taskInput").value.trim();
    if (!task)return alert("Enter a task!");
    const li=document.createElement("li");
    li.textContent=task;
    taskList.appendChild(li);

    document.getElementById("taskInput").value="";
});
});