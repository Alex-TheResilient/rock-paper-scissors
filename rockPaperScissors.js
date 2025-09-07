const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

// const playRound = (humanChoice, computerChoice) => {
//   if (humanChoice === computerChoice) {
//     alert("It's a tie!");
//   } else if (
//     (humanChoice === 'rock' && computerChoice === 'scissors') ||
//     (humanChoice === 'paper' && computerChoice === 'rock') ||
//     (humanChoice === 'scissors' && computerChoice === 'paper')
//   ) {
//     humanScore++;
//     alert('You win!');
//   } else {
//     computerScore++;
//     alert('Computer wins!');
//   }
//   console.log(`Computer choice: ${computerChoice}`);
//   console.log(`Human choice: ${humanChoice}`);
// };

document.querySelector('.choices').addEventListener('click', (event) => {
  const choice = event.target.closest('.choice');
  const img = choice.querySelector('img');
  if (img) {
    const userChoice = img.alt.toLowerCase();
    console.log('User selection:', userChoice);
    console.log('Computer selection:', getComputerChoice());
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
//   alert(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
// };
