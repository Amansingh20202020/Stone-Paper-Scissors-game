const choices = document.querySelectorAll('.choice');
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const winnerDisplay = document.getElementById('winner');
const resetBtn = document.getElementById('reset');

const options = ['stone', 'paper', 'scissors'];

choices.forEach(button => {
  button.addEventListener('click', () => {
    const userChoice = button.dataset.choice;
    const computerChoice = options[Math.floor(Math.random() * 3)];

    userChoiceDisplay.textContent = `Your Choice: ${emoji(userChoice)} ${capitalize(userChoice)}`;
    computerChoiceDisplay.textContent = `Computer's Choice: ${emoji(computerChoice)} ${capitalize(computerChoice)}`;
    winnerDisplay.textContent = `Result: ${getWinner(userChoice, computerChoice)}`;
  });
});

resetBtn.addEventListener('click', () => {
  userChoiceDisplay.textContent = "Your Choice: ";
  computerChoiceDisplay.textContent = "Computer's Choice: ";
  winnerDisplay.textContent = "Result: ";
});

function getWinner(user, computer) {
  if (user === computer) return "It's a Draw!";
  if (
    (user === 'stone' && computer === 'scissors') ||
    (user === 'paper' && computer === 'stone') ||
    (user === 'scissors' && computer === 'paper')
  ) {
    return "You Win!";
  }
  return "Computer Wins!";
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function emoji(choice) {
  if (choice === 'stone') return '🪨';
  if (choice === 'paper') return '📄';
  if (choice === 'scissors') return '✂️';
}
