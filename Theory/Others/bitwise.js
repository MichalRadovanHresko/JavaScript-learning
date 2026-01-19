// 1 = 00000001
// 2 = 00000010
// R = 00000011 this R is 3 result of our bitwise OR it checks all the characters

// Bitwise OR 
console.log(1 | 2); 

// Bitwise AND
console.log(1 & 2);

// Read, Write, Execure
// 00000100
// 00000010
// 00000001

const readPermision = 4;
const writePermision = 2;
const executePermision = 1;

let myPermision = 0;
myPermision = myPermision | readPermision | writePermision;

// We don't care about this number 
console.log(myPermision)

let message = (myPermision & readPermision) ? 'yes you have read permision' : 'no you dont have permision';
console.log(message);