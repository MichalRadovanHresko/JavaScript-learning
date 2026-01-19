// FALSY VALUES
/*
undefined
null
''
false
0
NaN
*/

// const name = 'Mosh'; 
// // Truthy value if we had empty string javascript would see it as falsy value 

// if (name) console.log('Hello World')

const test = [10, '', 3221, 493, null, 'Igor Matovic', NaN, 'Stvorsten'];

const isTruthy = array => { 
    let howManyTruthy = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i]) howManyTruthy++;
    };
    return howManyTruthy;
};

console.log(isTruthy(test));