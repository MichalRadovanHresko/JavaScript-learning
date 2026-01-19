// String Primitive
const message = ' This is a regular string';

// String Object
const another = new String('hi');

// Differences
console.log(typeof message);
console.log(typeof another);
console.log('\n')
console.log('Useful String Object\'s methods')

// With a string Object we can also use a lot of methods like with Objects
// We can look it up methods for string similarly as with objects on Docs MDN
// Here there are just few examples
console.log(message.length);
console.log(message[0]);
console.log(message.includes('regular'));
console.log(message.startsWith('This'));
console.log(message.indexOf('a'));
console.log(message.replace('regular','crazy'));
console.log(message.toLocaleLowerCase());
console.log(message.toLocaleUpperCase());
console.log(message.trim());
console.log(message.trimStart());
console.log(message.split(' '));

// Escape notation are also useful check docs for more info