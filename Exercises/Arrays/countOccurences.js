const numbers = [1, 2, 3, 4, 5, 5, 6, 5];

const countOccurences = (array, searchElement) => {
    // let countable = 0;
    // for (let element of array) {
    //     if (element === searchElement) 
    //         countable ++;
    // };
    // return countable
    
    return array.reduce((accumulator, currentValue) => accumulator + (currentValue === searchElement ? 1 : 0),0);
};

const count = countOccurences(numbers,5);
console.log(count);
