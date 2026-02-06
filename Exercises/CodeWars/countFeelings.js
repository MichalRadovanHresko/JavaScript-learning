// You have two arguments: string - a string of random letters(only lowercase) and array - an array of strings(feelings). Your task is to return how many specific feelings are in the array.

// For example:

// string -> 'yliausoenvjw'
// array -> ['anger', 'awe', 'joy', 'love', 'grief']
// output -> '3 feelings.' // 'awe', 'joy', 'love'


// string -> 'griefgriefgrief'
// array -> ['anger', 'awe', 'joy', 'love', 'grief']
// output -> '1 feeling.' // 'grief'


// string -> 'abcdkasdfvkadf'
// array -> ['desire', 'joy', 'shame', 'longing', 'fear']
// output -> '0 feelings.'

// If the feeling can be formed once - plus one to the answer.

// If the feeling can be formed several times from different letters - plus one to the answer.

// Each letter in string participates in the formation of all feelings. 'angerw' -> 2 feelings: 'anger' and 'awe'.


function countFeelings(string, array) {
    if (typeof string !== 'string')
        throw new Error('Please enter valid value');
    if (!Array.isArray(array))
        throw new Error('Please enter valid array');

    let result = [];
    for(let element of array) {
        let count = 0;
        for (let i = 0; i < element.length; i++) {
            for (let j = 0; j < string.length; j++) {
                if (element[i] === string[j]) {
                    count++;
                    break;
                }
            }
        }
        if (count === element.length)
            result.push(element);
    }
    if (result.length === 1)
            return `${result.length} feeling.`
    return `${result.length} feelings.`
}


console.log(countFeelings('tomfaomonreotkkmaemafkwmroamgjoy',['anger', 'awe', 'joy', 'love', 'grief']));