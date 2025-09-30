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

// 🔹 Animasi teks saat scroll
const sections = document.querySelectorAll("section h1");

const options = {
  threshold: 0.5 // aktif kalau minimal 50% elemen kelihatan
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

sections.forEach(h1 => {
  observer.observe(h1);
});

// 🔹 Smooth Scroll animasi tambahan
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
