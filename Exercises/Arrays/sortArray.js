function sortArray(array) {
    let odd = [];
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            odd.push(array[i]);
        }
    }
    
    odd.sort((a, b) => a - b);
    
    let oddIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            result.push(odd[oddIndex++]);
        } else {
            result.push(array[i]);
        }
    }
    
    return result;
}

console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); 