function persistence (num) {
    let count = 0;
    while (num >= 10 ) {
        let result = 1;
        let digits = num.toString();
        for (let i = 0; i < digits.length; i++) {
            result = result * parseInt(digits[i]);
        }
        count++;
        num = result;

    }
    console.log (`The are ${count} multiplicants`);
}
persistence(4);