const  powers = n => {
    let arr = [];
    for (let i = 0; i <= n; i++) {
        arr.push(2**i);
    };

    let results = [];
    for (let i = 0; i < arr.length; i++)
        if (arr[i] === n)
            results.push(arr[i]);
    for (let i = 0; i < arr.length; i++)
        for (let j = i + 1; j < arr.length; j++)
            if (arr[i] + arr[j] === n)
                results.push([arr[i], arr[j]]);
    
    return results.flat();
};
console.log(powers(2048));
