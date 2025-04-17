import "./style.css";
import './map.js';
import './game.js';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


gsap.to(".title", {
  scrollTrigger: {
    trigger: ".title",
    start: "top top",
    end: "+=700",
    scrub: true,
    pin: true
  },
  scale: 0.5,
  ease: "power1.inOut",
  
});




gsap.fromTo(".images-whatIsRap"
  , 
  {
    opacity: 1,
    x: "50vw"
  },
  {
    scrollTrigger: {
      trigger: ".images-whatIsRap",
      scrub: true,
      // pin: true
    },
    opacity: 1,
    ease: "power1.inOut",
    x: "0vw",
    y: "30vh"
  }
  );




gsap.fromTo(".title-whatIsRap"
  , 
  {
    opacity: 1,
    x: "-100vw"
  },
  {
    scrollTrigger: {
      trigger: ".title-whatIsRap",
      scrub: true,
    },
    scale: 1,
    opacity: 1,
    ease: "power1.inOut",
    x: "20vw",
     y: "30vh"
  }
  );

