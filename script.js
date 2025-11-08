/* -------------------- MENU TOGGLE -------------------- */
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

/* -------------------- DARK MODE -------------------- */
const darkModeBtn = document.getElementById("darkModeBtn");

if (darkModeBtn) {
  // Load previous mode if stored
  const currentMode = localStorage.getItem("theme");
  if (currentMode === "dark") {
    document.body.classList.add("dark-mode");
    darkModeBtn.textContent = "☀️";
  }

  darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    darkModeBtn.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

/* -------------------- SEARCH FUNCTION -------------------- */
function searchCourses() {
  const query = (document.getElementById("searchInput")?.value || "")
    .toLowerCase()
    .trim();
  const cards = document.querySelectorAll(".course-card");

  cards.forEach((card) => {
    const title = card.querySelector("h3").innerText.toLowerCase();
    const desc = card.querySelector("p").innerText.toLowerCase();
    card.style.display =
      title.includes(query) || desc.includes(query) ? "block" : "none";
  });
}

/* -------------------- FILTER FUNCTION -------------------- */
function filterCourses() {
  const selected = document.getElementById("categoryFilter").value;
  const cards = document.querySelectorAll(".course-card");

  cards.forEach((card) => {
    const category = card.dataset.category;
    card.style.display =
      selected === "all" || category === selected ? "block" : "none";
  });
}

/* -------------------- CONTACT FORM (Demo Only) -------------------- */
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent (demo).");
    contactForm.reset();
  });
}

/* -------------------- SCROLL REVEAL ANIMATION -------------------- */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll("section, .course-card").forEach((el) => {
  observer.observe(el);
});

/* -------------------- PAGE LOAD EFFECT -------------------- */
window.addEventListener("load", () => {
  document.body.classList.add("page-loaded");
});
