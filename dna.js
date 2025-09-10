const dnaPieces = ['A', 'C', 'G', 'T'];
let myArray = [];

for (let i = 0; i < 25 ; i++) {
    myArray.push(dnaPieces[Math.floor(Math.random()*4)]+dnaPieces[Math.floor(Math.random()*4)]+dnaPieces[Math.floor(Math.random()*4)]);
}
console.log(myArray);