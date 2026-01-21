function getSum (a, b) {
    let result = 0;
    if (a>b) {
        [a, b] = [b, a];
    } 
    for (let i = a; i <= b; i++)
        result+=i;

    return result;
}

console.log(getSum(1, 0));