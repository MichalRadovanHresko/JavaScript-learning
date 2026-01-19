let numbers = [1, 2, 3 ,4];

// Solution 1 Perfectly valid if you dont have multiple references to this array
// We can simply reasign to a new array if its let and not const
// numbers = [];

// Solution 2 
// numbers.length = 0;

// Solution 3 
// numbers.splice(0, numbers.length);

// Solution 4 Performance cost not recommended
// while (numbers.length > 0) {
//     numbers.pop();
// };

console.log(numbers);