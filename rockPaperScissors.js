let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const displayChoice = (choice, player) => {
  const displayElement = document.querySelector(`#${player}-display`);
  displayElement.innerHTML = `<img src="./images/icons/${choice}.png" alt="${choice}" />`;
};

const playRound = (humanChoice, computerChoice) => {
  displayChoice(humanChoice, 'user');
  displayChoice(computerChoice, 'computer');
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    humanScore++;
    console.log('You win this round!');
  } else {
    computerScore++;
    console.log('Computer wins this round!');
  }
  console.log(`Computer choice: ${computerChoice}`);
  console.log(`Human choice: ${humanChoice}`);
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
