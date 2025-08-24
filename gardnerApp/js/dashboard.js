document.addEventListener("DOMContentLoaded",()=>{
  console.log("Dashboard loaded");
  const user=JSON.parse(localStorage.getItem("user"));
  if(user){
    document.body.insertAdjacentHTML(
      "beforeend",
      `<p style="text-align:centre;"Welcome,${user.name||"Gardener"}!</p>`
    )
  }
})
