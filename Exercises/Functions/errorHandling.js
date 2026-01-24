const numbers = [1, 2, 3, 4];
try {
    const count = countOccurences(numbers, 1);
}
catch (exception) {
    console.log(exception);
};

function countOccurences (array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('Invalid Array');
    return array.reduce((a,c)=> {
        const occurence = (c === searchElement) ? 1 : 0;
        return a + occurence;
    }, 0)
}