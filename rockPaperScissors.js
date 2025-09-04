const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const getHumanChoice = () => {
  const choice = prompt('Enter rock, paper, or scissors:').toLowerCase();
  return choice;
};

const playGame = () => {
  let humanScore = 0;
  let computerScore = 0;

  const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
      alert("It's a tie!");
    } else if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
      humanScore++;
      alert('You win!');
    } else {
      computerScore++;
      alert('Computer wins!');
    }
    console.log(`Computer choice: ${computerChoice}`);
    console.log(`Human choice: ${humanChoice}`);
  };

  let rounds = 0;
  do {
    console.log('Round: ', rounds + 1);
    playRound(getHumanChoice(), getComputerChoice());
    rounds++;
  } while (rounds < 5);
  alert(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
};

playGame();
