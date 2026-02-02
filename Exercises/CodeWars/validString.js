// You are given a sequence of valid words and a string. Test if the string is made up by one or more words from the array.
// Task

// Test if the string can be entirely formed by consecutively concatenating words of the dictionary.

// For example:

// dictionary: ["code", "wars"]

// s1:         "codewars" =>  true  -> match 'code', 'wars'
// s2:         "codewar"  =>  false -> match 'code', unmatched 'war'

// One word from the dictionary can be used several times.


function validWord(dictionary, word) {
    if (typeof dictionary !== 'object')
        throw new Error('Please enter valid value');
    if (typeof word !== 'string')
        throw new Error('Please enter valid value');
    if (word === '') {
        return true;
    }
    for (let w of dictionary)
        if (word.startsWith(w)) {
            if (validWord(dictionary, word.slice(w.length))) {
                return true;
            }
        }
    return false;
}