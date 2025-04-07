import "./style.css";
import './map.js';
import './game.js';

// Scroll vers le haut au chargement
window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});

document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".title");
  const titleWhatIsRap = document.querySelector(".title-whatIsRap");
  const bottomContent = document.querySelector(".bottom-content");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // Une fois visible, on peut arrêter de l'observer pour améliorer les perfs
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.3, // L’élément doit être à 30% visible pour déclencher l’apparition
    }
  );

  // Observation des différents blocs
  if (title) observer.observe(title);
  if (titleWhatIsRap) observer.observe(titleWhatIsRap);
  if (bottomContent) observer.observe(bottomContent);
});