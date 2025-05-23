import "./style.css";
import './map.js';
import './game.js';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});

gsap.registerPlugin(ScrollTrigger);

// — Title zoom-out on scroll —
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

// — What is Rap images slide-in —
gsap.fromTo(".images-whatIsRap",
  { opacity: 1, x: "50vw" },
  {
    scrollTrigger: {
      trigger: ".images-whatIsRap",
      scrub: true,
    },
    opacity: 1,
    ease: "power1.inOut",
    x: "0vw",
    y: "30vh"
  }
);

// — What is Rap subtitle slide-in —
gsap.fromTo(".title-whatIsRap",
  { opacity: 1, x: "-100vw" },
  {
    scrollTrigger: {
      trigger: ".title-whatIsRap",
      scrub: true,
    },
    opacity: 1,
    ease: "power1.inOut",
    x: "20vw",
    y: "30vh"
  }
);

// — Parallax section appear from bottom —
gsap.fromTo(".parallax-whatIsRap",
  { opacity: 0, y: "100vh" },
  {
    scrollTrigger: {
      trigger: ".parallax-whatIsRap",
      start: "top bottom",
      end: "top 30%",
      scrub: 3,
    },
    opacity: 1,
    ease: "power1.inOut",
    y: "0vh"
  }
);

// — Over time title slide-in —
gsap.fromTo(".title-overTime-container",
  { opacity: 0, y: "10vh" },
  {
    scrollTrigger: {
      trigger: ".title-overTime-container",
      start: "top 95%",
      end: "top 30%",
      scrub: 2,
    },
    opacity: 1,
    ease: "power1.inOut",
    y: "0vh"
  }
);

// — Section 90s fade & slide —
gsap.fromTo(".section-90s",
  { opacity: 0, y: "50vh" },
  {
    scrollTrigger: {
      trigger: ".section-90s",
      start: "top 90%",
      end: "top 50%",
      scrub: 3,
    },
    opacity: 1,
    ease: "power1.inOut",
    y: "0vh"
  }
);

// — Section 00s fade & slide —
gsap.fromTo(".section-00s",
  { opacity: 0, y: "50vh" },
  {
    scrollTrigger: {
      trigger: ".section-00s",
      start: "top 100%",
      end: "top 50%",
      scrub: 3,
    },
    opacity: 1,
    ease: "power1.inOut",
    y: "0vh"
  }
);

// — Section 10s fade & slide —
gsap.fromTo(".section-10s",
  { opacity: 0, y: "50vh" },
  {
    scrollTrigger: {
      trigger: ".section-10s",
      start: "top 100%",
      end: "top 50%",
      scrub: 3,
    },
    opacity: 1,
    ease: "power1.inOut",
    y: "0vh"
  }
);

// — Kendrick lyrics zoom-in —
gsap.fromTo(".kendrick-lyrics-container",
  { scale: 0.5 },
  {
    scrollTrigger: {
      trigger: ".kendrick-lyrics-container",
      start: "top 20%",
      end: "+=700",
      scrub: true,
      pin: true
    },
    scale: 1,
    ease: "power1.inOut"
  }
);

// — Section Today fade & slide —
gsap.fromTo(".section-today",
  { opacity: 0, y: "50vh" },
  {
    scrollTrigger: {
      trigger: ".section-today",
      start: "top 100%",
      end: "top 50%",
      scrub: 3,
    },
    opacity: 1,
    ease: "power1.inOut",
    y: "0vh"
  }
);

// — Global Influence fade & slide —
gsap.fromTo(".section-global-influence",
  { opacity: 0, y: "50vh" },
  {
    scrollTrigger: {
      trigger: ".section-global-influence",
      start: "top 100%",
      end: "top 50%",
      scrub: 3,
    },
    opacity: 1,
    ease: "power1.inOut",
    y: "0vh"
  }
);

// — Origin Map fade & slide —
gsap.fromTo(".section-origin-map",
  { opacity: 0, y: "50vh" },
  {
    scrollTrigger: {
      trigger: ".section-origin-map",
      start: "top 100%",
      end: "top 50%",
      scrub: 3,
    },
    opacity: 1,
    ease: "power1.inOut",
    y: "0vh"
  }
);

// — Billboard’s most influent rappers —
// 1) Section slide up
gsap.fromTo(".section-billboard",
  { opacity: 0, y: "50vh" },
  {
    opacity: 1,
    y: "0vh",
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: ".section-billboard",
      start: "top 90%",
      end: "top 60%",
      scrub: 2,
    }
  }
);

// 2) Faces slide from left
gsap.fromTo(".billboard-faces",
  { x: "-150vw" },
  {
    x: "3vw",
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: ".section-billboard",
      start: "top 30%",
      end: "top 50%",
      scrub: 3,
    }
  }
);

// — Monthly listeners on Spotify —
// 3) Section slide from right
gsap.fromTo(".section-billboard-streaming",
  { opacity: 0, x: "100vw" },
  {
    opacity: 1,
    x: "0vw",
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: ".section-billboard-streaming",
      start: "top 90%",
      end: "top 60%",
      scrub: 2,
    }
  }
);

