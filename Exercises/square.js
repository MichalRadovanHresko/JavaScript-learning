
function nasobek () {
    const prompt = require('prompt-sync')();
    let theNumber = Number(prompt("Pick a number: "));
    return theNumber*theNumber;

}

console.log(nasobek());