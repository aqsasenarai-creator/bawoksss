const button = document.getElementById("toggleMode");
const body = document.body;

button.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    // Ganti teks tombol
    button.textContent = "Switch to Light Mode 🌞";

    // Tambahan opsional: styling inline saat dark mode
    body.style.background = "linear-gradient(135deg, #0f0f0f, #1a1a1a)";
    body.style.color = "white";

    button.style.backgroundColor = "#eee";
    button.style.color = "#333";
  } else {
    // Balik ke mode terang
    button.textContent = "Switch to Dark Mode 🌙";

    body.style.background = "linear-gradient(135deg, #74ABE2, #5563DE)";
    body.style.color = "black";

    button.style.backgroundColor = "#333";
    button.style.color = "white";
  }
});
