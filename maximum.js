const maximumNumber = (num1, num2) => {
    if (num1 > num2) return num1;
    else if (num1 < num2) return num2;
    return 'They are equal';
};

console.log(maximumNumber(10,5));

// In the fuction we could also do return (a > b) ? a : b;