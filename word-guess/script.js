const sentencesWithHints = [
    { sentence: "BAGAI AUR DENGAN TEBING", hint: "PERIBAHASA" },
    { sentence: "PULAU MANUKAN", hint: "NAMA TEMPAT" },
    { sentence: "PUTERI DUA SEBILIK", hint: "PENCUCI MULUT" },
    { sentence: "DI MANA ADA KEMAHUAN DI SITU ADA JALAN", hint: "PETIKAN" },
  ];
  
  let currentSentence = "";
  let currentHint = "";
  let guessedSentence = [];
  
  // DOM Elements
  const questionButtons = document.getElementById("question-buttons");
  const hintBox = document.getElementById("hint-box");
  const sentenceBox = document.getElementById("sentence-box");
  const letterInput = document.getElementById("letter-input");
  const checkButton = document.getElementById("check-button");
  const revealButton = document.getElementById("reveal-button");
  const gameMessage = document.getElementById("game-message");
  
  // Create buttons for each question
  function createQuestionButtons() {
    sentencesWithHints.forEach((item, index) => {
      const button = document.createElement("button");
      button.textContent = `Question ${index + 1}:`;
      button.dataset.index = index;
      button.addEventListener("click", () => initializeGame(index));
      questionButtons.appendChild(button);
    });
  }
  
  // Initialize the selected sentence
  function initializeGame(index) {
    currentSentence = sentencesWithHints[index].sentence;
    currentHint = sentencesWithHints[index].hint;
  
    guessedSentence = Array.from(currentSentence, (char) =>
      char === " " ? " " : "_"
    );
  
    displaySentence();
    displayHint();
    gameMessage.textContent = "Guess the sentence!";
  }
  
  // Display the current state of the sentence
  function displaySentence() {
    sentenceBox.innerHTML = guessedSentence
      .map((char, i) => {
        if (char === " ") {
          return `<div class="letter space"></div>`;
        } else if (char === "_") {
          return `<div class="letter empty"></div>`;
        } else {
          return `<div class="letter">${char}</div>`;
        }
      })
      .join("");
  }
  
  // Display the hint
  function displayHint() {
    hintBox.textContent = `PEMBAYANG: ${currentHint}`;
  }
  
  // Check if the input letter is in the sentence
  checkButton.addEventListener("click", () => {
    const inputLetter = letterInput.value.toLowerCase();
    if (!inputLetter) {
      gameMessage.textContent = "Please enter a letter!";
      return;
    }
  
    let isCorrect = false;
    for (let i = 0; i < currentSentence.length; i++) {
      if (currentSentence[i].toLowerCase() === inputLetter) {
        guessedSentence[i] = currentSentence[i];
        isCorrect = true;
      }
    }
  
    if (isCorrect) {
      gameMessage.textContent = "Good job! Keep going!";
    } else {
      gameMessage.textContent = "Wrong guess. Try again!";
    }
  
    displaySentence();
    letterInput.value = "";
  
    if (guessedSentence.join("") === currentSentence) {
      gameMessage.textContent = "Congratulations! You guessed the sentence!";
    }
  });
  
  // Reveal the entire sentence
  revealButton.addEventListener("click", () => {
    guessedSentence = currentSentence.split("");
    displaySentence();
    gameMessage.textContent = "The sentence is revealed!";
  });
  
  // Create question buttons on page load
  createQuestionButtons();
  