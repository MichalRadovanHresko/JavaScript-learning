const prompt = require('prompt-sync')();

let theNumber = Number(prompt("Pick a number: "));

if (Number.isNaN(theNumber)) {
    console.log("Please enter a valid number!");
} else {
    console.log("Your square is: " + theNumber * theNumber);
}