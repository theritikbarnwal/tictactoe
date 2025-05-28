const boxes = document.querySelectorAll(".box");
const resetButton = document.querySelector(".ResetButton");
const newGameButton = document.querySelector(".NewGameButton");
const msg = document.querySelector(".msg");

let turnOfPlayer = true;
let gameActive = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

// Reset game state completely
const resetGame = () => {
  turnOfPlayer = true;
  gameActive = true;
  enableButtons();
  showMessage("🔄 Game has been reset!", "bg-blue-600");
};

// Soft reset on New Game only if game is over
const handleNewGame = () => {
  const allEmpty = [...boxes].every((box) => box.innerText === "");

  if (gameActive && !allEmpty) {
    showMessage("⚠️ Please complete the game before starting a new one!", "bg-yellow-600");
    return;
  }

  resetGame();
};

// Enable all boxes
const enableButtons = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
};

// Disable all boxes
const disableButtons = () => {
  boxes.forEach((box) => (box.disabled = true));
};

// Show game message
const showMessage = (text, colorClass = "bg-indigo-600") => {
  msg.innerText = text;
  msg.className = `msg text-xl font-semibold mb-6 px-4 py-2 rounded-lg shadow-md ${colorClass}`;
  msg.classList.remove("hidden");
};

// Check winner or draw
const checkWinner = () => {
  const playerX = localStorage.getItem('playerX') || "Player X";
  const playerO = localStorage.getItem('playerO') || "Player O";

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    const val1 = boxes[a].innerText;
    const val2 = boxes[b].innerText;
    const val3 = boxes[c].innerText;

    if (val1 && val1 === val2 && val2 === val3) {
      const winnerName = val1 === "X" ? playerX : playerO;
      showMessage(`🎉 ${winnerName} wins!`, "bg-green-600");
      gameActive = false;
      disableButtons();
      return;
    }
  }

  const allFilled = [...boxes].every((box) => box.innerText !== "");
  if (allFilled) {
    showMessage(`🤝 It's a draw!`, "bg-yellow-500");
    gameActive = false;
  }
};


// Handle box clicks
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (!gameActive || box.innerText !== "") return;

    box.innerText = turnOfPlayer ? "X" : "O";
    box.disabled = true;
    turnOfPlayer = !turnOfPlayer;
    checkWinner();
  });
});

// Button event listeners
newGameButton.addEventListener("click", handleNewGame);
resetButton.addEventListener("click", resetGame);


// When the page loads, check if the player names are already saved
window.onload = function() {
  const playerX = localStorage.getItem('playerX');
  const playerO = localStorage.getItem('playerO');
  const playerFormContainer = document.getElementById('playerFormContainer');

  // If player names are not saved, show the form
  if (!playerX || !playerO) {
    playerFormContainer.classList.remove('hidden');
  }
}

// Handling "Start Game" button click to save player names
document.getElementById('startGameBtn').addEventListener('click', function() {
  const playerX = document.getElementById('playerX').value;
  const playerO = document.getElementById('playerO').value;

  if (playerX && playerO) {
    localStorage.setItem('playerX', playerX);
    localStorage.setItem('playerO', playerO);
    alert('Players saved! You can now view them.');
  } else {
    alert('Please enter both player names.');
  }
});

// Handling "View Players" button click
document.getElementById('viewPlayersBtn').addEventListener('click', function() {
  const playerX = localStorage.getItem('playerX');
  const playerO = localStorage.getItem('playerO');

  const msgContainer = document.getElementById('playerNamesMsg');
  
  if (playerX && playerO) {
    msgContainer.classList.remove('hidden');
    msgContainer.innerText = `Player X: ${playerX} | Player O: ${playerO}`;
  } else {
    msgContainer.classList.remove('hidden');
    msgContainer.innerText = 'Player names are not set yet!';
  }
});
