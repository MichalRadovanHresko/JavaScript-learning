function digitalRoot(num) {
    while (num >= 10) { 
        let sum = 0;
        let digits = num.toString();
        
     
        for (let i = 0; i < digits.length; i++) {
            sum += parseInt(digits[i]);
        }
        
        num = sum; 
    }
    
    return num;
}

console.log(digitalRoot(195)); 