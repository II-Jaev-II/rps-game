const buttons = document.querySelectorAll('.choice-btn button');
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');
const roundResultDisplay = document.getElementById('roundResult');

let playerScore = 0;
let computerScore = 0;
let rounds = 0;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (playerScore < 5 && computerScore < 5) {
      const playerChoice = button.textContent;
      const computerChoice = getComputerChoice();
      const result = determineWinner(playerChoice, computerChoice);
      displayResult(playerChoice, computerChoice, result);
      rounds++;
    }
    
    if (playerScore === 5 || computerScore === 5) {
      endGame();
    }
  });
});

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if (
    (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
    (playerChoice === 'Paper' && computerChoice === 'Rock') ||
    (playerChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
    playerScore++;
    return 'You win!';
  } else {
    computerScore++;
    return 'You lose!';
  }
}

function displayResult(playerChoice, computerChoice, result) {
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  roundResultDisplay.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
}

function endGame() {
  if (playerScore > computerScore) {
    roundResultDisplay.textContent = `You won the game with a score of ${playerScore}-${computerScore}!`;
  } else if (playerScore < computerScore) {
    roundResultDisplay.textContent = `You lost the game with a score of ${playerScore}-${computerScore}.`;
  } else {
    roundResultDisplay.textContent = `The game ended in a tie with a score of ${playerScore}-${computerScore}.`;
  }
  
  buttons.forEach(button => {
    button.disabled = true;
  });
}
