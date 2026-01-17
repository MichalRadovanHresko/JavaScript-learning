let player1 = Math.floor(Math.random() * 3);
let player2 = Math.floor(Math.random() * 3);
const rock = 0;
const paper = 1;
const scissors = 2;
// premena na string
if (player1 === 0) {
    player1 = 'rock';
} else if (player1 === 1) {
    player1 = 'paper';
} else {
    player1 = 'scissors';
}
if (player2 === 0) {
    player2 = 'rock';
} else if (player2 === 1) {
    player2 = 'paper';
} else {
    player2 = 'scissors';
}

console.log('Player 1 picked: '+player1);
console.log('Player 2 picked: '+player2);
console.log('         ')

if (player1 === player2) {
    console.log("It's a tie!");
} else if (
    (player1 === 'rock' && player2 === 'scissors') ||
    (player1 === 'paper' && player2 === 'rock') ||
    (player1 === 'scissors' && player2 === 'paper')
) {
    console.log('Player 1 won!');
} else {
    console.log('Player 2 won!');
}