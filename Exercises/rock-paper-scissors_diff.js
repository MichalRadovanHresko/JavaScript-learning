const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Error message');
  }
}; 
function getComputerChoice () {
  const number = Math.floor(Math.random()*3);
  switch (number) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2: 
      return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game is tie!';
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!'
    } else {
      return 'The user won!'
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'The user won!';
    }
  } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer won!';
      } else {
        return 'The user won!';
      }
  }
}
const playGame = () => {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();