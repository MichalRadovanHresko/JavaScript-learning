function isPalindrome (word) {
    const str = word.toLowerCase();
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[str.length - 1 - i]){
            count++;
        }
    }
    if (count === str.length){
        console.log('Its a Palindrome!!')
    } else {
        console.log('Its not palindrome!')
    }
}

isPalindrome('racecar');
isPalindrome('hello');

