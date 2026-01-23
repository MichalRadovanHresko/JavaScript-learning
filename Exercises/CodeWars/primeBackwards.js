function backwardsPrime (start, stop) {
    const result = [];
    for (let i = start; i <= stop; i++) {
        const rev = reverse(i);
        if (i !== rev && checkPrime(i) && checkPrime(rev)) {
            result.push(i);
        }
    }
    return result;
};

const isPrime = (array) => {
    const primeNumbers = [];
    for (let el of array) {
        if (checkPrime(el)) {
            if (el > 9)
                primeNumbers.push(el);
        }
    };   
    return primeNumbers;
};

const checkPrime = (num) => {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
};

const reverse = value => {
    return parseInt(String(value).split('').reverse().join(''));
};
