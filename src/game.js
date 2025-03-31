const rappers = [
    { name: "kendrick lamar", image: "./public/img/game/kendrick.webp" },
    { name: "21 savage", image: "./public/img/game/21-savage.webp" },
    { name: "asap rocky", image: "./public/img/game/asap-rocky.jpg" },
    { name: "cardi b", image: "./public/img/game/cardib.jpg" },
    { name: "doja cat", image: "./public/img/game/doja-cat.jpg" },
    { name: "don toliver", image: "./public/img/game/dontoliver.webp" },  
    { name: "drake", image: "./public/img/game/drake.jpg" },
    { name: "eminem", image: "./public/img/game/eminem.jpg" },
    { name: "ice cube", image: "./public/img/game/ice-cube.webp" },
    { name: "ice spice", image: "./public/img/game/ice-spice.webp" },
    { name: "j cole", image: "./public/img/game/jcole.jpg" },
    { name: "kanye west", image: "./public/img/game/kanye-west.jpg" },
    { name: "kid cudi", image: "./public/img/game/kid-cudi.webp" },
    { name: "lil wayne", image: "./public/img/game/lil-wayne.jpg" },
    { name: "nas", image: "./public/img/game/nas.webp" },
    { name: "nicki minaj", image: "./public/img/game/nicki-minaj.jpg" },
    { name: "offset", image: "./public/img/game/offset.jpg" },
    { name: "playboi carti", image: "./public/img/game/playboi-carti.webp" },
    { name: "snoop dogg", image: "./public/img/game/snoopdogg.webp" },
    { name: "travis scott", image: "./public/img/game/travis-scott.webp" },
    // Ajoute tes autres rappeurs ici
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
  
  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
  function startGame() {
    shuffledRappers = shuffle([...rappers]);
    currentIndex = 0;
    score = 0;
    timeLeft = 60;
    scoreDisplay.textContent = score;
    message.textContent = "";
    playAgainBtn.classList.add("hidden");
    input.disabled = false;
    input.value = "";
    input.focus();
  
    showRapper();
    timer = setInterval(() => {
      timeLeft--;
      if (timeLeft <= 0) {
        endGame();
      }
    }, 1000);
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
  
    if (score >= 15) {
      message.textContent = "You're a GOAT!";
    } else if (score >= 10) {
      message.textContent = "Not bad! But in the words of Kendrick: ‘Be humble… and hit the books!’";
    } else {
      message.textContent = "Keep practicing!";
    }
  }
  
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
    skipBtn.disabled = false;
    startGame();
  });
  
  startGame();
  