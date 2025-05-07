const rappers = [
  { name: "kendrick lamar", image: "./img/game/kendrick.webp" },
  { name: "21 savage", image: "./img/game/21-savage.webp" },
  { name: "asap rocky", image: "./img/game/asap-rocky.jpg" },
  { name: "cardi b", image: "./img/game/cardib.jpg" },
  { name: "doja cat", image: "./img/game/doja-cat.jpg" },
  { name: "don toliver", image: "./img/game/dontoliver.webp" },
  { name: "drake", image: "./img/game/drake.jpg" },
  { name: "eminem", image: "./img/game/eminem.jpg" },
  { name: "ice cube", image: "./img/game/ice-cube.webp" },
  { name: "ice spice", image: "./img/game/ice-spice.webp" },
  { name: "j cole", image: "./img/game/jcole.jpg" },
  { name: "kanye west", image: "./img/game/kanye-west.jpg" },
  { name: "kid cudi", image: "./img/game/kid-cudi.webp" },
  { name: "lil wayne", image: "./img/game/lil-wayne.jpg" },
  { name: "nas", image: "./img/game/nas.webp" },
  { name: "nicki minaj", image: "./img/game/nicki-minaj.jpg" },
  { name: "offset", image: "./img/game/offset.jpg" },
  { name: "playboi carti", image: "./img/game/playboi-carti.webp" },
  { name: "snoop dogg", image: "./img/game/snoopdogg.webp" },
  { name: "travis scott", image: "./img/game/travis-scott.webp" },
];

let shuffledRappers = [];
let currentIndex = 0;
let score = 0;
let timer;
let timeLeft = 60;

const imageElement = document.getElementById("rapper-image");
const input = document.getElementById("answer-input");
const scoreDisplay = document.getElementById("score");
const message = document.getElementById("final-message");
const playAgainBtn = document.getElementById("play-again");
const skipBtn = document.getElementById("skip-btn");
const timerDisplay = document.getElementById("timer");

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function showRapper() {
  if (currentIndex >= shuffledRappers.length) {
    endGame();
    return;
  }
  const current = shuffledRappers[currentIndex];
  imageElement.src = current.image;
  input.value = "";
}

function checkAnswer() {
  const userAnswer = input.value.toLowerCase().trim();
  const correct = shuffledRappers[currentIndex].name;
  if (userAnswer === correct) {
    score++;
    scoreDisplay.textContent = score;
    currentIndex++;
    showRapper();
  }
}

function endGame() {
  clearInterval(timer);
  input.disabled = true;
  skipBtn.disabled = true;
  playAgainBtn.classList.remove("hidden");
  playAgainBtn.textContent = "Play again";

  if (score >= 15) {
    message.textContent = "You're a GOAT!";
  } else if (score >= 10) {
    message.textContent = "Not bad! But in the words of Kendrick: ‘Be humble… and hit the books!’";
  } else {
    message.textContent = "Keep practicing!";
  }
}

function startGame() {
  shuffledRappers = shuffle([...rappers]);
  currentIndex = 0;
  score = 0;
  timeLeft = 60;

  scoreDisplay.textContent = score;
  message.textContent = "";
  input.value = "";
  input.disabled = false;
  input.focus();
  skipBtn.disabled = false;
  playAgainBtn.classList.add("hidden");
  timerDisplay.textContent = `${timeLeft}s`;

  showRapper();

  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `${timeLeft}s`;

    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

// EVENTS
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkAnswer();
  }
});

skipBtn.addEventListener("click", () => {
  currentIndex++;
  showRapper();
});

playAgainBtn.addEventListener("click", () => {
  startGame();
});

// Préaffichage d'une image avant de jouer
window.addEventListener("DOMContentLoaded", () => {
  const random = Math.floor(Math.random() * rappers.length);
  imageElement.src = rappers[random].image;

  input.disabled = true;
  skipBtn.disabled = true;
  scoreDisplay.textContent = "0";
  message.textContent = "";
  timerDisplay.textContent = "60s";

  playAgainBtn.textContent = "Play";
  playAgainBtn.classList.remove("hidden");
});
