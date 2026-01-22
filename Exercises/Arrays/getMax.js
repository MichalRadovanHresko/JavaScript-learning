const numbers = [1, 2, 3, 4];

const getMax = array => {
    let max = array[0];
    return compare(array, max);
};

const compare = (array, max) => {
    for (let number of array) {
        if (max < number) 
            max = number;
    };
    return max;
};

const max = getMax(numbers);
console.log(max);

// There is more elegant way with .reduce()

const redMax = array => {
    return array.reduce((a,b) =>  (a > b) ?  a:  b);
};

console.log(redMax(numbers));