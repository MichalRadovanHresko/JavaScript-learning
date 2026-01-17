function descendingOrder(num) {
    let digits = num.toString().split(''); 
    
    // Bubble sort
    for (let i = 0; i < digits.length; i++) {
        for (let j = 0; j < digits.length - 1 - i; j++) {
            if (digits[j] < digits[j + 1]) {
                [digits[j], digits[j + 1]] = [digits[j + 1], digits[j]]; 
            }
        }
    }
    
    return parseInt(digits.join('')); 
}
descendingOrder(42145); 