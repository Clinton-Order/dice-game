// Function to update player names
function updateNames() {
  let player1Input = document.getElementById("player1Name").value.trim();
  let player2Input = document.getElementById("player2Name").value.trim();

  if (player1Input) {
    document.getElementById("player1Label").innerText = player1Input;
  }
  if (player2Input) {
    document.getElementById("player2Label").innerText = player2Input;
  }
}

// Function to roll dice and determine the winner
function rollDice() {
  let player1Name = document.getElementById("player1Label").innerText || "Player 1";
  let player2Name = document.getElementById("player2Label").innerText || "Player 2";

  // Generate random dice rolls
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  // Update dice images
  document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
  document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

  // Determine winner
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = `🚩 ${player1Name} Wins!`;
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = `${player2Name} Wins! 🚩`;
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}
