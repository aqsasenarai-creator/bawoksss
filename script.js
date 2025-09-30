const button = document.getElementById("toggleMode");
const body = document.body;

button.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  
  if (body.classList.contains("dark-mode")) {
    button.textContent = "Switch to Light Mode 🌞";
  } else {
    button.textContent = "Switch to Dark Mode 🌙";
  }
});
