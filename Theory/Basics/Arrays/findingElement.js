const numbers = [23, 566, 63351, 12, 'abc', true, 23, 66];

console.log(numbers.indexOf('bcd')); // If it isnt there => return -1 
console.log(numbers.indexOf(12));

// We can also define from which index we want to start searching up for element
console.log(numbers.indexOf(23,4));

console.log(numbers.lastIndexOf(66));

// That means this element exist in an array
console.log(numbers.indexOf(566) !== -1); // But this is a little ugly and we have newer method for this

// Newer method 
console.log(numbers.includes(566));

const cars = [
    {id: 1, name: 'Audi'},
    {id: 2, name: 'Mercedes'}
];

// Remember if you have an array with references types you have to use find !
// This will return false 
console.log('\nInclude method')
console.log(cars.includes({id: 1, name: 'Audi'}));

// Right way 
console.log('\nFind method')
console.log(cars.find(element => element.name === 'Mercedes'));
console.log(cars.find(element => element.name === 'xyz'));

// Same as Find method works findIndex it will just print the index where the reference type is located and not the reference type
console.log('\nFindIndex method')
console.log(cars.findIndex(element => element.name === 'Mercedes'));
console.log(cars.findIndex(element => element.name === 'xyz'));