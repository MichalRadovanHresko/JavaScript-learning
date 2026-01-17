

const fizzBuzz = input => {
    if (typeof input !== 'number')
        return NaN; // This is commonly used it means Not a number 
    else if ((input % 3 === 0) && (input % 5 === 0)) 
        return 'FizzBuzz';
    else if (input % 3 === 0) 
        return 'Fizz';
    else if (input % 5 === 0 )
        return 'Buzz';
    else 
        return input;
};

console.log(fizzBuzz(9));