document.addEventListener("DOMContentLoaded",()=>{
    console.log("Garden layout loaded")

    const main=document.querySelector("main");
    const layoutBox=document.createElement("div");
    layoutBox.className="layout-box";
    layoutBox.innerHTML= "<p>[Garden layout grid will appear here]</p>";
    main.appendChild(layoutBox)
})