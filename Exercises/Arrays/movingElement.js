const numbers = [1, 2, 3, 5, 6, 9, 10, 13];

const move = (array, index, offset) => {
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('Invalid offset');
        return;
    };
    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;
};


const output = move(numbers, 1, 3);

console.log(output);