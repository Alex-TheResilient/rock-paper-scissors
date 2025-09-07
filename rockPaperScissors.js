let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const updatedScore = () => {
  document.querySelector('#user-score').textContent = humanScore;
  document.querySelector('#computer-score').textContent = computerScore;
};

const displayChoice = (choice, player) => {
  const displayElement = document.querySelector(`#${player}-display`);
  displayElement.innerHTML = `<img src="./images/icons/${choice}.png" alt="${choice}" />`;
};

const displayResult = (message) => {
  document.querySelector('#round-result').textContent = message;
};

const playRound = (humanChoice, computerChoice) => {
  displayChoice(humanChoice, 'user');
  displayChoice(computerChoice, 'computer');
  if (humanChoice === computerChoice) {
    displayResult("It's a tie!");
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    humanScore++;
    displayResult('You win this round!');
  } else {
    computerScore++;
    displayResult('Computer wins this round!');
  }

  updatedScore();
};

document.querySelector('.choices').addEventListener('click', (event) => {
  const choice = event.target.closest('.choice');
  const img = choice.querySelector('img');
  if (img) {
    const userChoice = img.alt.toLowerCase();
    const computerChoice = getComputerChoice();
    playRound(userChoice, computerChoice);
  }
});

// const playGame = () => {
//   let humanScore = 0;
//   let computerScore = 0;

//   let rounds = 0;
//   do {
//     console.log('Round: ', rounds + 1);
//     playRound(getHumanChoice(), getComputerChoice());
//     rounds++;
//   } while (rounds < 5);
//   console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
// };
