// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450   -> 145
// 960000 -> 96
// 1050   -> 105
// -1050  -> -105
// 0      -> 0

function noBoringZeros(n) {
    if (typeof n !== 'number')
        throw new Error('Invalid value');
    return Number(String(n).replace(/0+$/, '')); // 0+ => one or more , $ => at the end 
}

console.log(noBoringZeros(20260));