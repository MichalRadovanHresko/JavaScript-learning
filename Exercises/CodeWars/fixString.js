// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters
// Your task is to convert that string to either lowercase only or uppercase only based on:

//     make as few changes as possible.
//     if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.


function solve(str) {
    let countUp = 0;
    let countL = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase())
            countUp++;
        else 
            countL++;
    }
    if (countUp === countL || countUp < countL)
        return str.toLowerCase();
    else
        return str.toUpperCase();
}

console.log(solve('Astronaut'));