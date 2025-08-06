document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const userId = Date.now();
firebase.database().ref("users/" + userId).set({
    name,
    email,
    password
  })
  .then(() => {
    alert("Registration Successful! Please log in.");
    window.location.href = "login.html";
  })
  .catch((error) => {
    alert("Error: " + error.message);
  });
});
