const numbers = [1, 2, 3 ,4];

// End 
const last = numbers.pop();
console.log(numbers);
console.log(last);

console.log('\n');

// Beginning
const first = numbers.shift();
console.log(numbers);
console.log(first);

console.log('\n');

// Middle
const removed = numbers.splice(0,1);
console.log(numbers);
console.log(removed);