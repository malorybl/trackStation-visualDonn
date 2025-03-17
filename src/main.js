import "./style.css";

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

  observer.observe(parallaxText);
});