// 4) Bars slide up
gsap.fromTo(".faces-streaming",
  { y: "100vh" },
  {
    y: "0vh",
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: ".section-billboard-streaming",
      start: "top 80%",
      end: "top 50%",
      scrub: 2,
    }
  }
);

// — Portrait sections: faux horizontal scroll —
document.querySelectorAll(".male-faces").forEach(section => {
  const content = section.querySelector(".portrait-rapper-content");

   gsap.fromTo(content, {
    xPercent: 100, // Déplacement initial
  }, {
    xPercent: -100, // Déplacement final
    ease: "none",
    scrollTrigger: {
      trigger: section,
      pin: true,
      scrub: 1,
      end: () => "+=" + content.offsetWidth // Fin de l'animation basée sur la largeur du contenu
    }
  });
});

gsap.fromTo(".section-billboard-streaming",
  { opacity: 0, x: "100vw" },
  {
    opacity: 1,
    x: "0vw",
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: ".section-billboard-streaming",
      start: "top 90%",
      end: "top 60%",
      scrub: 2,
    }
  }
);


gsap.fromTo(
  ".section-quote-kendrick",
  { scale: 1 }, // départ à 100%
  {
    scale: 0.5,  // arrivée à 50%
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: ".section-quote-kendrick",
      start: "top 5%",
      end: "+=700",
      scrub: true,
      pin: true
    }
  }
);



gsap.fromTo(".women-rap-artist-content",
  { opacity: 0, y: "50vh" },
  {
    scrollTrigger: {
      trigger: ".women-rap-artist-content",
      start: "top 100%",
      end: "top 50%",
      scrub: 3,
    },
    opacity: 1,
    ease: "power1.inOut",
    y: "0vh"
  }
);


gsap.fromTo(".billboard-explication",
  { opacity: 0, y: "30vh" },
  {
    scrollTrigger: {
      trigger: ".billboard-explication",
      start: "top 25%",
      end: "top 50%",
      scrub: 2,
    },
    opacity: 1,
    ease: "power1.inOut",
    y: "0vh"
  }
);


gsap.fromTo(".section-compare",
  { opacity: 0, x: "100vw" },
  {
    opacity: 1,
    x: "0vw",
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: ".section-compare",
      start: "top 40%",
      end: "top 60%",
      scrub: 2,
    }
  }
);



// boom instantané de la section VS Battle
gsap.fromTo(".section-vs-battle",
  { opacity: 0, scale: 0.8 },
  {
    opacity: 1,
    scale: 1,
    ease: "back.out(1.5)",
    scrollTrigger: {
      trigger: ".section-vs-battle",
      start: "top 35%",       // quand le top de la section atteint 75% du viewport
      toggleActions: "play reverse play reverse", // joue a chaque scroll dessus, sans scrub
      markers: false
    }
  }
);


gsap.fromTo(".section-vs-context",
  { opacity: 0, y: "30vh" },
  {
    scrollTrigger: {
      trigger: ".section-vs-context",
      start: "top 25%",
      end: "top 50%",
      scrub: 2,
    },
    opacity: 1,
    ease: "power1.inOut",
    y: "0vh"
  }
);


gsap.fromTo(
  ".not-like-us-content",
  { x: "100%" },                // point de départ (hors écran à droite)
  {
    x: "0%",                    // arrive à sa position normale
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: ".section-not-like-us",
      start: "top bottom",      // quand le haut de la section atteint le bas du viewport
      end:   "top top",         // jusqu'à ce que ce même haut atteigne le haut du viewport
      scrub: true
    }
  }
);



gsap.fromTo(".grammys-content",
  { y: "100%" },          // part en bas
  {
    y: "0%",              // arrive à sa position normale
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".section-grammys",
      start: "top bottom",  // synchronisé avec l'entrée de la section
      end:   "top top",     // jusqu'à ce qu'elle soit entièrement en vue
      scrub: true,
    }
  }
);



gsap.fromTo(".section-kanye",
  { opacity: 0, y: "30vh" },
  {
    scrollTrigger: {
      trigger: ".section-kanye",
      start: "top 25%",
      end: "top 50%",
      scrub: 2,
    },
    opacity: 1,
    ease: "power1.inOut",
    y: "0vh"
  }
);


gsap.fromTo(
  ".section-kanye-poster",
  { x: "-100%" },                // point de départ (hors écran à droite)
  {
    x: "0%",                    // arrive à sa position normale
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: ".section-kanye-poster",
      start: "top bottom",      // quand le haut de la section atteint le bas du viewport
      end:   "top top",         // jusqu'à ce que ce même haut atteigne le haut du viewport
      scrub: true
    }
  }
);


gsap.fromTo(".section-kanye-quote",
  { scale: 0.5 },
  {
    scrollTrigger: {
      trigger: ".section-kanye-quote",
      start: "top 20%",
      end: "+=700",
      scrub: true,
      pin: true
    },
    scale: 1.5,
    ease: "power1.inOut"
  }
);