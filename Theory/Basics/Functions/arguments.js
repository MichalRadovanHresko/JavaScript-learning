function sum () {
    let total = 0;
    for (let value of arguments) 
        total += value;
    return total;
};
// There is a better way to implement this function
// Arguments does not work on arrow functions!

console.log(sum(1, 2, 3, 4, 10, 12, 15));