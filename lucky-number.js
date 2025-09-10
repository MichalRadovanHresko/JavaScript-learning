const luckyNumber = 32;
let guess = Math.floor(Math.random()*100)+1;
let attempts = 1;
while (luckyNumber!=guess) {
    guess = Math.floor(Math.random()*100)+1;
    console.log('Generating another number! ' + guess);
    attempts++;
}
console.log('Your lucky number is '+ guess + ' and you got it on ' + attempts + ' attempts.');