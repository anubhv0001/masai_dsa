document.addEventListener("DOMContentLoaded",()=>{
    console.log("Community page loaded");
    const main=document.querySelector("main");
    main.innerHTML+=`
    <input type="text"id="messageInput"placeholder="Share your gardening tip..."
    <button id="postMessage">Post</button>
    <div id="communityFeed"></div>
    `;

const feed=document.getElementById("communityFeed");
document.getElementById("postMessage").addEventListener("click",()=>{
    const msg=document.getElementById("messageInput").value.trim();
    if(!msg) return alert("Write something!")

        const post=document.createElement("p");
        post.textContent =+msg;
        feed.prepend(post)
        document.getElementById("messageInpput").value="";//reset krne ke liye input box
})

})


