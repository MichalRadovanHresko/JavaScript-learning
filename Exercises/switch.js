function guess () {
    let number = Math.floor(Math.random()*20+1);
    const prompt = require('prompt-sync')();
    console.log(number);
    let finished = false;
    while (finished==false){
        let theNumber = Number(prompt("Pick a number: "));
        switch (theNumber === number) {
        case true:
            console.log('You guessed the number!')
            finished = true;
            break;
        case false:
            console.log('Well well well you did not guessed the number!')
            break;
        }
    }
}

guess();