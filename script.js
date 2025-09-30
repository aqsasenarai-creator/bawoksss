// 🔹 Ambil tombol dan body
const button = document.getElementById("toggleMode");
const body = document.body;

// ==============================
// 🔹 Toggle Dark/Light Mode
// ==============================
button.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  
  if (body.classList.contains("dark-mode")) {
    button.textContent = "Switch to Light Mode 🌞";
  } else {
    button.textContent = "Switch to Dark Mode 🌙";
  }
});

// ==============================
// 🔹 Animasi teks saat scroll
// ==============================
const sections = document.querySelectorAll("section h1");

// Set threshold biar animasi aktif pas 50% elemen masuk viewport
const options = {
  threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("grow");
      entry.target.classList.remove("shrink");
    } else {
      entry.target.classList.add("shrink");
      entry.target.classList.remove("grow");
    }
  });
}, options);

// Pasang observer ke semua <h1> dalam section
sections.forEach(h1 => {
  observer.observe(h1);
});

// ==============================
// 🔹 Smooth Scroll tambahan
// ==============================
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
