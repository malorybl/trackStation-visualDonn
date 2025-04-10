import "./style.css";
import './map.js';
import './game.js';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});

gsap.registerPlugin(ScrollTrigger);

// Titre TRACK STATION : apparition + scale au scroll
gsap.fromTo(".title", 
  {
    opacity: 0,
    y: 100,
    scale: 5,
  }, 
  {
    scrollTrigger: {
      trigger: ".container-whatIsRap",
      start: "top 20%",
      end: "top 50%",
      scrub: true,
    },
    opacity: 1,
    y: 0,
    scale: 1,
    ease: "power2.out",
  }
);

// What is rap? avec le cercle
gsap.from(".title-whatIsRap", {
  scrollTrigger: {
    trigger: ".title-whatIsRap",
    start: "top 80%",
    end: "top 50%",
    scrub: true,
  },
  opacity: 0,
  x: -100,
  ease: "power2.out",
});

// Images
gsap.from(".images-whatIsRap img", {
  scrollTrigger: {
    trigger: ".images-whatIsRap",
    start: "top bottom",
    end: "top center",
    scrub: true,
  },
  opacity: 0,
  y: 100,
  stagger: 0.2,
  ease: "power2.out",
});
