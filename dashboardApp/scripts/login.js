document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.database().ref("users").once("value", (snapshot) => {
    const users = snapshot.val();
    let isValid = false;

    for (let userId in users) {
      if (users[userId].email === email && users[userId].password === password) {
        isValid = true;
        localStorage.setItem("loggedIn", "true");
        break;
      }
    }
    if (isValid) {
      window.location.href = "dashboard.html";
    } else {
      alert("Wrong credentials! Try again.");
    }
  });
});
