import "./style.css";
import './map.js';
import './game.js';

// Forcer le scroll en haut de la page au chargement
window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});

document.addEventListener("DOMContentLoaded", () => {
  const parallaxText = document.querySelector(".parallax-whatIsRap");
  const container = document.querySelector(".container-whatIsRap");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.body.classList.add("scrolled");
        } else {
          document.body.classList.remove("scrolled");
        }
      });
    },
    { threshold: 0.3 } // Active la transition quand 30% du texte est visible
  );

  if (parallaxText) {
    observer.observe(parallaxText);
  }
});
