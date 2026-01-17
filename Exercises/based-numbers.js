let myNumber = 568;
let binary = "";

while (myNumber > 0) {
    if (myNumber % 2 === 0) {
        binary += '0';
    } else {
        binary += '1';
    }
    myNumber = Math.floor(myNumber / 2);
}
console.log(binary.split('').reverse().join(''));