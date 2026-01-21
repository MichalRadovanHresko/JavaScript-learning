// Create function like includes method

const includes = (array, searchElement) => {
    for (let element of array) 
        if (element === searchElement)
            return true;
    return false;
};

const numbers = [1, 2, 3, 6];

console.log(includes(numbers, 3));
