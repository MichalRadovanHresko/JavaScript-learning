/*
The goal of this exercise is to convert a string 
to a new string where each character in the new string is "(" if that character appears only once in the original string,
or ")" if that character appears more than once in the original string.
Ignore capitalization when determining if a character is a duplicate.
*/

function duplicateEncode(str) {
    if (str === undefined)
        throw new Error('Enter a value please')
    let original = str;
    let final = '';
    original = original.toLowerCase();
    for(let i = 0; i < original.length; i++) {
        console.log(i, original[i], original)
        if (original.split(original[i]).length - 1 === 1)
            final += '(';
        else
            final += ')';
    }
    return final;
}

console.log(duplicateEncode('success'));