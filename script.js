const button = document.getElementById("toggleMode");
const body = document.body;

// 🔹 Toggle Dark/Light Mode
button.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  
  if (body.classList.contains("dark-mode")) {
    button.textContent = "Switch to Light Mode 🌞";
  } else {
    button.textContent = "Switch to Dark Mode 🌙";
  }
});

// 🔹 Smooth Scroll animasi tambahan
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});
