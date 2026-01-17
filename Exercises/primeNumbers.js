// Prime numbers 
// Composite numbers

const showPrimes = limit => {
    for (let number = 2; number <= limit; number++) {
        let count = 0;
        for (let i = 1; i <= limit; i++)
            if (number % i === 0) count += 1;
        
        if (count <=2) console.log(`${number} is prime number.`);
    };
};


showPrimes(25);

// This was my solution but there is another one 
// This one I think is better because it breaks out of loop

const seePrimes = limit => { 
    for (let number = 2; number <= limit; number++) { 
        if (checkingPrime(number)) console.log(number);
    };
};

const checkingPrime = number => {
        for (let factor = 2; factor < number; factor++)
            if (number % factor === 0) return false;
        return true;
};

seePrimes(25);