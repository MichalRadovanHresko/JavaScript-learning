const numbers = [1, 2, 3, -5];


// every() checks if every element matches the criteria
// some()  checks to see if have at least one element to match the criteria
// This is a new thing in javascript and old browser might not support this (but we have ways to use it in older browsers)

const allPositive = numbers.every(function(value) {
    return value >= 0; //even if one is not true it will evaluate false and stop the function
});

const atLeastOne = numbers.some(function (value) {
    return value === 1;
});

console.log(allPositive);
console.log(atLeastOne);    