const numbers = [2, 5];

// End 
numbers.push(5,6);

// The beginning
numbers.unshift(25, 12, 155);  

// Middle 
numbers.splice(2, 0, 'a', 'b'); // Position, How many we want to delete, New Elements

console.log(numbers);