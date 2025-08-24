document.addEventListener("DOMContentLoaded",()=>{
    console.log("Weather page loaded");

    const main=document.querySelector("main");
    main.innerHTML+=`<div id="weatherBox><p>Loading weather..</p></div>`;
    setTimeout(()=>{
        document.getElementById("weatherBox").innerHTML=`
        <h3>Today's Weather</h3>
        <p>🌤 Sunny, 28°C</p>
        `;
    },1000)
})