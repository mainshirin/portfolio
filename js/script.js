// Show sections on scroll
const sections = document.querySelectorAll("section");

function checkSections() {
  const triggerBottom = window.innerHeight * 0.8;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("show");
    }
  });
}

window.addEventListener("scroll", checkSections);
window.addEventListener("load", checkSections);

// Smooth scroll for same-page anchor links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
