  let sentencesWithHints = [];
  let currentSentence = "";
  let currentHint = "";
  let guessedSentence = [];
  let guessedLetters = new Set();

  
  // DOM Elements
  const questionButtons = document.getElementById("question-buttons");
  const hintBox = document.getElementById("hint-box");
  const sentenceBox = document.getElementById("sentence-box");
  const letterInput = document.getElementById("letter-input");
  const checkButton = document.getElementById("check-button");
  const revealButton = document.getElementById("reveal-button");
  const gameMessage = document.getElementById("game-message");
  
  // Fetch the sentences from the JSON file
fetch('questions.json')
.then(response => response.json())
.then(data => {
    sentencesWithHints = data;
    createQuestionButtons(); // Create buttons lepas data JSON difetch
})
.catch(error => console.error('Error fetching the JSON:', error));

  // Create buttons untuk setiap soalan
  function createQuestionButtons() {
    sentencesWithHints.forEach((item, index) => {
      const button = document.createElement("button");
      button.textContent = `Soalan ${index + 1}: ${item.hint}`;
      button.dataset.index = index;
      button.addEventListener("click", () => initializeGame(index));
      questionButtons.appendChild(button);
    });
  }
  
  // Initialize soalan
  function initializeGame(index) {
    currentSentence = sentencesWithHints[index].sentence;
    currentHint = sentencesWithHints[index].hint;
  
    guessedSentence = Array.from(currentSentence, (char) =>
      char === " " ? " " : "_"
    );
  
    guessedLetters.clear();
    displaySentence();
    displayHint();
    const questionText = document.getElementById("question-text");
    questionText.textContent = `Soalan: ${index + 1}`;

  // Hide start screen and show game elements
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("game-container").style.display = "block";
  

    gameMessage.textContent = "Teka ayat berikut!";
    checkButton.disabled = false;
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
    // Check kalau huruf sudah ditulis atau tidak.
    if (guessedLetters.has(inputLetter)) {
      gameMessage.textContent = "Huruf itu sudah ditulis!";
      letterInput.value = ""; // Clear input field
      return;
    }
    
  // Tambah huruf yang dah disemak ke quessedLetters
  guessedLetters.add(inputLetter);
    let isCorrect = false;
    for (let i = 0; i < currentSentence.length; i++) {
      if (currentSentence[i].toLowerCase() === inputLetter) {
        guessedSentence[i] = currentSentence[i];
        isCorrect = true;
      }
    }

    const currentButton = questionButtons.querySelector(`button[data-index="${sentencesWithHints.findIndex(item => item.sentence === currentSentence)}"]`);
  
    if (isCorrect) {
      gameMessage.textContent = "Hebat! Teruskan!";
    } else {
      gameMessage.textContent = "Salah. Cuba lagi!";
    }
  
    displaySentence();
    letterInput.value = "";
  
    if (guessedSentence.join("") === currentSentence) {
      gameMessage.textContent = "Tahniah! Jawapan anda tepat!";
      currentButton.classList.add("correct");
      checkButton.disabled = true;

      
    }
  });
  
  // Reveal the entire sentence
  revealButton.addEventListener("click", () => {
    guessedSentence = currentSentence.split("");
        // Display ayat bila PAPAR PERKATAAN ditekan.
        displaySentence();
        gameMessage.textContent = "Tahniah! Jawapan anda tepat!";

        checkButton.disabled = true;

        // Button tukar hijau bila PAPAR PERKATAAN ditekan.
        const currentButton = questionButtons.querySelector(`button[data-index="${sentencesWithHints.findIndex(item => item.sentence === currentSentence)}"]`);
        currentButton.classList.add("correct");
        
  });
  
  // Create question buttons on page load
  createQuestionButtons();
  