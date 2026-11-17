// Mobile navigation, footer year, and a small interactive welcome action.
const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "×" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Demonstrates DOM selection and an event listener with a friendly interaction.
const exploreButton = document.querySelector(".button-primary");
exploreButton.addEventListener("click", () => {
  exploreButton.innerHTML = "Let's explore Nepal <span>✓</span>";
});
