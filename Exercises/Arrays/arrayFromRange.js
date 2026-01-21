const arrayFromRange = (min, max) => {
    const interval = [];
    for (let i = min; i <= max; i++)
        interval.push(i);
    return interval;
};


const numbers = arrayFromRange(-10, -4);

console.log(numbers);