// Redirect if not logged in
if (localStorage.getItem("loggedIn") !== "true") {
  window.location.href = "login.html";
}
fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById("productContainer");
    products.forEach(p => {
      const card = document.createElement("div");
      card.innerHTML = `
        <img src="${p.image}" width="100" />
        <h3>${p.title}</h3>
        <p>Price: $${p.price}</p>
        <hr />
      `;
      container.appendChild(card);
    });
  });
